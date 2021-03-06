const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//Get ALL posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
});


//Submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        location: req.body.location
    })
    try {
        const savedPost = await post.save();
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
});

//Find specific post
router.get('/:postId', async (req, res)=>{
    try{
   const post = await Post.findById(req.params.postId);
   res.json(post);
    } catch (err) {
        res.json({message: err})
    }
})

//Delete post
router.delete('/:postId', async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({message: err})
    }
})

// Update Post
router.patch('/:postId', async (req,res)=>{
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId}, { $set: {name: req.body.name}});
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router; 