
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from "./pages/Home";
import {Login} from "./components/Login"

function AppRoutes() {
    return (
       <BrowserRouter>

       {/* <link to="/">Login</Link> */}

        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>}/>
        </Routes>
       </BrowserRouter>

    );
}

export default AppRoutes;