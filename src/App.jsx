import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Partner from './pages/Partner';
import Programs from './pages/Programs';
import News from './pages/News';
import ScrollToTop from './components/ScrollToTop';
import Projects from './pages/Projects';
import BecomePartner from './pages/BecomePartner';
import ProgramDetail from './pages/ProgramDetail';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-white">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/la-fondation" element={<About />} />
                    <Route path="/programmes" element={<Programs />} />
                    <Route path="/partenariat" element={<Partner />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/projets-phares" element={<Projects />} />
                    <Route path="/devenir-partenaire" element={<BecomePartner />} />
                    <Route path="/programmes/:slug" element={<ProgramDetail />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
