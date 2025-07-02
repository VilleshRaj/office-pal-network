
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CarpoolCard = () => {
  const latestCarpool = [
    { id: 1, from: 'UBS Kharadi Office', to: 'Koregaon Park', seats: 2, time: '6:00 PM', driver: 'Priya S.' },
    { id: 2, from: 'UBS Kharadi Office', to: 'Baner', seats: 1, time: '5:30 PM', driver: 'Rahul P.' },
    { id: 3, from: 'UBS Kharadi Office', to: 'Wakad', seats: 3, time: '6:15 PM', driver: 'Sneha K.' }
  ];

  return (
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
  );
};

export default CarpoolCard;
