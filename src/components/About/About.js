import { useEffect, useState } from 'react';
import db from '../../firebase';
import './About.css';
import { MainContext, useContext } from '../context';
import localString from '../localization';

function About() {
  const { lang } = useContext(MainContext);

  return (
    <div style={{ marginTop: '2%', width: '30%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

      <h1 style={{ textAlign: 'center', marginBottom: '5%' }}>{localString.languages(lang).aboutUs}</h1>
      <p className='aboutUsText'>{localString.languages(lang).aboutUsTextFirst}</p>
      <p className='aboutUsText'>{localString.languages(lang).aboutUsTextSecond}</p>
      <p className='aboutUsText'>{localString.languages(lang).aboutUsTextThird}</p>
      <p className='aboutUsText'>{localString.languages(lang).aboutUsTextFourth}</p>
      <p className='aboutUsText'>{localString.languages(lang).aboutUsTextFifth}</p>

    </div>
  );
}

export default About;
