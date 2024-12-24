import { Layout } from 'antd';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default Root;
