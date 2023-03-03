import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";
//setup variables

const book1 = {
    img: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL300_SR300,200_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
};
const book2 = {
    img: "https://images-fe.ssl-images-amazon.com/images/I/71wR8wezE1L._AC_UL600_SR600,400_.jpg",
    title: "12 Rules For Life",
    author: "Jordan B Peterson",
};
const book3 = {
    img: "https://images-fe.ssl-images-amazon.com/images/I/71J3+5lrCDL._AC_UL600_SR600,400_.jpg",
    title: "Psychology of Money",
    author: "Morgan Housel",
};

function BookList() {
    return (
        <section className="booklist">
            <h1 style={{ textAlign: "center" }}>Keane Putra Setiawan's Library</h1>
            <Book title={book1.title} author={book1.author} image={book1.img}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eveniet!</p>
            </Book>
            <Book title={book2.title} author={book2.author} image={book2.img} />
            <Book title={book3.title} author={book3.author} image={book3.img} />
        </section>
    );
}

const Book = (props) => {
    const { title, image, author, children } = props;
    return (
        <article className="book">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <h4>{author}</h4>
            {children}
        </article>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
