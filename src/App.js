import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/sign-up' element={<RegisterPage />}/>
            </Routes>
        </BrowserRouter>
    );
 };