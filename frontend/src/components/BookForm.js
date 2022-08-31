import React from "react";

const BookForm = ({ onNewBook = (f) => f }) => {
    let _title, _author, _genre;
    const submit = (e) => {
        e.preventDefault();
        onNewBook(_title.value, _author.value, _genre.value);
        _title.value = "";
        _author.value = "";
        _genre.value = "";
        _title.focus();
    };

    return (
        <form className="border rounded mt-4 mb-2" onSubmit={submit}>

            <div className="form-row d-flex flex-row">
                <div className="col-3 m-4">
                    <input
                        className="form-control"
                        ref={(input) => (_title = input)}
                        type="text"
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="col-3 m-4">
                    <input
                        className="form-control"
                        ref={(input) => (_author = input)}
                        type="text"
                        placeholder="Author"
                        required
                    />
                </div>
                <div className="col-3 m-4">
                    <input
                        className="form-control"
                        ref={(input) => (_genre = input)}
                        type="text"
                        placeholder="Genre"
                        required
                    />
                </div>
                <div className="col-3 m-4">
                    <button className="btn btn-primary mb-2">Add Book</button>
                </div>
            </div>
        </form>
    );
};

export default BookForm;