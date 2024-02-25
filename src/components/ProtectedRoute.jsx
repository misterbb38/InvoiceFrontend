// // ProtectedRoute.js
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {
//   const userInfo = localStorage.getItem('userInfo');
  
//   return userInfo ? <Outlet /> : <Navigate to="/" />;
// };

// export default ProtectedRoute;

// ProtectedRoute.js


// ProtectedRoute.js
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  // Assurez-vous que userInfo existe
  if (userInfo) {
    const { userType, dateExpiration } = userInfo;

    // Si l'utilisateur est superadmin, accordez l'accès à toutes les pages
    if (userType === 'superadmin') {
      return <Outlet />;
    }

    // Pour les autres types d'utilisateurs, vérifiez la date d'expiration de l'abonnement
    if (dateExpiration) {
      const expirationDate = new Date(dateExpiration);
      const currentDate = new Date();

      // Si l'abonnement est expiré, redirigez vers /key
      if (currentDate > expirationDate) {
        return <Navigate to="/key" />;
      }

      // Si l'abonnement est toujours valide, permettez l'accès
      return <Outlet />;
    }
  }

  // Si les informations de l'utilisateur ne sont pas trouvées ou incomplètes, ou si l'utilisateur n'est pas superadmin sans dateExpiration définie, redirigez vers la page de connexion
  return <Navigate to="/signin" />;
};

export default ProtectedRoute;
