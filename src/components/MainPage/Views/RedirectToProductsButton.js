import './RedirectToProductsButton.css';
import { NavLink } from 'react-router-dom';
import localString from '../../localization';

function RedirectToProductsButton({lang}) {
  return (
      // <a href="/contact" className="redirectButton">bize ulaşın</a>
      <NavLink className="redirectButton" to="/tesseratasarim/contact" exact>{localString.languages(lang).contacUs}</NavLink>
  );
}

export default RedirectToProductsButton;
