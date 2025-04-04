
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Home, Mail } from 'lucide-react';
import { useFirebase } from '@/contexts/FirebaseContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, error, isAuthenticated } = useFirebase();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await signIn(email, password);
      
      if (success) {
        toast.success('Login successful');
        navigate('/admin/dashboard');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gym-darkgray px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-white font-display font-bold text-3xl flex items-center justify-center gap-2">
            <span className="text-gym-red">POWER</span>HOUSE
          </h1>
          <p className="text-white/70 mt-2">Admin Dashboard</p>
        </div>
        
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-center text-white">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/70 block">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm text-white/70 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>
              </div>
              
              {error && (
                <div className="text-red-500 text-sm py-2 px-3 bg-red-500/10 rounded-md">
                  {error}
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
              
              <div className="text-center text-white/50 text-sm mt-4">
                <p>
                  Demo credentials: admin@powerhouse.com / powerhouse123
                </p>
                <p className="mt-1 text-xs">
                  (Create a user with these credentials in Firebase to login)
                </p>
              </div>
            </form>
            
            <div className="mt-6 flex justify-center">
              <Link to="/">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  <Home size={16} />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
