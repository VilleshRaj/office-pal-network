
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Car } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OfferRideDialog = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    viaRoute: '',
    departureTime: '',
    availableSeats: '',
    preferences: '',
    carModel: ''
  });
  const { toast } = useToast();

  const destinations = [
    'Koregaon Park',
    'Baner',
    'Wakad',
    'Viman Nagar',
    'Aundh',
    'Hinjewadi',
    'Magarpatta',
    'Hadapsar',
    'Kothrud',
    'Shivaji Nagar',
    'Other'
  ];

  const seatOptions = ['1', '2', '3', '4', '5'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ride offered:', formData);
    
    toast({
      title: "Ride Offered Successfully!",
      description: `Your ride to ${formData.destination} has been posted.`,
    });
    
    // Reset form and close dialog
    setFormData({
      destination: '',
      viaRoute: '',
      departureTime: '',
      availableSeats: '',
      preferences: '',
      carModel: ''
    });
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700">
          <Car className="w-4 h-4" />
          <span>Offer Ride</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Offer a Ride</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="destination">Destination *</Label>
            <Select value={formData.destination} onValueChange={(value) => handleInputChange('destination', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest}>
                    {dest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="viaRoute">Via Route</Label>
            <Input
              id="viaRoute"
              placeholder="Via Nagar Road, Airport Road, etc."
              value={formData.viaRoute}
              onChange={(e) => handleInputChange('viaRoute', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="departureTime">Departure Time *</Label>
            <Input
              id="departureTime"
              type="time"
              value={formData.departureTime}
              onChange={(e) => handleInputChange('departureTime', e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="availableSeats">Available Seats *</Label>
            <Select value={formData.availableSeats} onValueChange={(value) => handleInputChange('availableSeats', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Number of seats" />
              </SelectTrigger>
              <SelectContent>
                {seatOptions.map((seats) => (
                  <SelectItem key={seats} value={seats}>
                    {seats} seat{seats !== '1' ? 's' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="carModel">Car Model</Label>
            <Input
              id="carModel"
              placeholder="Maruti Swift, Honda City, etc."
              value={formData.carModel}
              onChange={(e) => handleInputChange('carModel', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferences">Ride Preferences</Label>
            <Textarea
              id="preferences"
              placeholder="No Smoking, Music OK, Pet Friendly, etc."
              value={formData.preferences}
              onChange={(e) => handleInputChange('preferences', e.target.value)}
              rows={2}
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Offer Ride
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OfferRideDialog;
