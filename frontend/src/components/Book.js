import React from "react";

const Book = ({ book, onRemoveBook = (f) => f, editingBook = (f) => f }) => (
    <div className="card mt-2" key={book.id}>
        
            <h5 className="card-header">ISBN: #2346432{(book.id)}</h5>
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <blockquote class="blockquote mt-1">
                    <footer class="blockquote-footer">By <cite title="Source Title">{book.author}</cite></footer>
                </blockquote>
                <div className="d-flex flex-row">
                    <button className="btn btn-success" onClick={() => onRemoveBook(book.id)}>Delete</button>
                    <button className="btn btn-danger" onClick={() => editingBook(book.id)}>Edit</button>
                </div>
            </div>

        {/* <p>
            <b>{book.title}</b> by {book.author}
            <br />
            Genre: {book.genre}
        </p>
        <div className="buttons">
            <button onClick={() => onRemoveBook(book.id)}>Delete</button>
            <button onClick={() => editingBook(book.id)}>Edit</button>
        </div> */}
    </div>
);

export default Book;