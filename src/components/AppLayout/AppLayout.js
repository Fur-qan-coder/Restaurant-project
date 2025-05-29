import React from 'react';
import Header from '../common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer/Footer';

const AppLayout = () => {
  return (
    <>
    <Header />
    <div className="content">
        <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default AppLayout;