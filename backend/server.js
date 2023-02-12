require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");

const app = express();

const port = process.env.PORT || 5000;
const aURI = process.env.ATLAS_URI;

app.use(express.urlencoded({
    extended:true
}));
app.use(express.static("public"));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/books", bookRoutes);

//db connect
mongoose.connect(aURI, {useNewUrlParser:true})
.then(() => {
 app.listen(port, () => {
    console.log(`Connected to db, listening on port ${port}`);
});   
})
.catch((error) => {
    console.log(error);
});

