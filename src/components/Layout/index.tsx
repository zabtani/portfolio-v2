import { Outlet } from 'react-router-dom';
import WhatsAppButton from '../WhatsAppButton';
import AppBg from './AppBg';
import NavigationBar from './Header/NavigationBar';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <WhatsAppButton />
      <Outlet />
      <AppBg />
    </>
  );
};

export default Layout;
