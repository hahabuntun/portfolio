import { Card, Typography, Space, Tag } from 'antd';
import { UserOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="section" id="about">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2} className="section-title">
          <UserOutlined /> Обо мне
        </Title>
        
        <Card>
          <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Python Backend разработчик с 1.5 годами опыта в создании и поддержке 
            веб-сервисов. Специализируюсь на разработке высоконагруженных приложений 
            с использованием FastAPI, PostgreSQL, Kafka и Elasticsearch.
          </Paragraph>
          
          <Space wrap size={[8, 16]} style={{ marginTop: 16 }}>
            <Tag icon={<RocketOutlined />} color="blue">Backend Development</Tag>
            <Tag icon={<RocketOutlined />} color="green">FastAPI</Tag>
            <Tag icon={<RocketOutlined />} color="orange">PostgreSQL</Tag>
            <Tag icon={<RocketOutlined />} color="purple">Microservices</Tag>
          </Space>
        </Card>
      </Space>
    </div>
  );
};

export default About;