import React from 'react';
import LoginPage from './page/logInPage.js'; // Corrected import statement
import ViewSeatPage from './page/viewSeatPage.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/viewSeatPage" element={<ViewSeatPage />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">All Rights Reserved 2023</footer>
    </div>
  );
}

export default App;
