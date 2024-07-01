import AnchorLink from 'react-anchor-link-smooth-scroll'
import './style.css'



function Menu() {
    return (
        <div className='container'>

            <nav>
                <ul> 
                    <a href='/' id='bMenu'>Página inicial </a>



                    <a href='/login' id='bMenu'>Login</a>

                </ul>
            </nav>
        </div>
    );
}

export default Menu;
