import { useBookContext } from "../hooks/useBookContext";

const BookDetails = ({book}) => {
    const {dispatch} = useBookContext();

    const handleClick = async () => {
        const response = await fetch("/api/books/" + book._id, {
            method: "DELETE"
        });
        const json = await response.json();

        if (response.ok){
            dispatch({type: "DELETE_BOOK", payload: json});
        }
    }
    
    return(
        <tr className="book-details">
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.description}</td>
            <td>
            <button onClick={handleClick}>Delete</button>
            <button>Edit</button>
            </td>
        </tr>
    );
};

export default BookDetails;