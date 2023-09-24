import { Route, Routes } from 'react-router-dom';
import "./App.css";
import CreateAcctPage from './Components/pages/CreateAccountPage';
// import { UserContextProvider } from './Components/*SupportUtils/UserContext';
import Layout from "./Components/layout/Layout";
import IndexPage from './Components/pages/IndexPage';
import LoginPage from './Components/pages/LoginPage';
import UserAccountPage from './Components/pages/UserAccountPage';
import UserShoppingListPage from './Components/pages/UserShoppingListPage';


function App() {
    return (
        

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<IndexPage />} />
                    <Route path="/register" element={<CreateAcctPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/account" element={<UserAccountPage />} />
                    <Route path="/account/lists" element={<UserShoppingListPage /> } />    
                </Route>
            </Routes>
       
    )
}

export default App;
