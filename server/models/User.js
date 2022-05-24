const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bookmark = require('./Bookmark');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        default: Date.now
    },

    bookmarks: [{
        type: mongoose.Types.ObjectId,
        ref: 'Bookmark'
    }]
});

module.exports = mongoose.model('User', UserSchema);