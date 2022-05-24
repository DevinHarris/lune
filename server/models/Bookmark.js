const { nanoid } = require('nanoid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const BookmarkSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(8),
        index: {
            unique: true
        }
    },
    url: {
        type: String,
        required: true
    },
    date: {
        default: Date.now,
        type: Date
    },
    title: {
        type: String
    },

    tags: {
        type: [String]
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Bookmark', BookmarkSchema);