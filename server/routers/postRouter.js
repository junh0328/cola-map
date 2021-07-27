const express = require('express');
const auth = require('../middleware/auth');
const postRouter = express.Router();
const Post = require('../models/post');
const Store = require('../models/store');
const getMostPosted = require('../util/getMostPosted');
const { ObjectId } = require('mongodb');
// 제보하기
postRouter.post('/', auth, async (req, res) => {
  try {
    
    const kakaoId = req.body.kakaoId;
    const storeName = req.body.storeName;
    const addressX = req.body.addressX;
    const addressY = req.body.addressY;
    const drink = req.body.drink;
    const comment = req.body.comment;
    
    const is_posted = await Post.countDocuments({
      store: kakaoId,
      user: req.user,
    });
    if (is_posted !== 0) {
      return res.status(400).send({ message: '이미 등록한 업체입니다.' });
    }

    const exStore = await Store.findOne({kakaoId : kakaoId})
    if(!exStore) {
        const newStore = new Store({
        storeName: storeName,
        kakaoId: kakaoId,
        addressX: addressX,
        addressY: addressY,
        mostPosted: drink,
      });
      await newStore.save();
    } else { 
      if (drink !== exStore.mostPosted) {
        const reqCount = await Post.countDocuments({
          store: kakaoId,
          drink: drink,
        });
        const mostPostedCount = await Post.countDocuments({
          store: kakaoId,
          drink: exStore.mostPosted,
        });
        if (reqCount + 1 > mostPostedCount) {
          exStore.mostPosted = drink;
          await exStore.save();
        }
      }
    }
    const posts = await Post.create({
      store: kakaoId,
      user: req.user,
      drink: drink,
      comment: comment,
    });

    const result = {
      store: kakaoId,
      post: {
        _id: posts._id,
        user: {
          _id: req.user._id,
          profileNickname: req.user.profileNickname,
          profileImage:req.user.profileImage
        },
        drink: drink,
        comment: comment
      },
    }
    res.status(200).send({ result });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// 특정 Store에 제보목록 받기
postRouter.get('/store/:storeId', async (req, res) => {
  try {
    const store = req.params.storeId;

    const posts = await Post.find({ store: store })
      .populate('user', 'profileNickname profileImage')
      .sort({ createdAt: -1 })
      .select('drink comment user');

    const result = {
      store: store,
      posts: posts,
    };

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
          user: ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      {
        $unwind: {
          path: '$user',
        },
      },
      {
        $lookup: {
          from: 'stores',
          let: { store: '$store' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$kakaoId', '$$store'],
                },
              },
            },
          ],
          as: 'store',
        },
      },
      {
        $unwind: {
          path: '$store',
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $group: {
          _id: '$user',
          posts: {
            $push: '$$ROOT',
          },
        },
      },
      {
        $project: {
          '_id.profileNickname': 1,
          '_id.uniqId': 1,
          'posts._id': 1,
          'posts.drink': 1,
          'posts.comment': 1,
          'posts.store.storeName': 1,
          'posts.store.kakaoId': 1,
        },
      },
    ];

    const posts = await Post.aggregate(pipeline);

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

    await Store.findOneAndUpdate({ kakaoId: post.store }, { mostPosted: mostPosted });

    res.status(200).send({ message: 'success' });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = postRouter;
