import React from "react";
import img1 from '../img/image1.png';
import img2 from '../img/image1.png';
import img3 from '../img/image1.png';


function Carousel() {
    return (
        <div className="row background-div">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active">
                        <img src={img1} className="small-img" alt="First Slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="small-img" alt="Second Slide" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="small-img" alt="Third Slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h5 className="terminal-text">TERMINAL XD</h5>
        </div>
    );
}

export default Carousel;
