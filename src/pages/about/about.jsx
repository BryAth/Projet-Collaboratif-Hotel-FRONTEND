import NavBar from '../../components/nav-bar/nav-bar';
import SearchBar from '../../components/search-bar/search-bar';
import style from './about.module.css';

const About = () => {
    return (
        <div className={style.aboutDiv}>
            <NavBar />
            <SearchBar />
            <article>
                <h1>À propos</h1>
                <p>Au "Tropical" Hôtel, une belle piscine est un répit de la chaleur, un lieu de rassemblement joyeux, une destination pour le bien-être, une marque de vraies vacances. Faites l'expérience de ce luxe simple, que vous préfériez être entouré par l'eau douce et fraîche ou profiter de son mouvement méditatif à l'ombre d'un cabanon au bord de la piscine.</p> 
                <p>Découvrez l'évasion parfaite en bord de mer au "Tropical" Hôtel, où des expériences de villégiature distinctes reflètent les destinations les plus recherchées du monde. Qu'il s'agisse d'une retraite isolée pour une lune de miel ou d'une destination familiale, il existe de nombreuses façons de trouver votre place au soleil.</p>
            </article>
        </div>
    );
};

export default About;