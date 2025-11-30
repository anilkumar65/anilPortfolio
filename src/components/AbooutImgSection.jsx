import { Container, Row, Col, Card } from 'react-bootstrap';



const AboutImgSection = () => {
    return(
 <Container>

    {/* --left: profile --*/}
    <section class = "profile-card" aria-label="Profile summary">
      <div className='aboutImgCont'>
        <div class="avatar" aria-hidden="false">
    
          <img src="/imageA.JPG"
               alt="Profile photo of Anil Kumar Yadav"/>
        </div>

        <div>
          <div class="name">Anil Kumar Yadav</div>
          <div class="role">Frontend Developer • React & UI/UX</div>
        </div>

        <div class="meta" aria-hidden="true">
        
          <div class="pill">Remote-friendly</div>
          <div class="pill">Open to hire</div>
        </div>

      </div>
    </section>
    </Container>

    )
};

export default AboutImgSection;
