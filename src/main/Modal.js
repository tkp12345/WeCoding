import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function Modal(props) {

    return (
        <div className="modal_C">
            <div className="modal_title">
                함께 코딩공부 하는 플랫폼 "위코딩"👨‍💻
            </div>
            <img src="img/modal/wecoding_modal1.png" className="modal_img" />
            <img src="img/modal/wecoding_modal2.png" className="modal_img" />
            <img src="img/modal/wecoding_modal3.png" className="modal_img" />
            <img src="img/modal/wecoding_modal4.png" className="modal_img" />
            <img src="img/modal/wecoding_modal5.png" className="modal_img" />
            <img src="img/modal/wecoding_modal6.png" className="modal_img" />
        </div>
    )
}
export default Modal;