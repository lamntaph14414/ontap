import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/register">Register</Link>
                            </li>
                        </ul>
                        <SearchBar/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar