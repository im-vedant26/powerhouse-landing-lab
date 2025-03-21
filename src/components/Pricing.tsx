
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(false);

  const plans = [
    {
      name: 'Basic',
      description: 'Essential access for casual fitness enthusiasts',
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        { included: true, text: 'Full Gym Access' },
        { included: true, text: 'Locker Room Access' },
        { included: true, text: 'Fitness Assessment' },
        { included: false, text: 'Group Classes' },
        { included: false, text: 'Personal Training Session' },
        { included: false, text: 'Nutrition Consultation' },
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Premium',
      description: 'Full access with added benefits for committed athletes',
      monthlyPrice: 49.99,
      annualPrice: 499.99,
      features: [
        { included: true, text: 'Full Gym Access' },
        { included: true, text: 'Locker Room Access' },
        { included: true, text: 'Fitness Assessment' },
        { included: true, text: 'Unlimited Group Classes' },
        { included: true, text: '1 Free PT Session Monthly' },
        { included: false, text: 'Nutrition Consultation' },
      ],
      buttonText: 'Join Now',
      popular: true,
    },
    {
      name: 'Elite',
      description: 'Complete package for maximum results and experience',
      monthlyPrice: 79.99,
      annualPrice: 799.99,
      features: [
        { included: true, text: 'Full Gym Access' },
        { included: true, text: 'Locker Room Access' },
        { included: true, text: 'Fitness Assessment' },
        { included: true, text: 'Unlimited Group Classes' },
        { included: true, text: '2 Free PT Sessions Monthly' },
        { included: true, text: 'Quarterly Nutrition Consultation' },
      ],
      buttonText: 'Join Now',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gym-darkgray to-gym-darkergray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-gym-red uppercase tracking-wider font-medium">Membership Plans</span>
          <h2 className="heading-lg text-white mt-2 mb-6">Invest in Your Health</h2>
          <p className="text-white/80 leading-relaxed mb-10">
            Choose the membership that fits your lifestyle and fitness goals. All plans include 24/7 access to our state-of-the-art facilities.
          </p>

          <div className="flex items-center justify-center">
            <span className={`mr-3 text-sm ${!annualBilling ? 'text-white' : 'text-white/60'}`}>Monthly</span>
            <div 
              className="relative w-14 h-7 bg-gym-lightgray rounded-full p-1 cursor-pointer"
              onClick={() => setAnnualBilling(!annualBilling)}
            >
              <div 
                className={`absolute w-5 h-5 bg-gym-red rounded-full transition-transform duration-300 ${annualBilling ? 'translate-x-7' : 'translate-x-0'}`}
              />
            </div>
            <span className={`ml-3 text-sm ${annualBilling ? 'text-white' : 'text-white/60'}`}>
              Annual <span className="text-gym-red font-medium ml-1">Save 15%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden animate-fade-in transition-all duration-300 hover:translate-y-[-8px] ${
                plan.popular 
                  ? 'bg-gradient-to-br from-gym-red/20 to-gym-darkergray border border-gym-red' 
                  : 'glass-card'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gym-red text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 h-12">{plan.description}</p>
                <div className="my-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      ${annualBilling ? (plan.annualPrice / 12).toFixed(2) : plan.monthlyPrice}
                    </span>
                    <span className="text-white/70 ml-2">/month</span>
                  </div>
                  {annualBilling && (
                    <div className="text-gym-red text-sm mt-1">
                      Billed as ${plan.annualPrice}/year
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-gym-red mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-white/30 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-white' : 'text-white/50'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#contact" 
                  className={`w-full flex justify-center py-3 px-4 rounded-md transition-all font-medium ${
                    plan.popular 
                      ? 'bg-gym-red text-white hover:bg-opacity-90' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-white/70 mb-6">
            All memberships include a one-time $49 initiation fee. Cancel anytime with 30 days notice.
          </p>
          <a href="#contact" className="text-gym-red hover:text-white transition-colors font-medium">
            Have questions? Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
