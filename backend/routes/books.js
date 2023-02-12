const express = require("express");
const {
    createBook,
    getBook,
    getBooks,
    deleteBook,
    updateBook
} = require("../controllers/bookController");
const router = express.Router();


//GET ALL
router.get("/", getBooks);

//GET by id
router.get("/:id", getBook);

//POST a book
router.post("/", createBook);

//DELETE a book
router.delete("/:id", deleteBook);

//PATCH a book
router.patch("/:id", updateBook);

module.exports = router;