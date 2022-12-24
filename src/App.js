import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import SubscriptionsPage from './components/pages/SubscriptionsPage';
import StatusPlanPage from './components/pages/StatusPlanPage';
import HomePage from './components/pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

 export default function App() {
    const [memberId, setMemberId] = useState();

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/sign-up' element={<RegisterPage />}/>
                <Route path='/subscriptions' element={<SubscriptionsPage />} />
                <Route path='/subscriptions/:idPlan' element={
                <StatusPlanPage 
                    setMemberId={setMemberId}
                    memberId={memberId}
                />} />
                <Route path='/home' element={<HomePage memberId={memberId}/>} />
            </Routes>
        </BrowserRouter>
    );
 };