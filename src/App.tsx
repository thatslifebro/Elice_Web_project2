import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


import { lazy } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import("./pages/Home"));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const MyPage = lazy(() => import('./pages/MyPage'));
const Board = lazy(() => import('./pages/Board'));
const Msg = lazy(() => import('./pages/Msg'));
const ParkingList = lazy(() => import('./pages/ParkingList'));
const ParkingDetail = lazy(() => import('./pages/ParkingDetail'));
const BoardCreate = lazy(() => import('./pages/BoardCreate'));
const BoardUpdate = lazy(() => import('./pages/BoardUpdate'));

function App() {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/my-page' element={<MyPage />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/board' element={<Board />}/>
                <Route path='/board/create' element={<BoardCreate />}/>
                <Route path='/board/update' element={<BoardUpdate />}/>
                <Route path='/msg' element={<Msg />} />
                <Route path='/parking' element={<ParkingList />} />
                <Route path='/parking/detail' element={<ParkingDetail />} />
            </Routes>
            <Footer />
        </Suspense>
        </>
    );
}

export default App;
