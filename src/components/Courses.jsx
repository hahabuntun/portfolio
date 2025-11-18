import React from 'react';
import { Timeline, Card, Typography, Tag } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Courses = () => {
  const courses = [
    {
      title: "Компьютерное моделирование процессов и систем",
      year: "2024",
      color: "blue"
    },
    {
      title: "Специалист по управлению проектами (повышение квалификации)",
      year: "2024",
      color: "green"
    },
    {
      title: "Курс 'Системный аналитик' Ступень 1",
      company: "компания АСТОН",
      year: "2025",
      color: "orange"
    },
    {
      title: "Обучение 'Автоматизация тестирования'",
      company: "компания 'Точка качества'",
      year: "2025",
      color: "purple"
    }
  ];

  return (
    <div className="section" id="courses">
      <Title level={2} className="section-title">
        <BookOutlined /> Курсы и обучение
      </Title>
      
      <Card>
        <Timeline
          items={courses.map((course, index) => ({
            color: course.color,
            children: (
              <div>
                <Title level={5} style={{ margin: 0 }}>{course.title}</Title>
                {course.company && <Text type="secondary">{course.company}</Text>}
                <div style={{ marginTop: 4 }}>
                  <Tag color={course.color}>{course.year}</Tag>
                </div>
              </div>
            ),
          }))}
        />
      </Card>
    </div>
  );
};

export default Courses;