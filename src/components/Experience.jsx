import React from 'react';
import { Timeline, Card, Typography, Tag } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Experience = () => {
  return (
    <div className="section" id="experience">
      <Title level={2} className="section-title">
        <CalendarOutlined /> Опыт работы
      </Title>
      
      <Card>
        <Timeline
          items={[
            {
              children: (
                <div>
                  <Title level={4}>Программист</Title>
                  <Text type="secondary">Июнь 2023 — Ноябрь 2024 (1 год и 6 месяцев)</Text>
                  <div style={{ marginTop: 12 }}>
                    <Text>
                      Разрабатывал и поддерживал бэкенд-часть веб-сервисов для компании и партнеров.
                    </Text>
                    <div style={{ marginTop: 8 }}>
                      <Tag color="blue">Python</Tag>
                      <Tag color="green">FastAPI</Tag>
                      <Tag color="orange">SQLAlchemy</Tag>
                      <Tag color="purple">Kafka</Tag>
                      <Tag color="red">Elasticsearch</Tag>
                      <Tag color="cyan">Keycloak</Tag>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Experience;