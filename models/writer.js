const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const writerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('Writer', writerSchema);