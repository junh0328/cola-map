const Post = require("../models/post")
const mongoose = require('mongoose');

const getMostPosted = async(storeId) => {
    const post = await Post.aggregate([
        {
            $match: {
                store: storeId
            }
        },
        {
            $group: {
                _id: '$drink',
                item: {
                    $push: '$$ROOT'
                }
            }
        },
        {
            $addFields: {
                n_count: {
                    $size: '$item'
                }
            }
        },
        {
            $sort: {
                n_count: -1
            }
        }
    ])
    
    return post[0]._id;
}

module.exports = getMostPosted;