import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce website',
      description: 'A full-stack e-commerce solution with wordpress',
      image: '🛒',
      technologies: ['wordpress','css','canvas'],
      liveLink: 'https://rajdhanidairy.com/',
      githubLink: ''
    },
    {
      id: 2,
      title: 'Company website',
      description: 'A website for a company using HTML,CSS and javascript',
      image: '<->',
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: '#',
      githubLink: 'https://anilkumar65.github.io/anurajco/'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with forecast and location services',
      image: '🌤️',
      technologies: ['React', 'API', 'Chart.js'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding ">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row>
          {projects.map(project => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <Card className="h-100 shadow border-0 project-card">
                <Card.Body className="d-flex flex-column">
                  <div 
                    className="project-image mb-3 text-center"
                    style={{ fontSize: '60px' }}
                  >
                    {project.image}
                  </div>
                  <Card.Title className="text-primary">
                    {project.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        bg="secondary" 
                        className="me-1 mb-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="me-2"
                      href={project.liveLink}
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      href={project.githubLink}
                    >
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;