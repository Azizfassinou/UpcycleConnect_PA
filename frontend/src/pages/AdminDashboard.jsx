import React, { useEffect, useState } from 'react';
//import { getUsers } from '../api';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    // Au chargement de la page, on appelle Go
    useEffect(() => {
        const loadData = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        loadData();
    }, []);

    return (
        <div style={{ display: 'flex', background: '#F4F7FE', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '40px', marginLeft: '260px' }}>
                <h2 style={{ color: '#1B254B', fontWeight: '700', marginBottom: '20px' }}>
                    Dashboard Utilisateurs
                </h2>

                {/* Tableau Style Figma */}
                <div style={styles.tableCard}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={styles.headerRow}>
                                <th>NOM</th>
                                <th>EMAIL</th>
                                <th>RÔLE</th>
                                <th>SCORE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? users.map((user) => (
                                <tr key={user.id} style={styles.row}>
                                    <td style={styles.cell}>{user.nom}</td>
                                    <td style={styles.cell}>{user.email}</td>
                                    <td style={styles.cell}>
                                        <span style={roleBadge(user.role)}>{user.role}</span>
                                    </td>
                                    <td style={styles.cellBold}>{user.upcycling_score} pts</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                                        Aucun utilisateur trouvé (Vérifie ta DB !)
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// --- STYLES ---
const styles = {
    tableCard: {
        background: '#FFF',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)'
    },
    headerRow: {
        textAlign: 'left',
        color: '#A3AED0',
        fontSize: '14px',
        borderBottom: '1px solid #E9EDF7'
    },
    row: { borderBottom: '1px solid #F4F7FE' },
    cell: { padding: '15px 10px', color: '#2B3674', fontSize: '15px' },
    cellBold: { padding: '15px 10px', color: '#2B3674', fontWeight: '700' }
};

const roleBadge = (role) => ({
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 'bold',
    backgroundColor: role === 'admin' ? '#E1E7FF' : '#E2F9EF',
    color: role === 'admin' ? '#4318FF' : '#05CD99'
});

export default AdminDashboard;
