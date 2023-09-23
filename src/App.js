import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./App.css";
import CreateAcctPage from './pages/Auth/CreateAcctPage';
import LoginPage from './pages/Auth/LoginPage';

function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<CreateAcctPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
