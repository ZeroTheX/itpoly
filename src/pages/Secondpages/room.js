import React from "react";

function RoomDetails() {
    return (
        <div className="container my-5">
            <div className="row">
                {/* ภาพห้องพัก */}
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-12">
                            <img src="path_to_main_image.jpg" className="img-fluid rounded" alt="Room" />
                        </div>
                        <div className="col-4 mt-2">
                            <img src="path_to_thumbnail1.jpg" className="img-fluid rounded" alt="Thumbnail 1" />
                        </div>
                        <div className="col-4 mt-2">
                            <img src="path_to_thumbnail2.jpg" className="img-fluid rounded" alt="Thumbnail 2" />
                        </div>
                        <div className="col-4 mt-2">
                            <img src="path_to_thumbnail3.jpg" className="img-fluid rounded" alt="Thumbnail 3" />
                        </div>
                    </div>
                </div>

                {/* การจอง */}
                <div className="col-md-4">
                    <div className="card shadow-sm p-3">
                        <h5>จองห้องพัก</h5>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">วันที่เข้าพัก</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">จำนวนคืน</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">จำนวนคน</label>
                                <input type="number" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">จองเลย</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* รายละเอียดห้อง */}
            <div className="mt-5">
                <h3>รายละเอียด</h3>
                <p>
                    ข้อมูลรายละเอียดเกี่ยวกับห้องพัก เช่น สิ่งอำนวยความสะดวกหรือข้อมูลทั่วไปเกี่ยวกับห้อง
                </p>
            </div>

            {/* สิ่งอำนวยความสะดวก */}
            <div className="mt-5">
                <h4>สิ่งอำนวยความสะดวก</h4>
                <div className="row text-center">
                    <div className="col-3">
                        <i className="bi bi-wifi fs-1"></i>
                        <p>Wi-Fi</p>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-tv fs-1"></i>
                        <p>ทีวี</p>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-cup-hot fs-1"></i>
                        <p>กาแฟ</p>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-door-open fs-1"></i>
                        <p>ที่พักกว้าง</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomDetails;
