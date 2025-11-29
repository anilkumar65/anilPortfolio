import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const WorkExperience = () => {
  const workHistory = [
    {
      id: 1,
      companyName: 'HOTEL SHIGAKEN ',
      roleWork: 'Front-desk,Interpreture',
      period: '2020年11月 - 2021年4月',
      description: 'At the hotel, I handled a wide range of front-desk and administrative duties, including check-in and check-out operations, reservation management, and responding to phone inquiries. I provided support and guidance to international guests and was responsible for in-house announcement tasks. Through these responsibilities, I strengthened my communication abilities and enhanced my English language proficiency.',
      Tools: 'Microftsoft 365',
      courses: ['機械学習', '深層学習', '自然言語処理', 'コンピュータビジョン'],
      award: true
    },
    {
    id: 2,
      companyName: 'CAREER NEXT',
      roleWork: 'Office-work,Interpreture',
      period: '2021年05月 - 2022年09月',
      description: 'At the hotel, I handled a wide range of front-desk and administrative duties, including check-in and check-out operations, reservation management, and responding to phone inquiries. I provided support and guidance to international guests and was responsible for in-house announcement tasks. Through these responsibilities, I strengthened my communication abilities and enhanced my English language proficiency.',
      Tools: 'Microsoft excel/word/powerpoint',
      courses: ['機械学習', '深層学習', '自然言語処理', 'コンピュータビジョン'],
      award: true
    },
    {
      id: 3,
      companyName: 'NAA-retailing',
      roleWork: 'Office-work,salesman,Interpreture',
      period: '2022年11月 - 2025年4月',
      description: 'At the hotel, I handled a wide range of front-desk and administrative duties, including check-in and check-out operations, reservation management, and responding to phone inquiries. I provided support and guidance to international guests and was responsible for in-house announcement tasks. Through these responsibilities, I strengthened my communication abilities and enhanced my English language proficiency.',
      Tools: 'Excel/word/powerpoint/Outlook',
      courses: ['機械学習', '深層学習', '自然言語処理', 'コンピュータビジョン'],
      award: true
    },    
    {
      id: 4,
      companyName: 'STAFF SERVICE ENGINEERING',
      roleWork: 'Office-work,IT-work,Interpreture',
      period: '2025年05月 - Now',
      description: 'At the hotel, I handled a wide range of front-desk and administrative duties, including check-in and check-out operations, reservation management, and responding to phone inquiries. I provided support and guidance to international guests and was responsible for in-house announcement tasks. Through these responsibilities, I strengthened my communication abilities and enhanced my English language proficiency.',
      Tools: 'Excel/CMS/word/powerpoint/HTML/CSS/Outlook',
      courses: ['機械学習', '深層学習', '自然言語処理', 'コンピュータビジョン'],
      award: true
    },    
  ];

  

  return (
    <section id="education" className="section-padding ">
      <Container>
        <h2 className="section-title">Work Experience</h2>
        
        {/* 学歴セクション */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <h3 className="h4 mb-4 text-color">Work History</h3>
            <div className="timeline">
              {workHistory.map((work, index) => (
                <Card key={work.id} className="mb-4 border-0 shadow-sm"style={{background:"linear-gradient(180deg, rgba(255,255,255,0.02), transparent)"}}>
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h4 className="text-color h5 mb-1">{work.companyName}</h4>
                        <h5 className=" h6 mb-2 text-color">{work.roleWork}</h5>
                      </div>
                      <div className="text-end text-color">
                        <Badge bg="light" text="dark" className="mb-2">
                          {work.period}
                        </Badge>
                        
                      </div>
                    </div>
                    <p className="mb-3 text-color">{work.description}</p>
                    {work.Tools && (
                      <p className="fw-bold text-primary mb-2">{work.Tools}</p>
                    )}
                    
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default WorkExperience;