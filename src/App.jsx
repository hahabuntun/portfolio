import { Layout, ConfigProvider } from 'antd';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Contact from './components/Contact';
import './App.css';

const { Content, Footer } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <Layout className="layout">
        <Header />
        <Content className="content">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Courses />
          <Contact />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;