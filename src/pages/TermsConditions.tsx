
import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

const TermsConditions = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <MainLayout>
      <div className="pt-32 pb-16 px-4">
        <Card className="max-w-3xl mx-auto bg-gym-darkergray border-gym-lightgray p-8 shadow-lg animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Terms & Conditions</h1>
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-gym-red hover:text-white transition-all duration-300">
                <ArrowLeft size={16} />
                Return to Home
              </Button>
            </Link>
          </div>
          
          <p className="text-gray-400 mb-6">Last Updated: {currentDate}</p>
          
          <p className="mb-6 text-gray-300">Welcome to PowerHouse Gym! By accessing our website, you agree to the following terms and conditions.</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-3 text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-300">By using our website, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our services.</p>
            </section>
            
            <Separator className="bg-gym-lightgray/30" />
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-white">2. Use of Website</h2>
              <p className="mb-3 text-gray-300">You must be at least 18 years old or have parental consent to use our site.</p>
              <p className="text-gray-300">You agree not to use our website for illegal or unauthorized purposes.</p>
            </section>
            
            <Separator className="bg-gym-lightgray/30" />
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-white">3. Content Disclaimer</h2>
              <p className="mb-3 text-gray-300">The text on this website is generated using AI and is for informational purposes only. We do not guarantee the accuracy or originality of the content.</p>
              <p className="mb-3 text-gray-300">Some images used on the website may be sourced from the internet. If you own the rights to any image and want it removed, please contact us.</p>
              <p className="text-gray-300">We are not responsible for any copyright claims related to AI-generated text or third-party images.</p>
            </section>
            
            <Separator className="bg-gym-lightgray/30" />
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-white">4. Limitation of Liability</h2>
              <p className="text-gray-300">We strive to provide accurate information, but we are not responsible for any errors, losses, or damages resulting from the use of our website.</p>
            </section>
            
            <Separator className="bg-gym-lightgray/30" />
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-white">5. User Accounts</h2>
              <p className="text-gray-300">If you create an account, you are responsible for keeping your login details confidential.</p>
            </section>
            
            <Separator className="bg-gym-lightgray/30" />
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-white">6. Termination of Use</h2>
              <p className="text-gray-300">We reserve the right to terminate access to users who violate these terms.</p>
            </section>
            
            <Separator className="bg-gym-lightgray/30" />
            
            <section>
              <h2 className="text-xl font-bold mb-3 text-white">7. Changes to Terms</h2>
              <p className="text-gray-300">We may update these Terms & Conditions at any time. Continued use of the site means you accept the changes.</p>
            </section>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gym-lightgray/30">
            <p className="text-gray-400">For any legal inquiries, contact us at <a href="mailto:legal@powerhousegym.com" className="text-gym-red hover:underline">legal@powerhousegym.com</a>.</p>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TermsConditions;
