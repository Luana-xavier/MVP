import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'
import { Link } from 'react-router-dom';



function Menu() {
    return (
        <div className='container'>

            <nav>
                <ul> 
                    <a href='/inicio' id='bMenu'>Página inicial </a>

                    <AnchorLink href='#conheca' id='bMenu'>Conheça Unifeso</AnchorLink>

                    <a href='/login' id='bMenu'>Login</a>

                </ul>
            </nav>
        </div>
    );
}

export default Menu;
