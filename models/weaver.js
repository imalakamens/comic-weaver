const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {type: String}, 
    name: {type: String}
});

module.exports = mongoose.model('User', userSchema);