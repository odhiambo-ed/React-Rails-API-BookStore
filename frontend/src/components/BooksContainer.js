import React, { Component } from "react";
import axios from "axios";
import Book from "./Book";

export default class BooksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
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

    render() {
        return (
            <div>
                {this.state.books.map((book) => {
                    return <Book book={book} key={book.id} />;
                })}
                <BookForm onNewBook={this.addBook} />
            </div>
        );
    }
}