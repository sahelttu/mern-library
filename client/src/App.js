import {useEffect} from "react";
import BookDetails from "./components/bookDetails";
import BookForm from "./components/BookForm";
import { useBookContext } from "./hooks/useBookContext";

const App = () => {
  const {books, dispatch} = useBookContext();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok){
        dispatch({type: "SET_BOOKS", payload: json})
      };
    };
    fetchBooks();
  }, [dispatch]
  );

  return (
    <div className="books">
      <BookForm/>
      <table className="table-books">
        <thead>
          <tr>
            <th className="th-title">Title</th>
            <th className="th-author">Author</th>
            <th className="th-description">Description</th>
          </tr>
        </thead>
          <tbody className="booklist">
            {books && books.map((book) => (
              <BookDetails key={book._id} book={book}/>
            ))}        
          </tbody>
      </table>  
    </div>
  )
}


export default App;
