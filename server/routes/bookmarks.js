const express = require('express');
const Bookmark = require("../models/Bookmark");
const Router = express.Router();

Router.get('/bookmarks', async (req, res) => {

    const bookmarks = await Bookmark.find();

    res.status(200).json(bookmarks);
})

Router.get('/bookmark/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const bookmark = await Bookmark.findOne({ id });
        res.status(200).json(bookmark);
    } catch(err) {
        console.log(err);
    }

    res.status(200).json({
        message: 'single bookmark'
    })
})

Router.post('/add', async (req, res) => {
    const { body } = req;

    try {
        const bookmark = await Bookmark.create(body);
        res.status(201).json(bookmark);
    } catch(err) {
        console.log(`There was an error ${err}`);
    }
})

module.exports = Router;