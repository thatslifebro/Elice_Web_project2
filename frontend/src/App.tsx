import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './pages/Board';
import BoardCreate from './pages/BoardCreate';
import BoardUpdate from './pages/BoardUpdate';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/board' element={<Board />}/>
                <Route path='/board/create' element={<BoardCreate />}/>
                <Route path='/board/update' element={<BoardUpdate />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
