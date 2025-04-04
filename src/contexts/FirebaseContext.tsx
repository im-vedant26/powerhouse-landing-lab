
import React, { createContext, useContext } from 'react';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

type FirebaseContextType = ReturnType<typeof useFirebaseAuth>;

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useFirebaseAuth();
  
  return (
    <FirebaseContext.Provider value={auth}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = (): FirebaseContextType => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
