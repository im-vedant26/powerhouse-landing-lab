
import { useState, useEffect } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/lib/firebase';

export function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    }, (error) => {
      console.error("Auth state change error:", error);
      setError(error.message);
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to sign in');
      return false;
    }
  };

  // Create a new user with email and password
  const signUp = async (email: string, password: string) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
      return false;
    }
  };

  // Sign out
  const signOut = async () => {
    setError(null);
    try {
      await firebaseSignOut(auth);
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to sign out');
      return false;
    }
  };

  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    isAuthenticated: !!user
  };
}
