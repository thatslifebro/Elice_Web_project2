import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import Board from './pages/Board';
import BoardCreate from './pages/BoardCreate';
import BoardUpdate from './pages/BoardUpdate';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/my-page' element={<MyPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/board' element={<Board />}/>
                <Route path='/board/create' element={<BoardCreate />}/>
                <Route path='/board/update' element={<BoardUpdate />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
