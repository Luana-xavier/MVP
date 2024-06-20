
import { NavLink } from 'react-router-dom';
import './style.css';

function Menu() {
    return (
        <div className='container'>
            <nav>
                <ul> 
                    <li><NavLink to='/inicio'>Página inicial</NavLink></li>
                    <li><NavLink to='/conheca'>Conheça Unifeso</NavLink></li>
                    <li><NavLink to='/login'>Login/Cadastro</NavLink></li>
                    <li><NavLink to='/agendamento'>Agendamento</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
