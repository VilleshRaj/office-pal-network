
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Search, MapPin, Clock, Users, Star, Car, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CarpoolingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTime, setSelectedTime] = useState('all');

  const carpoolRides = [
    {
      id: 1,
      driver: 'Sarah Miller',
      rating: 4.8,
      from: 'Downtown Office',
      to: 'Suburb East',
      departureTime: '6:00 PM',
      availableSeats: 2,
      totalSeats: 4,
      estimatedDuration: '25 mins',
      route: 'Via Highway 101',
      pricePerSeat: '$5',
      carModel: 'Toyota Camry',
      preferences: ['No Smoking', 'Music OK'],
      postedTime: '1 hour ago'
    },
    {
      id: 2,
      driver: 'Mike Rodriguez',
      rating: 4.9,
      from: 'Tech Park Campus',
      to: 'City Center',
      departureTime: '5:30 PM',
      availableSeats: 1,
      totalSeats: 4,
      estimatedDuration: '20 mins',
      route: 'Via Main Street',
      pricePerSeat: '$4',
      carModel: 'Honda Civic',
      preferences: ['No Smoking', 'Quiet Ride'],
      postedTime: '30 mins ago'
    },
    {
      id: 3,
      driver: 'Alex Kim',
      rating: 4.7,
      from: 'Main Office Building',
      to: 'North Side Mall',
      departureTime: '6:15 PM',
      availableSeats: 3,
      totalSeats: 5,
      pricePerSeat: '$6',
      estimatedDuration: '30 mins',
      route: 'Via North Bridge',
      carModel: 'Subaru Outback',
      preferences: ['Pet Friendly', 'Music OK'],
      postedTime: '2 hours ago'
    },
    {
      id: 4,
      driver: 'Lisa Park',
      rating: 5.0,
      from: 'Office Complex',
      to: 'West End District',
      departureTime: '5:45 PM',
      availableSeats: 2,
      totalSeats: 4,
      estimatedDuration: '35 mins',
      route: 'Via Scenic Route',
      pricePerSeat: '$7',
      carModel: 'Tesla Model 3',
      preferences: ['No Smoking', 'Eco-Friendly'],
      postedTime: '45 mins ago'
    }
  ];

  const timeSlots = ['all', '5:00-5:30 PM', '5:30-6:00 PM', '6:00-6:30 PM', '6:30-7:00 PM'];

  const filteredRides = carpoolRides.filter(ride => {
    const matchesSearch = ride.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ride.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ride.driver.toLowerCase().includes(searchTerm.toLowerCase());
    // For simplicity, we'll skip the time filtering for now
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Carpooling</h1>
                <p className="text-gray-600">Share rides, save money, help the environment</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Offer a Ride
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by location or driver..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="w-full md:w-48">
                <Clock className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Departure Time" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time === 'all' ? 'All Times' : time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <Car className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">23</p>
              <p className="text-sm text-gray-600">Available Rides</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">67</p>
              <p className="text-sm text-gray-600">Available Seats</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-600">Destinations</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-gray-600">Avg Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Rides List */}
        <div className="space-y-4">
          {filteredRides.map((ride) => (
            <Card key={ride.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  {/* Driver Info */}
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {ride.driver.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{ride.driver}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{ride.rating}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{ride.carModel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="flex-1 lg:mx-8 mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium">{ride.from}</span>
                      </div>
                      <Navigation className="w-4 h-4 text-gray-400" />
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-medium">{ride.to}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{ride.route}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {ride.preferences.map((pref, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {pref}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Time and Seats */}
                  <div className="text-center lg:text-right">
                    <div className="mb-2">
                      <div className="flex items-center space-x-1 text-lg font-semibold">
                        <Clock className="w-4 h-4" />
                        <span>{ride.departureTime}</span>
                      </div>
                      <p className="text-sm text-gray-600">{ride.estimatedDuration}</p>
                    </div>
                    
                    <div className="flex items-center justify-center lg:justify-end space-x-2 mb-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="text-sm">
                        {ride.availableSeats}/{ride.totalSeats} available
                      </span>
                    </div>
                    
                    <div className="text-xl font-bold text-blue-600 mb-3">
                      {ride.pricePerSeat}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Message
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Request Seat
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredRides.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Car className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No rides found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search or check back later for new rides.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Offer a Ride
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarpoolingPage;
