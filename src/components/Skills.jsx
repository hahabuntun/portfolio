import React from 'react';
import { Card, Typography, Row, Col, Progress, Tag } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        { name: "Python", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "SQLAlchemy", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST API", level: 85 }
      ]
    },
    {
      category: "Message Brokers & Search",
      skills: [
        { name: "Kafka", level: 70 },
        { name: "Elasticsearch", level: 65 },
        { name: "Redis", level: 60 }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "Ant Design", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 70 },
        { name: "Git", level: 80 },
        { name: "Linux", level: 75 }
      ]
    }
  ];

  return (
    <div className="section" id="skills">
      <Title level={2} className="section-title">
        <ToolOutlined /> Навыки
      </Title>
      
      <Row gutter={[16, 16]}>
        {skillCategories.map((category, categoryIndex) => (
          <Col xs={24} sm={12} key={categoryIndex}>
            <Card title={category.category} size="small">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <Text>{skill.name}</Text>
                    <Text type="secondary">{skill.level}%</Text>
                  </div>
                  <Progress percent={skill.level} size="small" />
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;