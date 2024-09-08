const mongoose = require('mongoose');

mongoose.connect("your connection string");

const userSchema = new mongoose.Schema({
    name: String,
    number: String,
    startDate: String,
    endDate: String,
    currentlyWork: Boolean,
})
const fileSchema = new mongoose.Schema({
    file: File,
})

const userModel = mongoose.model('/userData', userSchema);

module.exports =userModel;

