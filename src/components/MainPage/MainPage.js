import React, { useEffect, useState } from "react";
import './MainPage.css';
import bg from '../img/bgImageClipped.svg'
import RedirectToProductsButton from "./Views/RedirectToProductsButton";
import RevealingText from "./Views/RevealingText";
import InfoCards from "./Views/InfoCards";
import contact from '../img/ContactUsNew.jpg'
import products from '../img/handmade.jpg'
import aboutUs from '../img/aboutUsCard.jpg'
import { MainContext, useContext } from '../context';
import localString from "../localization";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}



function MainPage() {

  const { lang } = useContext(MainContext);

  const { height, width } = useWindowDimensions();
  return (
    <div style={{ flexDirection: 'column', display: 'flex', zIndex: 5, justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <img className="backgroundImage" style={{ position: 'absolute', left: '0' }} src={bg} />
        <RevealingText lang={lang} />
        <RedirectToProductsButton lang={lang} />
      </div>
      <div>

      </div>
      <div className="containerMenu" style={{ width: width * 0.9, marginTop: '50%' }}>
        <InfoCards className="itemMenu" img={contact} text={localString.languages(lang).contact} toLink={"contact"} />
        <InfoCards className="itemMenu" img={products} text={localString.languages(lang).ourProducts} toLink={"shop"} />
        <InfoCards className="itemMenu" img={aboutUs} text={localString.languages(lang).aboutUs} toLink={"about"} />

      </div>
      <p style={{marginTop:'5%'}} className='mainPageText'>{localString.languages(lang).aboutUsTextFirst}</p>
      <p className='mainPageText'>{localString.languages(lang).aboutUsTextSecond}</p>
      <p className='mainPageText'>{localString.languages(lang).aboutUsTextThird}</p>
      <p className='mainPageText'>{localString.languages(lang).aboutUsTextFourth}</p>
      <p className='mainPageText'>{localString.languages(lang).aboutUsTextFifth}</p>
    </div>
  );
}

export default MainPage;
