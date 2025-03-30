import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gym-darkgray">
      <header className="border-b border-white/10 bg-gym-darkergray shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-white font-display font-bold text-xl flex items-center">
              <span className="text-gym-red">POWER</span>HOUSE ADMIN
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center text-white/70 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5 mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className={cn(
          "heading-lg mb-8 text-white",
          "after:content-[''] after:block after:w-16 after:h-1 after:bg-gym-red after:mt-2"
        )}>
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
