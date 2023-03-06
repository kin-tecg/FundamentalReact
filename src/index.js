import React from "react";
import { createRoot } from "react-dom/client";

//file
import { books } from "./books";
import Book from "./Book";

// CSS
import "./index.css";
//setup variables



function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.id} book={book}></Book>;
            })}
        </section>
    );
}



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
