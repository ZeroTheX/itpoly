import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../img/background.png';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#406E94" }}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-5 text-white" href="#"><img src={logo} className="logo-img" alt="First Slide" /></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">
                                    <i className="bi bi-house-door-fill"></i> {/* ไอคอน */}
                                    หน้าแรก
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
