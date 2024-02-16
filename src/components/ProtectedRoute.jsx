// ProtectedRoute.js
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const userInfo = localStorage.getItem('userInfo');
  
  return userInfo ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
