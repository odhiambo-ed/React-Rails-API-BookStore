import React from 'react'

const Nav = () => {
    return (
        <div className="nav-color p-2">
            <nav className="navbar navbar-light justify-content-between">
                <a className="navbar-brand">Edward's BookStore></a>
                <form className="d-flex flex-row form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 m-2" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Nav