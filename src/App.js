/*eslint-disable*/

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
/*css*/
import './css/App.css';
/*main Component */
import Carousel_slider from './main/Carousel.js';
import Modal from './main/Modal.js';
/*menu Component*/
import Master_component from './menu/Master.js';
/*data */
import Master_data from './data/master/master_data.js';
import modal_data from './data/master/modal_data.js';
/**/
import { Link, Route, Switch, useParams } from 'react-router-dom'
/*font awsome*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoad, faServer, faWindowRestore, faBars, faSearch, faShoppingCart, faHome, faThumbsUp, faArrowAltCircleRight, faChalkboardTeacher, faAddressBook, faPlayCircle, faSitemap } from '@fortawesome/free-solid-svg-icons'

function App() {
  let { id } = useParams();
  let [Master, SetMaster] = useState(Master_data);
  let [modal_d, SetModal_d] = useState(modal_data);
  let [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="App">

      {/*header--[s]*/}
      <div className="header">
        <div className="header-nav">
          <FontAwesomeIcon icon={faBars} />
          <div className="header-nav__title">
            Wecoding
          </div>

          <div className="heder-nav__right">
            <div>
              <FontAwesomeIcon icon={faShoppingCart} className="shopping_icon" />
            </div>
            <div>
              로그인
           </div>
          </div>
        </div>
      </div>
      {/*header--[E]*/}

      <Route exact path="/">

        {/*Carousel--[s]*/}
        <div className=" carousel">
          <Carousel_slider />
        </div>
        {/*Carousel--[E]*/}

        {/*tool--[s]*/}
        <div class="inner">
          <div class="tool-container">
            <Link to="/Master/3">
              <div class="tool">
                <FontAwesomeIcon icon={faWindowRestore} className="tool-icon tool-style front-icon" />
                <div class="tool-title">
                  <div class="tool-title__maintitle"> 프론트앤드</div>
                  <div class="tool-title__subtitle">모든회원</div>
                </div>
              </div>
            </Link>
            <Link to="/Master/2">
              <div class="tool">
                <FontAwesomeIcon icon={faServer} className="tool-icon tool-style back-icon" />
                <div class="tool-title">
                  <div class="tool-title__maintitle">백앤드</div>
                  <div class="tool-title__subtitle">모든회원</div>
                </div>
              </div>
            </Link>
            <Link to="/Master/1">
              <div class="tool">
                <FontAwesomeIcon icon={faRoad} className="tool-icon tool-style road-icon" />
                <div class="tool-title">
                  <div class="tool-title__maintitle">로드맵 </div>
                  <div class="tool-title__subtitle">모든회원</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*tool--[E]*/}


        {/*MainCard_Component--[s]*/}
        <div className="introduce_Wecoding">
          <div className="introduce_Master title ">
            오늘의 마스터를 소개합니다 👨‍🏫
          </div>
        </div>

        <div className="content">
          {Master.map((a, i) => {
            return <Link to={"/Master/" + i}><MainCard master_data={Master} i={i} /></Link>
          })
          }
        </div>
        {/*MainCard_Component--[E]*/}

        {/*Modal_Component--[s]*/}
        <div className="introduce_Wecoding">
          <div className="introduce_Master title">
            위코딩에 대해 알아봐요! 👨
          </div>
        </div>
        <div className="content">
          <div className="wecoding-about">
            <div className="wecoding-about__title font-about">
              위코딩이란 무엇인가요?   <FontAwesomeIcon icon={faArrowAltCircleRight} className="methodBtn" onClick={handleModal} />
            </div>
            <div>
              <div className="content">
                {
                  modal === true
                    ? <Modal Modal_data={modal_data} />
                    : null
                }
              </div>
            </div>
          </div>
        </div>
        {/*Modal_Component--[E]*/}
      </Route>


      <Route path="/Master/:id">
        <Master_component master_data={Master} />
      </Route>

      {/*footer--[s]*/}
      <div className="footer">
        <div className="footer-bar">
          <div className="footer-bar__dashbord"></div>
          <Link to="/Master/0"><FontAwesomeIcon icon={faChalkboardTeacher} className="footer_icon" /></Link>
          <div className="footer-bar__lecture"></div>
          <Link to="/Master/1"><FontAwesomeIcon icon={faPlayCircle} className="footer_icon" /></Link>
          <div className="footer-bar__home" ></div>
          <Link to="/"><FontAwesomeIcon icon={faHome} className="footer_icon" /></Link>
          <div className="footer-bar__agora"></div>
          <Link to="/Master/2"><FontAwesomeIcon icon={faSitemap} className="footer_icon" /></Link>
          <div className="footer-bar__more"></div>
          <Link to="/Master/0"><FontAwesomeIcon icon={faAddressBook} className="footer_icon" /></Link>
        </div>
      </div>
      {/*footer--[E]*/}
    </div>
  )
}

/* Component */
function MainCard(props) {
  return (
    <div className="main-card">
      <div className="main-card__img">
        <img src={"img/master_card" + props.i + ".png"} className="card-img" />
      </div>
      <div className="main-card__content">
        <div className="main-card__content__header">
          <div class="card__name">
            {props.master_data[props.i].name} 마스터
          </div>
          <div class="card__class">
            {props.master_data[props.i].class}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
