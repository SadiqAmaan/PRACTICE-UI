import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/services.scss"

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
