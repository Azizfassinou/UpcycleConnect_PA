import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <main style={{ flex: 1, padding: '40px' }}>
                    <Outlet /> {/* Ici s'afficheront tes pages (Dashboard, Users...) */}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
