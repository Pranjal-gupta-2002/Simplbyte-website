
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Verification from './components/Verification'
import Internship from './components/Internship'


function App1() {
  return (
    
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<CourseHome/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/verification" element={<Verification/>}/>
        <Route path="/internship" element={<Internship/>}/>
      </Routes>
      <Footer style={{display:"none"}}/>
    </Router>
    </>
  );
}

export default App1;
