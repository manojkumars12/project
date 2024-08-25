const mongoose = require("mongoose");

//.env
mongoose.connect("mongodb+srv://mk689417:mFb5kq0sqmuLDpVA@cluster0.2rvbnxg.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
