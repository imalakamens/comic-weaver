const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    title: String,
    issueNum: Number,
    writers: [{
        type: Schema.Types.ObjectId, ref: 'Writer',
        default: null
    }],
    artists: [{
        type: Schema.Types.ObjectId, ref: 'Artist',
        default: null
    }],
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