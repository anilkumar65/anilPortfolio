// Add this to Header.js



import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Header = () => {
  
  
  
  
    const [activeSection, setActiveSection] = useState('home');
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'skills','education','projects','contact' ];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (current) {
          setActiveSection(current);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-primary">
            It's ANIL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeSection === 'home' ? 'active fw-bold' : ''}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#about" 
                className={activeSection === 'about' ? 'active fw-bold' : ''}
              >
                About
              </Nav.Link>
              <Nav.Link 
                href="#education" 
                className={activeSection === 'education' ? 'active fw-bold' : ''}
              >
                Education
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeSection === 'skills' ? 'active fw-bold' : ''}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeSection === 'projects' ? 'active fw-bold' : ''}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                className={activeSection === 'contact' ? 'active fw-bold' : ''}
              >
                Contact
               </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  
};

export default Header;