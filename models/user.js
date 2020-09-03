const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    //This doesn't "have" to be a list/array, but I'm just gonna try to get it working then maybe experiment later..
    weave: [{
        type: Schema.Types.ObjectId,
        ref: 'Comic'
    }]
});

module.exports = mongoose.model('User', userSchema);