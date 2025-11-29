
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 Yadav Anil. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="social-links">
              <a href="#" className="text-light me-3">LinkedIn</a>
              <a href="#" className="text-light me-3">GitHub</a>
              <a href="#" className="text-light">Twitter</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;