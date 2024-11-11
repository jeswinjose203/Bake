// src/App.js
import './App.css';
import { Layout } from "antd";
import Top from "./Top.js";
import Side from "./Side.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cake from './components/Cake';
import Pastries from './components/Pastries';
import Contact from './components/Contact';
// import MainContent from './MainContent'; // Import MainContent

const { Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Top />
          <Layout>
            <Side />
            <Layout style={{ padding: '24px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cake" element={<Cake />} />
                <Route path="/pastries" element={<Pastries />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/maincontent" element={<MainContent />} /> */}
              </Routes>
            </Layout>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
