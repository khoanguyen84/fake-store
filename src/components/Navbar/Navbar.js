import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container">
                <Link className="navbar-brand fw-bolder" to={"/fake-store"}>
                    <i className="fa-solid fa-shirt me-2 text-warning"></i>
                    Fake Store
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;