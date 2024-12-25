import React from 'react';

function Room() {
    return (
            <div className="room-detail-container">
            <div className="room-images">
                <img src="./img/RT1.png" alt="Main Room" className="main-image" />
                <div className="thumbnail-images">
                    <img src="./img/RT2.png" alt="Room Thumbnail 1" className="thumbnail" />
                    <img src="./img/RT3.png" alt="Room Thumbnail 2" className="thumbnail" />
                    <img src="./img/RT4.png" alt="Room Thumbnail 3" className="thumbnail" />
                    <img src="./img/RT5.png" alt="Room Thumbnail 4" className="thumbnail" />
                </div>
            </div>
            <div className="room-details">
                <div className="booking-form">
                    <h3>เลือกวันเข้าพัก</h3>
                    <form>
                        <div className="form-group">
                            <label>วัน</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>เดือน</label>
                            <select>
                                <option>ม.ค.</option>
                                <option>ก.พ.</option>
                                <option>มี.ค.</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>ปี</label>
                            <select>
                                <option>2567</option>
                                <option>2568</option>
                                <option>2569</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>จำนวนคน</label>
                            <input type="number" min="1" max="10" defaultValue="1" />
                        </div>
                        <button type="submit" className="btn-primary">ดูห้องว่าง</button>
                    </form>
                </div>
                <div className="room-description">
                    <h3>รายละเอียด</h3>
                    <p>
                        ห้องนี้เหมาะสำหรับการพักผ่อน พร้อมวิวเมืองที่สวยงามและสิ่งอำนวยความสะดวกครบครัน
                        เช่น Wi-Fi ฟรี เตียงขนาดใหญ่ และสิ่งอำนวยความสะดวกอื่นๆ ที่ทำให้การพักผ่อนสะดวกสบาย
                    </p>
                </div>
                <div className="room-features">
                    <h3>สิ่งอำนวยความสะดวก</h3>
                    <div className="features">
                        <div>📶 ฟรี Wi-Fi</div>
                        <div>🛏️ เตียงขนาด 7 ฟุต</div>
                        <div>🚪 เข้าออก 24 ชั่วโมง</div>
                        <div>🛁 ฟรี อ่างอาบน้ำและผ้าเช็ดตัว</div>
                    </div>
                </div>
            </div>
            <div className="room-reviews">
                <h3>รีวิวห้องพัก</h3>
                <div className="review">
                    <p>ข้อความ: ดีมาก</p>
                    <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
                </div>
                <div className="review">
                    <p>ข้อความ: สะดวกสบาย</p>
                    <p>⭐ ⭐ ⭐ ⭐</p>
                </div>
                {/* เพิ่มรีวิวเพิ่มเติม */}
            </div>
        </div>
    );
}

export default Room;