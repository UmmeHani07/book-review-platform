import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/books")
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    }, []);

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map((book) => (
                    <li key={book._id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
}

export default Books;
