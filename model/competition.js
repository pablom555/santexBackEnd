const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let competitionSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    code: {
        type: String
    },
    areaName: {
        type: String,
        required: [true, 'the Area Name is required']
    },

})

module.exports = mongoose.model('Competition', competitionSchema);