# mern-library
MERN stack application that lets the user add and remove books from a database.

# How to run the Server
To run the server, go to the backend folder in cmd and enter:
```
node server
```

To run the server you need credentials to the database. Then go to the .env file and replace ATLAS_URI's username and password with the credentials. Also remove the <> 
surrounding the username and password in the URI.
```
mongodb+srv://<username>:<password>@bookapp.ues8wsq.mongodb.net/?retryWrites=true&w=majority
```
To run the client, go to the client folder in cmd and enter:
```
npm start
```
# How to operate the App

To add a new book, fill the form on the left and press "Save as new" button. The book should appear on the right.

To remove a book, simply click the Delete button of the book in the book list on the right.
