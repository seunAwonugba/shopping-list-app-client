import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./App.css";
import CreateAcctPage from './pages/Auth/CreateAcctPage';

function App() {
    return(
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<CreateAcctPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
