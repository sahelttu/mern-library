const Book = require("../models/bookModel");
const mongoose = require("mongoose");

//Get all
const getBooks = async (req, res) => {
    const books = await Book.find({}).sort({createdAt: -1});

    res.status(200).json(books);
}

//get by id
const getBook = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such book"});
    };
    const book = await Book.findById(id);

    if(!book){
        return res.status(404).json({error: "No book"});
    };

    res.status(200).json(book);
};

//create
const createBook = async (req, res) => {
    const {title, author, description} = req.body;
    let emptyFields = [];

    if(!title){
        emptyFields.push("title");
    }if(!author){
        emptyFields.push("author");
    }if(!description){
        emptyFields.push("description")
    }if(emptyFields.length > 0){
        return res.status(400).json({error: "Please fill in the fields: ", emptyFields});
    }

    console.log(req.body);

    try {
        const book = await Book.create({title, author, description});
        res.status(200).json(book);
    } catch (error) {
        console.log("failed");
        res.status(400).json({error: error.message});
    };
};

//delet
const deleteBook = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such book"});
    };

    const book = await Book.findOneAndDelete({_id: id});
    if(!book) {
        return res.status(404).json({error: "No such book"});
    };

    res.status(200).json(book);
}

// patch a book
const updateBook = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such book"});
    };

    const book = await Book.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if(!book){
        return res.status(404).json({error: "No such book"});
    };

    res.status(200).json(book);
};

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};