import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your AI support assistant. I'm here to help you with your studies, answer questions about your progress, or just chat about anything that's on your mind. How can I support you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('grade') || lowerMessage.includes('marks')) {
      return "I can see you're concerned about your grades. Your current average is B+, which is great! I notice you're excelling in English with an A grade. For subjects like Math where you have room for improvement, I recommend setting aside 30 minutes daily for practice problems. Would you like me to suggest some specific study techniques?";
    }
    
    if (lowerMessage.includes('attendance')) {
      return "Your attendance is at 92%, which is really good! You're just 3% away from your 95% goal. Remember, consistent attendance is one of the strongest predictors of academic success. Is there anything specific that's been affecting your attendance lately?";
    }
    
    if (lowerMessage.includes('stress') || lowerMessage.includes('anxiety') || lowerMessage.includes('worried')) {
      return "I understand that school can feel overwhelming sometimes. It's completely normal to feel stressed. Here are some techniques that have helped other students: deep breathing exercises, breaking large tasks into smaller steps, and maintaining a regular sleep schedule. Remember, you're doing better than you think! Would you like me to share some specific stress management resources?";
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to support you in many ways! I can help you understand your academic progress, suggest study strategies, provide motivational tips, or just listen if you need to talk. I can also connect you with counselors or teachers when needed. What kind of support would be most helpful right now?";
    }
    
    if (lowerMessage.includes('math') || lowerMessage.includes('mathematics')) {
      return "I see Math is one of your subjects where you can improve. Your current grade is B+, which shows you have a solid foundation! Here are some tips: practice problems daily, ask questions when you don't understand, and try explaining concepts to others. Would you like me to suggest some online resources or study groups?";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! I'm always here when you need support or just want to chat. Remember, every small step counts toward your success. Keep up the great work! 🌟";
    }
    
    if (lowerMessage.includes('career') || lowerMessage.includes('future')) {
      return "It's wonderful that you're thinking about your future! Based on your strong performance in English and overall good grades, you have many paths open to you. I'd recommend exploring your interests through the career guidance sessions available. What subjects or activities do you enjoy most?";
    }
    
    // Default responses
    const defaultResponses = [
      "That's interesting! Can you tell me more about what's on your mind?",
      "I'm here to listen and help. What would you like to talk about?",
      "Thanks for sharing that with me. How are you feeling about your studies lately?",
      "I want to make sure I understand you correctly. Could you elaborate a bit more?",
      "That sounds important to you. I'm here to support you through this."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="shadow-card h-[500px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          <MessageCircle className="w-5 h-5 mr-2 text-primary" />
          AI Support Assistant
        </CardTitle>
        <p className="text-sm text-muted-foreground">Confidential & Supportive • Available 24/7</p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-4 pt-0">
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gradient-hero text-white'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 opacity-70 ${
                    message.sender === 'user' ? 'text-primary-foreground' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <div className="flex space-x-2 mt-4">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={isTyping || inputMessage.trim() === ''}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;