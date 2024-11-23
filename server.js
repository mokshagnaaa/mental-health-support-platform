
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


const postSchema = new mongoose.Schema({
    content: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);


app.get('/api/posts', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

app.post('/api/posts', async (req, res) => {
    const newPost = new Post({ content: req.body.content });
    await newPost.save();
    res.json(newPost);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
