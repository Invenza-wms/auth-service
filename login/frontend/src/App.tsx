import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardComponent from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import UserDashboard from './pages/UserDashboard';
import UserSettings from './pages/UserSettings';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
