const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const writerSchema = new Schema ({
    name: String
});

const artistSchema = new Schema ({
    name: String
});

const comicSchema = new Schema({
    title: String,
    issueNum: Number,
    writers: [writerSchema],
    artists: [artistSchema],
    isOwned: {
        type: Boolean,
        default: false
    },
    isRead: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Comic', comicSchema);