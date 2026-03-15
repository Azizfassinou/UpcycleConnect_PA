import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminDashboard from './pages/AdminDashboard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                { }
                <Route path="/" element={<Layout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="users" element={<div>Gestion Utilisateurs</div>} />
                    <Route path="categories" element={<div>Gestion Catégories</div>} />
                    <Route path="settings" element={<div>Paramètres</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
