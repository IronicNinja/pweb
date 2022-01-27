/* Styles */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Pages */
import Home from './pages/Home.js';
import Coding from './pages/Coding.js';
import Resume from './pages/Resume.js';
import Editor from './components/Editor.js';
import Footer from './components/Footer.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/pweb">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/coding" exact element={<Coding />} />
          <Route path="/editor" exact element={<Editor />} />
          <Route path="/resume" exact element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
