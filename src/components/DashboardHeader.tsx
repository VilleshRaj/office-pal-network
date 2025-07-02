
import React from 'react';
import PostItemDialog from './PostItemDialog';
import OfferRideDialog from './OfferRideDialog';

const DashboardHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employee Buddy</h1>
          <p className="text-gray-600 mt-1">Your workplace community hub</p>
        </div>
        <div className="flex space-x-3">
          <PostItemDialog />
          <OfferRideDialog />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
