import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AboutImgSection from './AbooutImgSection';
import AboutIntro from './AboutIntro';

const About = () => {
  return (
    <>
   <center> <h2 >About</h2>
    <section id="about" className="section-padding about-wrap" >
     <AboutImgSection></AboutImgSection>
      <AboutIntro></AboutIntro>
      
    </section>
    </center>
    </>
  );
};

export default About;