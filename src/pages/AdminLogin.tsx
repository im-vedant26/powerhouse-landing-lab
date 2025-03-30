import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      const success = login(password);
      
      if (success) {
        toast.success('Login successful');
        navigate('/admin/dashboard');
      } else {
        toast.error('Invalid password');
      }
      
      setIsLoading(false);
    }, 800); // Simulate API call
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
                <label htmlFor="password" className="text-sm text-white/70 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white"
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
              
              <div className="text-center text-white/50 text-sm mt-4">
                <p>
                  Password: powerhouse123
                </p>
                <p className="mt-1 text-xs">
                  (This is a demo. In production, you'd use a secure auth system)
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
