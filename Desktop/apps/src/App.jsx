import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Apropos from './pages/Apropos';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Footer from './components/Footer/Footer';
import Test from './components/Test/Test';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      {/* <Navbar />
      <ScrollToTopButton /> */}
        <Routes>
          {/* <Route path="/*" element={<Home />} />
          <Route path="/A propos" element={<Apropos />} /> */}
          {/* <Route path="/test/:id" element={<Test />} /> */}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
