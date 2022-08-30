import React, { Component } from "react";
import axios from "axios";
import Book from "./Book";
import NewBookForm from "./BookForm";

export default class BooksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
        this.addBook = this.addBook.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    componentDidMount() {
        axios
            .get("api/v1/books.json")
            .then((response) => {
                console.log(response);
                this.setState({
                    books: response.data,
                });
            })
            .catch((error) => console.log(error));
    }

    addBook(title, excerpt) {
        axios
            .post("/api/v1/books", { book: { title, excerpt } })
            .then((response) => {
                console.log(response);
                const books = [...this.state.books, response.data];
                this.setState({ books });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    removeBook(id) {
        axios
            .delete("/api/v1/books/" + id)
            .then((response) => {
                const books = this.state.books.filter((book) => book.id !== id);
                this.setState({ books });
            })
            .catch((error) => console.log(error));
    }

    editingBook(id) {
        this.setState({
            editingBookId: id,
        });
    }

    editBook(id, title, excerpt) {
        axios
            .put("/api/v1/books/" + id, {
                book: {
                    title,
                    excerpt,
                },
            })
            .then((response) => {
                console.log(response);
                const books = this.state.books;
                books[id - 1] = { id, title, excerpt };
                this.setState(() => ({
                    books,
                    editingBookId: null,
                }));
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div>
                {this.state.books.map((book) => {
                    return <Book book={book} key={book.id} onRemoveBook={this.removeBook} />;
                })}
                <NewBookForm onNewBook={this.addBook} />
            </div>
        );
    }
}