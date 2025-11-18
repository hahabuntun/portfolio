import React from 'react';
import { Card, Typography, Tag, List, Space } from 'antd';
import { ProjectOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Projects = () => {
  const projects = [
    {
      title: "Корпоративный веб-сайт с REST API",
      description: "Разработал корпоративный веб-сайт с REST API на FastAPI",
      achievements: [
        "Использовал асинхронные endpoints и Pydantic для валидации данных",
        "Реализовал механизм расчета стоимости услуг с учетом различных параметров",
        "Интегрировал аутентификацию через Keycloak с OAuth2"
      ],
      technologies: ["FastAPI", "Pydantic", "Keycloak", "OAuth2"]
    },
    {
      title: "Система инвентаризации для мебельной компании",
      description: "Переписал серверную часть с PHP на Python с луковой архитектурой",
      achievements: [
        "Настроил Elasticsearch для полнотекстового поиска с учетом синонимов и ошибок",
        "Реализовал четкое разделение на слои архитектуры"
      ],
      technologies: ["Python", "Elasticsearch", "PostgreSQL", "Onion Architecture"]
    },
    {
      title: "Асинхронная коммуникация между сервисами",
      description: "Организовал асинхронную коммуникацию через Kafka",
      achievements: [
        "Реализовал паттерн Transactional Outbox для гарантированной доставки событий",
        "Настроил автоматическую отправку email-уведомлений",
        "Обеспечил обновление отчетов в реальном времени"
      ],
      technologies: ["Kafka", "PostgreSQL", "Transactional Outbox"]
    },
    {
      title: "Бот для парсинга цен на продукты",
      description: "Разработал бота на aiogram для мониторинга цен",
      technologies: ["Python", "aiogram", "Web Scraping"]
    },
    {
      title: "Приложение для управления проектами",
      description: "Full-stack приложение в составе команды из 3 человек",
      achievements: [
        "Разработал клиентскую часть на React с TypeScript",
        "Реализовал state management с Zustand",
        "Использовал TanStack Query для работы с API"
      ],
      technologies: ["React", "TypeScript", "Antd", "Zustand", "TanStack Query"]
    }
  ];

  return (
    <div className="section" id="projects">
      <Title level={2} className="section-title">
        <ProjectOutlined /> Проекты
      </Title>
      
      <List
        itemLayout="vertical"
        dataSource={projects}
        renderItem={(project) => (
          <List.Item>
            <Card className="project-card">
              <Title level={4}>{project.title}</Title>
              <Text>{project.description}</Text>
              
              {project.achievements && (
                <div style={{ marginTop: 12 }}>
                  <Text strong>Достижения:</Text>
                  <ul style={{ marginTop: 8 }}>
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>
                        <CheckCircleOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div style={{ marginTop: 12 }}>
                <Space wrap size={[8, 16]}>
                  {project.technologies.map((tech, index) => (
                    <Tag key={index} className="skill-tag" color="blue">
                      {tech}
                    </Tag>
                  ))}
                </Space>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Projects;