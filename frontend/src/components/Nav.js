import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Edward's BookStore</a>
                <form className="d-flex flex-row form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Nav