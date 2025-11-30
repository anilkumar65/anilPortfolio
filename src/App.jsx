import Header from './components/Header';
import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import { Container, Row, Col, Card,  } from "react-bootstrap";

function App() {
 

  return (
    <Container>
      <Header />
      <Hero></Hero>
      <hr/>
      <About></About>
      <hr/>
      <Education></Education>
      <hr/>
      <WorkExperience></WorkExperience>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      
    </Container>  
  
  )
}

export default App
