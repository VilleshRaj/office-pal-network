
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User, Users, Calendar, Coffee, FileText, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi there! I'm your Employee Assistant. I can help you with HR policies, leave applications, team information, office facilities, and much more. What would you like to know about today?",
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
    { icon: Users, text: 'Find team contact info', category: 'team' },
    { icon: Calendar, text: 'Check leave balance', category: 'leave' },
    { icon: Coffee, text: 'Office cafeteria menu', category: 'facilities' },
    { icon: FileText, text: 'HR policies', category: 'hr' },
    { icon: Lightbulb, text: 'Employee benefits', category: 'benefits' }
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
    
    if (input.includes('team') || input.includes('contact') || input.includes('colleague')) {
      return "Here are your team contacts:\n\n👥 Development Team:\n• Rahul Sharma (Tech Lead) - rahul.sharma@company.com\n• Priya Gupta (Senior Dev) - priya.gupta@company.com\n• Arjun Patil (QA) - arjun.patil@company.com\n\n👥 HR Team:\n• Sneha Joshi (HR Manager) - sneha.joshi@company.com\n• Amit Kumar (Recruiter) - amit.kumar@company.com\n\nNeed specific contact details for someone else?";
    }
    
    if (input.includes('leave') || input.includes('vacation') || input.includes('holiday')) {
      return "📅 Your Leave Information:\n\n• Available Casual Leaves: 8 days\n• Available Sick Leaves: 6 days\n• Earned Leaves: 12 days\n• Next company holiday: Diwali (Nov 12-13)\n\nTo apply for leave, use the HR portal or email your manager. Would you like help with the leave application process?";
    }
    
    if (input.includes('cafeteria') || input.includes('food') || input.includes('menu') || input.includes('lunch')) {
      return "🍽️ Today's Cafeteria Menu:\n\n**Lunch (12:00 PM - 2:00 PM):**\n• North Indian: Dal Tadka, Roti, Rice, Veg Curry\n• South Indian: Sambar Rice, Rasam, Curd\n• Continental: Pasta, Garlic Bread, Salad\n• Snacks: Samosa, Tea, Coffee available all day\n\n**Timings:**\n• Breakfast: 8:30-10:00 AM\n• Lunch: 12:00-2:00 PM\n• Evening Snacks: 4:00-6:00 PM";
    }
    
    if (input.includes('hr') || input.includes('policy') || input.includes('policies')) {
      return "📋 HR Policies & Guidelines:\n\n• Working Hours: 9:30 AM - 6:30 PM (Monday-Friday)\n• Dress Code: Business casual, formal on client meeting days\n• Remote Work: Up to 2 days per week with manager approval\n• Probation Period: 6 months for new joiners\n• Annual Appraisal: March-April\n\nFor detailed policy documents, check the HR portal or contact Sneha Joshi. Any specific policy questions?";
    }
    
    if (input.includes('benefit') || input.includes('insurance') || input.includes('medical') || input.includes('pf')) {
      return "💼 Employee Benefits:\n\n• Health Insurance: Family coverage up to ₹5 lakhs\n• Life Insurance: 4x annual salary coverage\n• Provident Fund: 12% employer contribution\n• Gratuity: After 5 years of service\n• Performance Bonus: Annual based on company performance\n• Learning & Development: ₹25,000 annual budget\n• Gym Membership: 50% reimbursement\n\nNeed details about any specific benefit?";
    }
    
    return "I'd be happy to help with employee-related queries! I can assist with:\n\n• 👥 Team contacts and org chart\n• 📅 Leave policies and balance\n• 🏢 Office facilities and services\n• 📋 HR policies and procedures\n• 💼 Employee benefits and perks\n• 🎯 Performance reviews and career growth\n• 🔧 IT support and equipment requests\n\nWhat specific information do you need?";
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
                <h1 className="text-3xl font-bold text-gray-900">Employee Assistant</h1>
                <p className="text-gray-600">Your workplace companion for all employee needs</p>
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
                <CardTitle className="text-lg">Employee Assistant</CardTitle>
                <p className="text-sm text-gray-600">Always here to help with workplace queries</p>
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
                placeholder="Ask about HR policies, team info, benefits..."
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
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Team Info</p>
                <p className="text-xs text-gray-600">Contacts & org chart</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Leave</p>
                <p className="text-xs text-gray-600">Balance & policies</p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-sm font-medium">HR Policies</p>
                <p className="text-xs text-gray-600">Guidelines & procedures</p>
              </div>
              <div className="text-center">
                <Lightbulb className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Benefits</p>
                <p className="text-xs text-gray-600">Perks & insurance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatPage;
