
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFirebase } from '@/contexts/FirebaseContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useFirebase();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gym-darkgray">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gym-red"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
