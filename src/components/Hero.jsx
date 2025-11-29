import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ 
      background:'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection:'reverse',
      alignItems: 'center',
      color: 'white'
    }}>
      <Container>
        <Row className="flex-lg align-items-center">
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-4">
              Hi, I'm <span style={{ color: '#f39c12' }}>Anil Kumar</span>
            </h1>
            <h2 className="h3 mb-4">Connecting Cultures Through Language & Technology</h2>
            <p className="lead mb-4">
              I create beautiful, responsive web applications using modern technologies. 
              A multilingual creator passionate about communication, problem-solving, and meaningful experiences.
            </p>
            <div className="hero-buttons">
              <Button 
                variant="warning" 
                size="lg" 
                className="me-3 mb-3"
                href="#projects"
              >
                My Projects
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                className="mb-3"
                href="#contact"
              >
                Contact Me
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div 
              className="hero-image"
              // style={{
              //   width: '300px',
              //   height: '300px',
              //   borderRadius: '50%',
              //   background: 'rgba(255,255,255,0.1)',
              //   margin: '0 auto',
              //   display: 'flex',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              //   fontSize: '120px',
              //   overflow:'hidden',
              // }}
            >
              <img className="my-image" src="/anilpro.png"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;