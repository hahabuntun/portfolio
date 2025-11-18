import { Card, Typography, Space, Button } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Contact = () => {
  return (
    <div className="section" id="contact">
      <Title level={2} className="section-title">
        <MailOutlined /> Контакты
      </Title>
      
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
          <Text style={{ fontSize: '16px' }}>
            Готов к новым вызовам и интересным проектам!
          </Text>
          
          <Space size="large">
            <Button 
              type="primary" 
              icon={<MailOutlined />} 
              size="large"
              href="mailto:your.email@example.com"
            >
              Написать мне
            </Button>
            
            <Button 
              icon={<GithubOutlined />} 
              size="large"
              href="https://github.com/yourusername"
              target="_blank"
            >
              GitHub
            </Button>
            
            <Button 
              icon={<LinkedinOutlined />} 
              size="large"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
            >
              LinkedIn
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default Contact;