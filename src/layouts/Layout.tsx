import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import Footer from '../components/Footer';

const Layout: React.FC = () => {
  return (
    <>
      <div className="bg-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
