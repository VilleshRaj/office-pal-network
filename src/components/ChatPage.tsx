
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User, MapPin, Newspaper, Heart, Coffee, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi there! I'm your workplace AI assistant. I can help you with directions, local news, health tips, restaurant recommendations, and much more. What would you like to know?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { icon: MapPin, text: 'Find nearby gas stations', category: 'location' },
    { icon: Newspaper, text: 'Today\'s local news', category: 'news' },
    { icon: Heart, text: 'Find nearby clinics', category: 'health' },
    { icon: Coffee, text: 'Best coffee shops nearby', category: 'food' },
    { icon: Lightbulb, text: 'Productivity tips', category: 'tips' }
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('gas') || input.includes('fuel')) {
      return "I found 3 gas stations within 2 miles of your office:\n\n🚗 Shell Station - 0.5 miles (Current price: $3.45/gal)\n🚗 BP Gas - 1.2 miles (Current price: $3.42/gal)\n🚗 Chevron - 1.8 miles (Current price: $3.48/gal)\n\nWould you like directions to any of these?";
    }
    
    if (input.includes('news') || input.includes('today')) {
      return "Here are today's top local headlines:\n\n📰 New bike lanes opened on Main Street\n📰 Local tech company announces 200 new jobs\n📰 Weekend farmers market returns to downtown\n📰 Traffic advisory: Construction on Highway 101\n\nWould you like details on any of these stories?";
    }
    
    if (input.includes('clinic') || input.includes('doctor') || input.includes('health')) {
      return "Here are nearby medical facilities:\n\n🏥 City Medical Center - 0.8 miles (Emergency & Urgent Care)\n🏥 QuickCare Clinic - 1.5 miles (Walk-ins welcome)\n🏥 Family Health Practice - 2.1 miles (Appointments available)\n\nFor emergencies, call 911. Would you like contact information for any of these?";
    }
    
    if (input.includes('coffee') || input.includes('restaurant') || input.includes('food')) {
      return "Great coffee spots near you:\n\n☕ The Daily Grind - 0.3 miles (4.8★ - Famous espresso)\n☕ Coffee Bean Central - 0.7 miles (4.6★ - Great pastries)\n☕ Artisan Roasters - 1.1 miles (4.9★ - Local favorite)\n\nWould you like to see lunch options too?";
    }
    
    if (input.includes('tip') || input.includes('productive')) {
      return "Here are some productivity tips for your workday:\n\n💡 Try the Pomodoro Technique: 25 min work, 5 min break\n💡 Take a 2-minute walk every hour to boost focus\n💡 Use the 2-minute rule: If it takes less than 2 min, do it now\n💡 Block time for deep work without notifications\n\nWould you like more specific tips for any area?";
    }
    
    return "I'd be happy to help! I can assist with:\n\n• Finding nearby places (gas, food, medical)\n• Local news and weather updates\n• Health and wellness tips\n• Directions and transportation\n• General workplace questions\n\nWhat specific information are you looking for?";
  };

  const handleQuickAction = (action) => {
    setInputMessage(action.text);
    handleSendMessage();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
                <p className="text-gray-600">Your intelligent workplace companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Online</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="flex items-center space-x-2 p-3 h-auto justify-start"
                  onClick={() => handleQuickAction(action)}
                >
                  <action.icon className="w-4 h-4" />
                  <span className="text-sm">{action.text}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Container */}
        <Card className="h-[500px] flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
          </CardHeader>
          
          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-purple-500'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className={`px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="whitespace-pre-line">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Ask me anything..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-purple-600 hover:bg-purple-700"
                disabled={inputMessage.trim() === ''}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Assistant Capabilities */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">What I can help you with:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Locations</p>
                <p className="text-xs text-gray-600">Find nearby places</p>
              </div>
              <div className="text-center">
                <Newspaper className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">News</p>
                <p className="text-xs text-gray-600">Latest updates</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Health</p>
                <p className="text-xs text-gray-600">Medical assistance</p>
              </div>
              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Tips</p>
                <p className="text-xs text-gray-600">Productivity advice</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatPage;
