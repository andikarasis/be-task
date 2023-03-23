const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    judul: {
        required: true,
        type: String
    },
    deskripsi: {
        required: false,
        type: String
    },
    selesai: {
        required: true,
        default: false,
        type: Boolean
    }
})

module.exports = mongoose.model('Data', dataSchema)