import React from 'react';
import { LayoutDashboard, Package, Truck, Users, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
        { name: 'Annonces', icon: <Package size={20} />, path: '/annonces' },
        { name: 'Conteneurs', icon: <Truck size={20} />, path: '/conteneurs' },
        { name: 'Utilisateurs', icon: <Users size={20} />, path: '/users' },
    ];

    return (
        <div style={styles.sidebar}>
            <div style={styles.logoArea}>
                <img src="src/assets/imgs/logo.svg" alt="Logo" style={styles.logo} />
                <span style={styles.brandName}>UpcycleConnect</span>
            </div>

            <nav style={styles.nav}>
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        style={{
                            ...styles.navLink,
                            backgroundColor: location.pathname === item.path ? '#4318FF' : 'transparent',
                            color: location.pathname === item.path ? '#FFF' : '#A3AED0',
                        }}
                    >
                        <span style={styles.icon}>{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div style={styles.footerNav}>
                <Link to="/settings" style={styles.navLink}><Settings size={20} /> <span style={{ marginLeft: '12px' }}>Paramètres</span></Link>
                <button style={styles.logoutBtn}><LogOut size={20} /> <span style={{ marginLeft: '12px' }}>Déconnexion</span></button>
            </div>
        </div>
    );
};

const styles = {
    sidebar: { width: '260px', height: '100vh', backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', padding: '25px', position: 'fixed', left: 0, top: 0, borderRight: '1px solid #F4F7FE' },
    logoArea: { display: 'flex', alignItems: 'center', marginBottom: '40px', gap: '10px' },
    logo: { width: '35px' },
    brandName: { fontSize: '20px', fontWeight: 'bold', color: '#1B254B' },
    nav: { flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' },
    navLink: { display: 'flex', alignItems: 'center', padding: '12px 15px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', transition: '0.3s' },
    icon: { marginRight: '15px' },
    footerNav: { borderTop: '1px solid #F4F7FE', paddingTop: '20px' },
    logoutBtn: { display: 'flex', alignItems: 'center', width: '100%', background: 'none', border: 'none', color: '#EE5D50', fontWeight: '600', cursor: 'pointer', padding: '12px 15px' }
};

export default Sidebar;
