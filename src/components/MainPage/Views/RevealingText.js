import './RevealingText.css';
import localString from '../../localization';

function RevealingText({lang}) {
    return (
        <h1 class="title">
            <span class="title-content">{localString.languages(lang).revealingTextFirst}</span>
            <span class="title-content title-second">{localString.languages(lang).revealingTextSecond}</span>
            {/* <span class="title-content title-third">You will always</span>
            <span class="title-content title-fourth">miss if you don't.</span> */}
        </h1>
    );
}

export default RevealingText;
