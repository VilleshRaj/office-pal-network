
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Car, MessageCircle, Plus, MapPin, Users, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for previews
  const latestCarpool = [
    { id: 1, from: 'Downtown', to: 'Suburb East', seats: 2, time: '6:00 PM', driver: 'Sarah M.' },
    { id: 2, from: 'Tech Park', to: 'City Center', seats: 1, time: '5:30 PM', driver: 'Mike R.' },
    { id: 3, from: 'Office', to: 'North Side', seats: 3, time: '6:15 PM', driver: 'Alex K.' }
  ];

  const topMarketplace = [
    { id: 1, title: 'iPhone 13 Pro', price: '$800', category: 'Electronics', seller: 'John D.' },
    { id: 2, title: 'Office Chair - Ergonomic', price: '$150', category: 'Furniture', seller: 'Lisa P.' },
    { id: 3, title: 'Parking Spot - Downtown', price: '$200/month', category: 'Parking', seller: 'Tom W.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Employee Buddy</h1>
              <p className="text-gray-600 mt-1">Your workplace community hub</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Post Item</span>
              </Button>
              <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
                <Car className="w-4 h-4" />
                <span>Offer Ride</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Latest Carpooling */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Latest Carpooling</CardTitle>
                <Car className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-3">
                {latestCarpool.map((ride) => (
                  <div key={ride.id} className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-sm">{ride.from} → {ride.to}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">{ride.seats} seats</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{ride.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{ride.driver}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/carpooling">
                  <Button variant="outline" className="w-full mt-3">
                    View All Rides
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Top Marketplace Items */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Top Marketplace</CardTitle>
                <ShoppingBag className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent className="space-y-3">
                {topMarketplace.map((item) => (
                  <div key={item.id} className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <span className="font-bold text-green-600">{item.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <Badge variant="outline" className="text-xs">{item.category}</Badge>
                      <span>by {item.seller}</span>
                    </div>
                  </div>
                ))}
                <Link to="/marketplace">
                  <Button variant="outline" className="w-full mt-3">
                    Browse Marketplace
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Quick AI Assistant */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">AI Assistant</CardTitle>
                <MessageCircle className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <p className="text-sm text-gray-700 mb-2">
                      "Hi! I'm your workplace assistant. I can help with directions, local news, health tips, and more!"
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Quick Actions:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <Button variant="outline" size="sm" className="justify-start">
                        🚗 Find nearby gas stations
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start">
                        📰 Today's local news
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start">
                        🏥 Find nearby clinics
                      </Button>
                    </div>
                  </div>
                  
                  <Link to="/chat">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Start Chatting
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">Active Listings</p>
                  <p className="text-2xl font-bold text-gray-900">127</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Car className="h-8 w-8 text-green-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">Available Rides</p>
                  <p className="text-2xl font-bold text-gray-900">23</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-purple-600" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">Active Users</p>
                  <p className="text-2xl font-bold text-gray-900">456</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
