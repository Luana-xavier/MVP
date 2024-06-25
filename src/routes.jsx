
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ambiente from './ambiente'
import Inicio from "./Inicio";
import LoginForm from "./login";
import Login from "./cadastro";
import FeedbackForm from "./feedback";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/inicio" element={< Inicio />}></Route>
                <Route path="/ambiente" element={< Ambiente />}></Route>
                <Route path="/login" element={< LoginForm />}></Route>
                <Route path="/cadastro" element={< Login />}></Route>
                <Route path="/ambiente" element={< Ambiente />}></Route>
                <Route path="/feedback" element={< FeedbackForm />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes