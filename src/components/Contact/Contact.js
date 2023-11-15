import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { NavLink } from 'react-router-dom';
import emailjs from 'emailjs-com';
import GoogleMapReact from 'google-map-react';
import check from '../img/check.png';
import cross from '../img/cross.png';
import { MainContext, useContext } from '../context';
import localString from '../localization';

function Contact() {
    const { lang } = useContext(MainContext);

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [explanation, setExplanation] = useState('');
    const [file, setFile] = useState('');
    const [sendClicked, setSendClicked] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(true);
    const [sentSuccess, setSentSuccess] = useState(0);
    //Map Kodları
    // {
    //     const AnyReactComponent = ({ text }) => <div>{text}</div>;
    //     const defaultProps = {
    //         center: {
    //             lat: 37.085339,
    //             lng: 37.327706
    //         },
    //         zoom: 20
    //     };
    // }

    function sendMessage(e) {
        setSendClicked(true)
        e.preventDefault();
        if (name && email && explanation) {
            setIsButtonActive(false)
            emailjs.sendForm('service_ozy9ksh', 'template_4y1u0op', form.current, 'qeJs2aiL-Wh2D_tNy')
                .then((result) => {
                    setSentSuccess(1)
                    console.log(result.text);
                }, (error) => {
                    setIsButtonActive(true)
                    setSentSuccess(2)
                    console.log(error.text);
                });
        }
    }
    console.log(isButtonActive, "--")
    return (
        <div className='formFrame'>
            {sendClicked === true && sentSuccess == 1 ? <div className='messageBox'>
                <img style={{ width: '15%', marginBottom: '5%' }} src={check} />
                <p>{localString.languages(lang).messageSuccess}</p>
                <p>{localString.languages(lang).thanksForMessage}</p>
                <NavLink className='mainpageButton' to="/" exact>{localString.languages(lang).home}</NavLink>
            </div> : null}

            {sendClicked === true && sentSuccess == 2 ? <div className='messageBox'>
                <img style={{ width: '15%', marginBottom: '5%' }} src={cross} />
                <p>{localString.languages(lang).messageFail}</p>
                <p>{localString.languages(lang).tryAgainLater}</p>
                <NavLink className='mainpageButton' to="/" exact>{localString.languages(lang).home}</NavLink>
            </div> : null}


            <form ref={form} className='form'>

                <label style={{ marginTop: '2%' }} className='formRow'>
                    {localString.languages(lang).nameSurname}:
                    <input onInput={e => setName(e.target.value)} type="text" name="fullName" placeholder={localString.languages(lang).nameSurnamePlaceHolder} />
                    {!name && sendClicked == true ? <p className='warning'>{localString.languages(lang).fillArea}</p> : null}
                </label>

                <label className='formRow'>
                    {localString.languages(lang).emailAddress}:
                    <input onInput={e => setEmail(e.target.value)} type="email" name="email" placeholder={localString.languages(lang).emailAddressPlaceHolder} />
                    {!email && sendClicked ? <p className='warning'>{localString.languages(lang).fillArea}</p> : null}
                </label>
                <label className='formRow'>
                    {localString.languages(lang).address}:
                    <input onInput={e => setName(e.target.value)} type="address" name="address" placeholder={localString.languages(lang).address} />
                </label>
                <label className='formRow'>
                    {localString.languages(lang).message}:
                    <textarea className='explanation' onInput={e => setExplanation(e.target.value)} type="text" name="explanation" placeholder={localString.languages(lang).messagePlaceHolder} />
                    {!explanation && sendClicked ? <p className='warning'>{localString.languages(lang).fillArea}</p> : null}
                </label>
                {isButtonActive ? <input className='sendEmailButton' style={{ marginBottom: '2%' }} type="submit" value={localString.languages(lang).send} onClick={sendMessage} /> : <input className='sendEmailButton' disabled={true} style={{ marginBottom: '2%', backgroundColor: 'gray', cursor: 'default' }} type="submit" value={localString.languages(lang).send} onClick={sendMessage} />}

            </form>
            {/* <div style={{ width: '30%', height: '700px', backgroundColor: 'grey' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAT83NX4WHQFacEFTcYj1ShsyikUs9gbbc" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                >
                    <AnyReactComponent
                        lat={37.085339}
                        lng={37.327706}
                        text="Tessera Tasarım"
                    />
                </GoogleMapReact>
            </div> */}
        </div>
    );
}

export default Contact;
