
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AIAssistantCard = () => {
  return (
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
  );
};

export default AIAssistantCard;
