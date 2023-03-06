import React from "react";

const Book = (props) => {
    //destructuring
    const { title, image, author } = props.book;
    //attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert("Hello World");
    };
    const complexExample = (author) => {
        console.log(author);
    };

    return (
        <article className="book">
            <h1>{title}</h1>
            <img
                onMouseOver={() => {
                    console.log(title);
                }}
                src={image}
                alt=""
            />
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                Reference Example
            </button>
            <button type="button" onClick={() => complexExample(author)}>
                More Complex Example
            </button>
        </article>
    );
};

export default Book;
