const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const BookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true },
    authors: { type: Array }
});

const Book = Model("Book", BookSchema);

module.exports = Book;