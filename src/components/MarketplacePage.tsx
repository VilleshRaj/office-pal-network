
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Search, Filter, Heart, MapPin, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const marketplaceItems = [
    {
      id: 1,
      title: 'iPhone 13 Pro - Excellent Condition',
      price: '$800',
      category: 'Electronics',
      seller: 'John Doe',
      location: 'Building A, Floor 3',
      postedTime: '2 hours ago',
      image: '/placeholder.svg',
      description: 'Barely used iPhone 13 Pro in space gray. Includes charger and case.',
      likes: 12
    },
    {
      id: 2,
      title: 'Herman Miller Office Chair',
      price: '$150',
      category: 'Furniture',
      seller: 'Lisa Park',
      location: 'Building B, Floor 1',
      postedTime: '5 hours ago',
      image: '/placeholder.svg',
      description: 'Ergonomic office chair, perfect for home office setup.',
      likes: 8
    },
    {
      id: 3,
      title: 'Downtown Parking Spot',
      price: '$200/month',
      category: 'Parking',
      seller: 'Tom Wilson',
      location: 'Downtown Garage',
      postedTime: '1 day ago',
      image: '/placeholder.svg',
      description: 'Covered parking spot available for rent. Very close to office.',
      likes: 15
    },
    {
      id: 4,
      title: 'MacBook Air M1',
      price: '$900',
      category: 'Electronics',
      seller: 'Sarah Miller',
      location: 'Building C, Floor 2',
      postedTime: '3 hours ago',
      image: '/placeholder.svg',
      description: 'MacBook Air with M1 chip, 8GB RAM, 256GB SSD. Perfect for work.',
      likes: 20
    },
    {
      id: 5,
      title: 'Standing Desk Converter',
      price: '$75',
      category: 'Furniture',
      seller: 'Mike Rodriguez',
      location: 'Building A, Floor 1',
      postedTime: '6 hours ago',
      image: '/placeholder.svg',
      description: 'Height adjustable standing desk converter. Great for health!',
      likes: 6
    },
    {
      id: 6,
      title: 'Monthly Bus Pass',
      price: '$50',
      category: 'Transportation',
      seller: 'Emma Chen',
      location: 'Building B, Floor 4',
      postedTime: '4 hours ago',
      image: '/placeholder.svg',
      description: 'Unused monthly bus pass for city transit. Valid till end of month.',
      likes: 4
    }
  ];

  const categories = ['all', 'Electronics', 'Furniture', 'Parking', 'Transportation', 'Books', 'Other'];

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
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
                <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
                <p className="text-gray-600">Buy, sell, and rent with your colleagues</p>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 mr-2" />
              Post New Item
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge className="bg-green-600">{item.category}</Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  <span className="font-bold text-green-600 text-xl">{item.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.postedTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {item.seller.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-gray-600">{item.seller}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Heart className="w-3 h-3" />
                    <span>{item.likes}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className="flex-1">
                    Contact Seller
                  </Button>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Tag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search terms or browse all categories.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Post the First Item
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;
