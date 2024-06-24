import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'

function Menu() {
    return (
        <div className='container'>
            <nav>
                <ul> 
                    <AnchorLink href='#inicio' id='bMenu'>Página inicial </AnchorLink>
                    <AnchorLink href='#conheca' id='bMenu'>Conheça Unifeso</AnchorLink>
                    <AnchorLink href='#cadastro' id='bMenu'>Cadastro</AnchorLink>
                    <AnchorLink href='#login' id='bMenu'>Login</AnchorLink>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
