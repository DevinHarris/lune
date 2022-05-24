const express = require('express');
const User = require('../models/User');
const authRouter = express.Router();

authRouter.post('/signup',  async (req, res) => {
    const { body } = req;
    try {
        const user = await User.create(body);
        console.log('User successfully created!');
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            errorMessage: `Sorry, there was an error: ${err}`
        })
    }
})

module.exports = authRouter;