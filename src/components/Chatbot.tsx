"use client";

import { useState, useEffect, useRef } from 'react';

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Animation timing
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen]);

  // Sample initial messages
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hello! Welcome to HOMORA Interiors. I'm your design assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleWhatsApp = () => {
    window.open('https://wa.me/9048400797', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+9048400797';
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      let response = "";
      switch (question) {
        case "What services do you offer?":
          response = "We offer complete interior design solutions including space planning, furniture selection, color consultation, lighting design, and custom storage solutions. We specialize in both residential and commercial spaces.";
          break;
        case "How much does a project cost?":
          response = "Project costs vary based on scope, size, and materials. Our packages start from ₹50,000 for consultation to ₹15 lakhs+ for complete home interiors. We offer free initial consultations to provide accurate estimates.";
          break;
        case "How long does a project take?":
          response = "Timelines depend on project complexity. Typically, a full home interior takes 45 days from design to execution. We provide detailed timelines after our initial consultation.";
          break;
        default:
          response = "That's a great question! Our design consultant can provide detailed information. Would you like to connect with them via WhatsApp or schedule a call?";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const quickQuestions = [
    "What services do you offer?",
    "How much does a project cost?",
    "How long does a project take?",
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open chat"
        style={{ transition: 'transform 0.3s, opacity 0.3s' }}
      >
        <i className="fas fa-comments text-lg md:text-xl"></i>
      </button>

      {/* Chat Container */}
      <div
        className={`transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-10 pointer-events-none'} origin-bottom-right absolute bottom-20 right-0`}
        style={{ transitionProperty: 'transform, opacity' }}
      >
        <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <i className="fas fa-paint-roller text-white"></i>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg">HOMORA Design Assistant</h3>
                <p className="text-xs opacity-90">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Body */}
          <div className="bg-gray-50 h-80 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "bot" ? "items-start" : "items-end justify-end"} mb-4`}
              >
                {message.sender === "bot" && (
                  <div className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white rounded-lg p-2 mr-2 flex-shrink-0">
                    <i className="fas fa-robot text-sm"></i>
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-2 max-w-xs ${message.sender === "bot"
                    ? "bg-white text-gray-800 rounded-tl-none border border-gray-200"
                    : "bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white rounded-br-none"}`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === "bot" ? "text-gray-500" : "text-blue-100"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white rounded-lg p-2 ml-2 flex-shrink-0">
                    <i className="fas fa-user text-sm"></i>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2 font-medium">Quick questions:</p>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-white border border-gray-200 text-gray-700 rounded-xl px-3 py-2 w-full text-left hover:bg-gray-50 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="mb-3 text-center">
              <p className="text-xs text-gray-500">Prefer direct contact? Choose an option below</p>
            </div>
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleWhatsApp}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow hover:shadow-md"
              >
                <i className="fab fa-whatsapp mr-2 text-xl"></i>
                <span>Chat on WhatsApp</span>
              </button>

              <button
                onClick={handleCall}
                className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] hover:from-[#006080] hover:via-[#008a8c] hover:to-[#00b8a0] text-white py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 shadow hover:shadow-md"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                <span>Call Design Expert</span>
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-xs text-gray-400">
                <i className="fas fa-clock mr-1"></i>
                Available: Mon-Sat, 9AM-7PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
