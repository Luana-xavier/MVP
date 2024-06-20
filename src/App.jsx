import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Inicio from './Inicio';
import Conheca from './conheca';
import Login from './login';
import Agendamento from './agendamento';

function App() {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route path='/inicio' component={Inicio} />
                <Route path='/conheca' component={Conheca} />
                <Route path='/login' component={Login} />
                <Route path='/agendamento' component={Agendamento} />
            </Switch>
        </Router>
    );
}

export default App;
