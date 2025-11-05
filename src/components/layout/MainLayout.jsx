import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';

function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <main className="content-area">
          <Outlet />
          <ScrollToTop />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
