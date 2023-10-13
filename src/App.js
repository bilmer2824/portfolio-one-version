import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// logo
import logo_fon from './components/Svg/Group 4.png';
import Logo_fon from './components/Svg/london.png';
import Logo_820 from './components/Svg/Group 7.png';

import logo from './components/Svg/codes.png'
// main
import Header from "./components/Web/header/Header.jsx";
import Footer from "./components/Web/footer/Footer.jsx";

// pages
import Home from "./components/Pages/home/Home.jsx";
import About from "./components/Pages/about/About.jsx";
import Education from "./components/Pages/education/Education.jsx";
import Portfolio from "./components/Pages/portfolio/Portfolio.jsx";
import Contact from "./components/Pages/contact/Contact";

// additional components
import Error from "./components/Pages/error/Error-404";
// import Commentary from "./components/App/commentary/Commentary";
// import Profile from "./components/App/profile/Profile";

// controls
import { ControlNotes } from "./components/App/context/Control";
// import Login from "./components/App/login/Login.jsx";

function App() {
    return (
        <ControlNotes>
            <Router>
                <img src={logo_fon} alt="" className='var_img' />
                <img src={Logo_fon} alt="" className='var_img_2' />
                <img src={Logo_820} alt="" className='var_img_3' />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Error />} />
                    {/* <Route path="/commentary" element={<Commentary />} /> */}
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    {/* <Route path="/login" element={<Login />} /> */}
                </Routes>
                <Footer />
            </Router>
        </ControlNotes>
    );
}

export default App;
