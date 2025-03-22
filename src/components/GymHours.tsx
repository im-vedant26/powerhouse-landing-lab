
import React from 'react';

const GymHours = () => {
  return (
    <div className="glass-card p-8 rounded-xl mt-8">
      <h3 className="text-xl font-bold text-white mb-6">Gym Hours</h3>
      <div className="relative border border-white/20 rounded-lg p-6 bg-white/5">
        <div className="mb-4">
          <h4 className="text-white font-medium mb-1">Monday - Saturday</h4>
          <p className="text-white/70 text-sm">Morning: 5:30am - 10:00am</p>
          <p className="text-white/70 text-sm">Evening: 4:30pm - 10:00pm</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-1">Sunday</h4>
          <p className="text-white/70 text-sm">Closed</p>
        </div>
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40 -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40 translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40 -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40 translate-x-1 translate-y-1"></div>
      </div>
    </div>
  );
};

export default GymHours;
