const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Masukan Title'],
        unique: true,
        maxlength: [40, 'Title minimal 40 karakter']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Deskripsi max 200 karakter']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);