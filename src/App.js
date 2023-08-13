import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Link 컴포넌트 추가
import axios from 'axios';
import './App.css';
import { SushiListPage, Detail } from './pages/sushi-list';
import MapPage from './pages/map';
import MainPage from './pages/main';
import EnrollRestaurantPage from './pages/enroll-restaurant/enroll-restaurant';
import SearchRestaurantPage from './pages/search-restaurant/search-restaurant';
export default function App() {
  return (
    <div className='App'>
      <nav>
        {/* 링크 버튼들 */}
        <Link to="/map" className='linkButton'>Map</Link>
        <Link to="/sushi-list" className='linkButton'>Sushi List</Link>
        <Link to="/enroll-restaurant" className='linkButton'>Enroll restaurant</Link>
        <Link to="/search-restaurant" className='linkButton'>Search restaurant</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/map" element={<MapPage />}></Route>
        <Route path="/sushi-list" element={<SushiListPage />}></Route>
        <Route path="/sushi-list/:id" element={<Detail />}></Route>
        <Route path="/enroll-restaurant" element={<EnrollRestaurantPage />}></Route>
        <Route path="/search-restaurant" element={<SearchRestaurantPage />}></Route>
      </Routes>
    </div>
  );
}