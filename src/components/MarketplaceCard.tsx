
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MarketplaceCard = () => {
  const topMarketplace = [
    { id: 1, title: 'MacBook Air M1', price: '₹75,000', category: 'Electronics', seller: 'Neha P.' },
    { id: 2, title: 'Herman Miller Chair', price: '₹12,000', category: 'Furniture', seller: 'Arjun D.' },
    { id: 3, title: 'Kharadi Parking Spot', price: '₹2,500/month', category: 'Parking', seller: 'Amit S.' }
  ];

  return (
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
  );
};

export default MarketplaceCard;
