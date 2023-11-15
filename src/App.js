import Navbar from './components/NavbarAnimated/Navbar';
import About from './components/About/About';
import MainPage from './components/MainPage/MainPage';
import Shop from './components/Shop/Shop';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from "react";
import logoT from './components/img/logoT.png'
import './App.css';
import { MainContext } from './components/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import WPLogo from './components/img/WhatsappIcon.png'

function App() {

  const [lang, setLang] = useState('TR');

  const data = {
    lang,
    setLang
  }
  return (
    <Router>
      <MainContext.Provider value={data}>
        <Navbar />
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/mainpage' component={MainPage} />
            <Route path='/about' component={About} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/shop/:id' component={ItemDetail} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <div style={{ height: '35px', backgroundColor: 'white' }} />
        </div>
        <div className='footerSpacer' />
        <a
          href="https://wa.me/+905065354745"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#FFF' }}
        >
          <img style={{ height: '57%' }} src={WPLogo} />
        </a>
        <div className='footer'>
          <img style={{ height: '70%' }} src={logoT} />
          {/* <div className='addressFrame'>
          <p className='addressText'>Atatürk Mahallesi Nalbant Hasan Çavuş Caddesi Burak Kasar Apt. No:26/A Şehitkamil/Gaziantep</p>
        </div> */}
        </div>
      </MainContext.Provider>
    </Router>
  );
}

const Home = () => (
  <div>
    <MainPage />
  </div>
);

export default App;
