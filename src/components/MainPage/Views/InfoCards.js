import './InfoCards.css';
import { Link } from 'react-router-dom';
function InfoCards({ img, text, toLink }) {
    return (
        <Link to={`/${toLink}`} class="card">
            <img src={img} alt="" class="card-image" />
            <h3 class="card-title">{text}</h3>
        </Link>
    );
}

export default InfoCards;
