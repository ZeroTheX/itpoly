import React from "react";

function CustomerReviews() {
    return (
        <div className="container my-5">
            <div className="row">
                {/* Left Section: Image */}
                <div className="col-md-8">
                    <img
                        src="./img/review-image.png"
                        className="img-fluid rounded"
                        alt="Customer Review"
                    />
                </div>

                {/* Right Section: Reviews */}
                <div className="col-md-4">
                    <h4 className="mb-4">รีวิวจากลูกค้า</h4>
                    <ul className="list-unstyled">
                        {/* Review Item */}
                        <li className="d-flex align-items-start mb-3">
                            <img
                                src="./img/p1.png"
                                className="rounded-circle me-3"
                                alt="Customer"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <div>
                                <p className="mb-1 fw-bold">ลูกค้า A</p>
                                <p className="mb-1">สุดยอดโรงแรม วิวสวยมาก!</p>
                                <div>
                                    <span className="text-warning">★★★★★</span>
                                    <span className="text-muted ms-2">5.0</span>
                                </div>
                            </div>
                        </li>

                        {/* Add More Reviews */}
                        <li className="d-flex align-items-start mb-3">
                            <img
                                src="./img/p1.png"
                                className="rounded-circle me-3"
                                alt="Customer"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <div>
                                <p className="mb-1 fw-bold">ลูกค้า B</p>
                                <p className="mb-1">บริการดีมากค่ะ ห้องพักสะอาด</p>
                                <div>
                                    <span className="text-warning">★★★★☆</span>
                                    <span className="text-muted ms-2">4.5</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CustomerReviews;
