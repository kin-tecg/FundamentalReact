import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";
//setup variables

const books = [
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL300_SR300,200_.jpg",
        title: "Atomic Habits",
        author: "James Clear",
    },
    {
        image: "https://images-fe.ssl-images-amazon.com/images/I/71wR8wezE1L._AC_UL600_SR600,400_.jpg",
        title: "12 Rules For Life",
        author: "Jordan B Peterson",
    },
    {
        image: "https://images-fe.ssl-images-amazon.com/images/I/71J3+5lrCDL._AC_UL600_SR600,400_.jpg",
        title: "Psychology of Money",
        author: "Morgan Housel",
    },
];

function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.image} book={book}></Book>;
            })}
        </section>
    );
}

const Book = (props) => {
    //attribute, eventHandler
    // onClick, onMouseOver
    const { title, image, author } = props.book;
    return (
        <article className="book">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <h4>{author}</h4>
            <button type="button" onClick={}></button>
        </article>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
