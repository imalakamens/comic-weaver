const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    title: String,
    issueNum: Number,
    writers: [{
        type: Schema.Types.ObjectId, ref: 'Writer'
    }],
    artists: [{
        type: Schema.Types.ObjectId, ref: 'Artist'
    }],
    isRead: {
        type: Boolean,
        default: false
    },
    addedBy : {
        type: Schema.Types.ObjectId, 
        ref:'User'
    } 
});

module.exports = mongoose.model('Comic', comicSchema);