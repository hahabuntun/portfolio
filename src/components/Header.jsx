import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { CodeOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntHeader 
      style={{ 
        position: 'fixed', 
        top: 0, 
        zIndex: 1, 
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Space>
          <CodeOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            My resume
          </Title>
        </Space>
      </div>
    </AntHeader>
  );
};

export default Header;