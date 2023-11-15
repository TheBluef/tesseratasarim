import React, { useEffect } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import logo from '../img/whiteLogo.png'
import { MainContext, useContext } from '../context';
import localString from '../localization';
const Navbar = () => {

  const { lang, setLang } = useContext(MainContext);

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  function changeLanguage() {
    setLang(lang === 'TR' ? 'EN' : 'TR')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">

      <NavLink style={{ marginLeft: '5%' }} className="navbar-brand navbar-logo" to="/" exact>
        <img style={{ height: '33px' }} src={logo} />
      </NavLink>


      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i
                className="fas fa-home">
              </i>
              {localString.languages(lang).home}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i
                className="far fa-address-card">
              </i>
              {localString.languages(lang).aboutUs}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/shop" exact>
              <i
                className="fas fa-tags">
              </i>
              {localString.languages(lang).ourProducts}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="fas fa-paper-plane"></i>
              {localString.languages(lang).contact}
            </NavLink>
          </li>
     
        </ul>
        <button onClick={() => changeLanguage()} className="nav-link" style={{ backgroundColor: 'black', color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', border: '0px',marginLeft:'15px' }}>
          <i className='fas fa-language'></i>
          TR/EN
        </button>
      </div>
    </nav>
  )
}
export default Navbar;