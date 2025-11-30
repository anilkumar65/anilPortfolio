import React from "react";
import { Container, Row, Col, Card,  } from "react-bootstrap";

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: "High School",
      schoolName: "ORCHID SCIENCE COLLEGE",
      period: "2011年7月 - 2013年6月",
      description:
        "I graduate my high school in Nepal with science stream and mathematics.I had also studied english,computer and social morality.",
      gpa: "GPA: 3.8/4.0",
      courses: ["機械学習", "深層学習", "自然言語処理", "コンピュータビジョン"],
      award: true,
    },
    {
      id: 2,
       school: "Japanese language school",
      schoolName: "KYUSHU INTERNATIONAL EDUCATION INSTITUTE",
      period: "2014年8月 - 2016年3月",
      description:
        "I studied Japanese language in kyushu international education institute which is located in Hakata city of Fukuoka prefecture.",
      gpa: "GPA: 3.8/4.0",
      courses: ["機械学習", "深層学習", "自然言語処理", "コンピュータビジョン"],
      award: true,
    },
    {
      id: 3,
       school: "University",
      schoolName: "SHUMEI UNIVERSITY",
      period: "2016年4月 - 2020年3月",
      description:
        "After graduate from japanese language school, I got admission in shumei university of chiba prefecture. In university i join faculty of English and Information Management with IT career where i studied Programming languages,graphics and design,database,etc",
      gpa: "GPA: 3.8/4.0",
      courses: ["機械学習", "深層学習", "自然言語処理", "コンピュータビジョン"],
      award: true,
    },
    {
      id: 4,
       school: "IT institute",
      schoolName: "DESIGN SCHOOL",
      period: "2021年5月 - 2021年7月",
      description:
        "I learnt and trained HTML,CSS and JAVASCRIPT in design school located in shibuya city with japanese teacher for 3 months (3hours per weeks)",
      gpa: "GPA: 3.8/4.0",
      courses: ["機械学習", "深層学習", "自然言語処理", "コンピュータビジョン"],
      award: true,
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "JLPT-N2",
      issuer: "",
      date: "2023年3月",
      credentialId: "AWS-ASA-12345",
    },
    {
      id: 2,
      name: "TOIEC",
      
      date: "2022年5月",
      credentialId: "755",
    },
    
  ];

  return (
    <Container>
    <section id="education" className="section-padding ">
     
        <h2 className="section-title">Education</h2>
        {/* -- EDUCATION -- */}
        {educationData.map((edu) => (
     <Col lg={8} className="mx-auto">
        <div class="timeline-2 show-card">
          <div class="entry">
            <h3>{edu.schoolName}</h3>
            <h5>{edu.school}</h5>
            <small>{edu.period}</small>
            <p>
              {edu.description}
            </p>
            {/* <div className="mb-3 text-color">
                      <strong>関連科目:</strong>
                      <div className="mt-1 text-color">
                        {edu.courses.map((course, idx) => (
                          <Badge 
                            key={idx} 
                            bg="outline-primary" 
                            className="me-1 mb-1"
                            style={{ 
                              border: '1px solid #3a608fff',
                              background: 'transparent'
                            }}
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div> */}
          </div>

        
        </div>
       </Col>
       ))}
        {/* 資格・認定セクション */}
      <Row>
          <Col lg={8} className="mx-auto show-card">
            <h3 className="h4 mb-4 text-color">Certification</h3>
            <Row>
              {certifications.map((cert) => (
                <Col md={6} key={cert.id} className="mb-3">
                  <Card className="h-100 border-0 shadow-sm"style={{background:"linear-gradient(180deg, rgba(255,255,255,0.02), transparent)"}}>
                    <Card.Body>
                      <h5 className="text-color h6 mb-2">{cert.name}</h5>
                      <p className="text-color small mb-1">{cert.date}</p>
                      <p className="text-color small mb-0">
                        SCORE: {cert.credentialId}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      
    </section>
   </Container>
  );
};

export default Education;
