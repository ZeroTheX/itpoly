import React from "react";
import { Link } from "react-router-dom";

function RoomTypes() {
    return (
        <div className="container mt-5">
            <h2 className="type mb-5">ประเภทห้องพัก</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img
                            src="./img/room1.png"
                            className="card-img-top"
                            alt="Room 1"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                ห้องพักที่พร้อมด้วยการออกแบบสไตล์โมเดิร์น...
                            </p>
                            <Link to="/room" className="btn btn-primary">
                                รายละเอียดห้องพัก
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img
                            src="./img/room2.png"
                            className="card-img-top"
                            alt="Room 2"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                ห้องพักพร้อมระเบียงส่วนตัว วิวทะเล 180 องศา ออกแบบด้วยความใส่ใจในทุกรายละเอียด พร้อมสิ่งอำนวยความสะดวกที่ทำให้การพักผ่อนของคุณสมบูรณ์แบบ
                            </p>
                            <a href="#" className="btn btn-primary">
                                รายละเอียดห้องพัก
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img
                            src="./img/room3.png"
                            className="card-img-top"
                            alt="Room 3"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                สัมผัสประสบการณ์การพักผ่อนอันแสนพิเศษในห้องพัก Deluxe Suite ที่มาพร้อมการตกแต่งที่สวยงาม สิ่งอำนวยความสะดวกครบครัน เหมาะสำหรับคู่รักและครอบครัว
                            </p>
                            <a href="#" className="btn btn-primary">
                                รายละเอียดห้องพัก
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomTypes;
