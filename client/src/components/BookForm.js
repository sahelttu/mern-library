import {useState} from "react";
import { useBookContext } from "../hooks/useBookContext";


const BookForm = () => {
    const {dispatch} = useBookContext();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const book = {title, author, description};
        const response = await fetch("/api/books", {
            method: "POST",
            body: JSON.stringify(book),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const json = await response.json();
        if (!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } if (response.ok) {
            setTitle("");
            setAuthor("");
            setDescription("");
            setError(null);
            setEmptyFields([]);
            console.log("New book added", json);
            dispatch({type: "CREATE_BOOK", payload: json});
        };
    };

    return (
        <form className="createBook" onSubmit={handleSubmit}>
            <h3>Add a new Book</h3>
            <label>Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <br />
            <label>Author:</label>
            <input
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
            />
            <br/>
            <label>Description:</label>
            <textarea
                className="inputDescription"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            <br/>

            <button>Save as New</button>
            <button>Save</button>
            <br/>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default BookForm;