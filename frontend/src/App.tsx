import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './pages/Board';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/board' element={<Board />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
