import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./RoomDetail.css";

import Navbar from "./components/Navbar";
import Carousel from "./pages/Homepages/Carousel";
import M from "./pages/Homepages/RoomTypes";
import NewsSection from "./pages/Homepages/NewsSection";
import CustomerReviews from "./pages/Homepages/CustomerReviews";
import Footer from "./components/fter";
import Room from "./pages/Secondpages/Room";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Carousel />
                            <M />
                            <NewsSection />
                            <CustomerReviews />
                        </>
                    } />
                    <Route path="/room" element={<Room />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
