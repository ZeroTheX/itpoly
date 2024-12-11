import React from "react";

function Footer() {
    return (
        <footer className="text-white py-4" style={{ backgroundColor: "#406E94" }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Logo and Name */}
                    <div className="col-md-6 d-flex align-items-center">
                        <img
                            src="./img/logo.png"
                            alt="Company Logo"
                            className="me-3"
                            style={{ width: "80px", height: "80px" }}
                        />
                        <div>
                            <h4 className="mb-0">TERMINAL XD</h4>
                            <p className="mb-0">TERMINAL XD</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-6">
                        <h5>ติดต่อเรา</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-telephone me-2"></i> 097-123-4567
                            </li>
                            <li>
                                <i className="bi bi-facebook me-2"></i> TERMINAL_XD
                            </li>
                            <li>
                                <i className="bi bi-instagram me-2"></i> TERMINAL_XD
                            </li>
                            <li>
                                <i className="bi bi-envelope me-2"></i> TERMINALXD@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
