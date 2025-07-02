
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Car, MessageCircle, TrendingUp } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationTabs = ({ activeTab, setActiveTab }: NavigationTabsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      <div className="flex border-b">
        <Link 
          to="/" 
          className={`px-6 py-4 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'overview' 
              ? 'border-blue-600 text-blue-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Overview</span>
          </div>
        </Link>
        <Link 
          to="/marketplace" 
          className="px-6 py-4 font-medium text-sm border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Marketplace</span>
          </div>
        </Link>
        <Link 
          to="/carpooling" 
          className="px-6 py-4 font-medium text-sm border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <Car className="w-4 h-4" />
            <span>Carpooling</span>
          </div>
        </Link>
        <Link 
          to="/chat" 
          className="px-6 py-4 font-medium text-sm border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>AI Assistant</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationTabs;
