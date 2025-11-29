
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'MongoDB', level: 70 }
  ];

  return (
    <section id="skills" className="section-padding">
      <Container>
        <h2 className="section-title">My Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col lg={6} key={index} className="mb-4">
              <div className="skill-item">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar 
                  now={skill.level} 
                  variant="primary"
                  style={{ height: '8px' }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;