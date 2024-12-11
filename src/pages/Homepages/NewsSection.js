import React from "react";

function NewsSection() {
    return (
        <div className="container-fluid py-5 text-light" style={{ backgroundColor: "#406E94" }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4">ข่าวสาร</h2>
                        <p className="mb-4">
                            Planning a getaway? Explore our latest properties
                            around the globe, from sun-warmed escapes to stylish
                            city skyscrapers to intimate boutique retreats.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="col-md-6">
                        <div className="row g-3">
                            <div className="col-6">
                                <img
                                    src="./img/new2.png"
                                    className="img-fluid rounded"
                                    alt="News 1"
                                />
                            </div>
                            <div className="col-6 mt-5">
                                <img
                                    src="./img/new1.png"
                                    className="img-fluid rounded"
                                    alt="News 2"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    src="./img/new3.png"
                                    className="img-fluid rounded"
                                    alt="News 3"
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    src="./img/new4.png"
                                    className="img-fluid rounded"
                                    alt="News 4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsSection;
