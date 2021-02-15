import React from 'react';
/*css*/
import '../css/Master.css';
/* */
import { useParams } from 'react-router-dom';
/*font awsome*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faShoppingCart, faHome, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


function Master(props) {

    let { id } = useParams();
    let slect_data = props.master_data.find

    return (
        <div className="Master">
            <div className="Master-header">
                <div className="Master-header-container">
                    <div className="Master-container__main">
                        <div className="Master-main__title">
                            <div className="main__title__coment">
                                {props.master_data[id].coment}
                            </div>
                            <div className="main__title__like">
                                <FontAwesomeIcon icon={faThumbsUp} /> <span>좋아요(23)</span>
                            </div>
                            <div className="main__title__class">
                                <a href="#" class="sub-row__icon">{props.master_data[id].class}</a>
                            </div>
                        </div>
                        <img src={"/img/master/master" + id + ".png"} className="img"></img>
                    </div>
                </div>
            </div>

            <div className="Master-info">
                <div className="Master-info__title">
                    <div className="Master-info__title-main">{props.master_data[id].title}</div>
                </div>
                <div className="Master-info__detail">
                    <div className="Master-info__title-detail">{props.master_data[id].content}</div>
                </div>
            </div>
            <div className="Master-menu">
                <div className="Master-menu__container">
                    <span class="Master-menu__el is_active"><a>프로젝트</a></span>
                    <span class="Master-menu__el"><a>멘티평</a></span>
                    <span class="Master-menu__el"><a>새소식</a></span>
                </div>
            </div>
            <div className="Master-content">
                <div className="Master-content-container">
                    <div className="Master-content-container__body">
                        <div className="Master-content-container__body__title">
                            ✍️<br></br>이런 걸 <br></br>배워요
                        </div>
                        <div className="Master-content-container__body__list">
                            {props.master_data[id].projecting}
                        </div>
                    </div>
                </div>
            </div>
            <div className="Master-float">
                <button class="Master-float_like is_btn"><span class="like-icon">👍</span></button>

                <button class="float-register is_btn">마스터 신청</button>
            </div>
        </div>

    )
}
export default Master;