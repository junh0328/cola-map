const express = require('express');
const auth = require('../middleware/auth');
const postRouter = express.Router();
const Post = require('../models/post');
const Store = require('../models/store');
const getMostPosted = require('../util/getMostPosted');
const {ObjectId} = require('mongodb')
// 제보하기
postRouter.post('/', auth, async (req, res) => {
  try {
    const store = req.body.store;
    if (store) {
      // 이미 store 가 존재할 경우

      const is_posted = await Post.countDocuments({
        store: store,
        user: req.user,
      });
      // if (is_posted !== 0) {
      //   return res.status(400).send({ message: '이미 등록한 업체입니다.' });
      // }

      const storeObject = await Store.findOne({ kakaoId: store });
      if (req.body.drink !== storeObject.mostPosted) {
        const reqCount = await Post.countDocuments({
          store: store,
          drink: req.body.drink,
        });
        const mostPostedCount = await Post.countDocuments({
          store: store,
          drink: storeObject.mostPosted,
        });
        if (reqCount + 1 > mostPostedCount) {
          storeObject.mostPosted = req.body.drink;
          await storeObject.save();
        }
      }
      await Post.create({
        store: storeObject.kakaoId,
        user: req.user,
        drink: req.body.drink,
        comment: req.body.comment,
      });
    } else {
      // 신규등록
      const newStore = new Store({
        storeName: req.body.storeName,
        kakaoId: req.body.kakaoId,
        addressX: req.body.addressX,
        addressY: req.body.addressY,
        mostPosted: req.body.drink,
      });
      await newStore.save();

      await Post.create({
        store: newStore.kakaoId,
        user: req.user,
        drink: req.body.drink,
        comment: req.body.comment,
      });
    }
    // req.user.point += 10
    // await req.user.save()
    res.status(200).send({ message: 'success' });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// 특정 Store에 제보목록 받기
postRouter.get('/store/:storeId', async (req, res) => {
  try {
    const store = req.params.storeId;
    
    const posts = await Post.find({store: store})
      .populate('user', 'profileNickname profileImage')
      .sort({ createdAt: -1 })
      .select('drink comment user')

    const result = {
      store: store,
      posts: posts
    }

    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// 내가 한 제보 조회
postRouter.get('/user', auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const pipeline = [
      {
        $match: {
          user: ObjectId(userId)
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: {
          path: '$user'  
        }
      },
      {
        $lookup: {
          from: "stores",
          let: {store: '$store'},
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$kakaoId', '$$store']
                }
              }
            },
          ],
          as: 'store'
        }
      },
      {
        $unwind: {
          path: '$store'
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $group: {
          _id: '$user',
          posts: {
            $push: '$$ROOT'
          }
        }
      },
      {
        $project: {
          '_id.profileNickname':1,
          '_id.uniqId': 1,
          'posts._id': 1,
          'posts.drink': 1,
          'posts.comment': 1,
          'posts.store.storeName': 1,
          'posts.store.kakaoId': 1
        }
      }
    ]

    const posts = await Post.aggregate(pipeline)

    res.status(200).send(posts[0]);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// 내가 한 제보 삭제
postRouter.delete('/:postId', auth, async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      user: req.user,
      _id: req.params.postId,
    });
    const mostPosted = await getMostPosted(post.store);

    await Store.findOneAndUpdate(
      { kakaoId: post.store },
      { mostPosted: mostPosted }
    );

    res.status(200).send({ message: 'success' });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = postRouter;
