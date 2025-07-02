
import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import NavigationTabs from './NavigationTabs';
import CarpoolCard from './CarpoolCard';
import MarketplaceCard from './MarketplaceCard';
import AIAssistantCard from './AIAssistantCard';
import StatsRow from './StatsRow';

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <CarpoolCard />
          </div>

          <div className="lg:col-span-1">
            <MarketplaceCard />
          </div>

          <div className="lg:col-span-1">
            <AIAssistantCard />
          </div>
        </div>

        <StatsRow />
      </div>
    </div>
  );
};

export default MainDashboard;
