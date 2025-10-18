import React, { useState, useEffect } from 'react';
import { X, Star, Phone, MessageCircle, Mail, CheckCircle } from 'lucide-react';

const GlobalPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [remainingSpots, setRemainingSpots] = useState(11);

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenPopup', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBookCall = () => {
    // Simulate booking - decrease remaining spots
    if (remainingSpots > 0) {
      setRemainingSpots(prev => prev - 1);
      // You can add actual booking logic here
      alert(`Congratulations! You've secured one of the ${remainingSpots} remaining free spots!`);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-2xl relative overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X size={16} />
        </button>

        {/* Header with stars and badge */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center relative">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Star className="text-orange-400 fill-current" size={32} />
            <Star className="text-orange-400 fill-current" size={32} />
            <Star className="text-orange-400 fill-current" size={32} />
            <Star className="text-orange-400 fill-current" size={32} />
          </div>
          
          <div className="bg-slate-800 text-white px-4 py-2 rounded-lg inline-block mb-2">
            <div className="text-sm font-bold">SAME DAY RESPONSE</div>
            <div className="text-xs bg-yellow-500 text-black px-2 py-1 rounded mt-1">
              GUARANTEED
            </div>
          </div>
          
          {/* Limited offer banner */}
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
            🔥 Only {remainingSpots} FREE spots left!
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-lg p-4 text-center mb-4">
            <h2 className="text-lg font-bold tracking-wide">GET IN TOUCH</h2>
          </div>

          <div className="bg-slate-800 text-white rounded-lg p-4 text-center mb-6">
            <h3 className="font-bold text-lg mb-2">Let's talk about your project!</h3>
            <p className="text-sm mb-1">No Spam, No Upselling!</p>
            <p className="text-sm">Just a detailed discussion.</p>
          </div>

          {/* Contact options */}
          <div className="flex justify-between mb-4 text-xs">
            <div className="flex items-center gap-1">
              <Phone size={14} className="text-green-600" />
              <span>Book a Call</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} className="text-green-600" />
              <span>Whatsapp</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-slate-600" />
              <span>Email Us</span>
            </div>
          </div>

          {/* Contact numbers */}
          <div className="grid grid-cols-2 gap-2 text-xs mb-4">
            <div className="flex items-center gap-1">
              <MessageCircle size={12} className="text-green-600" />
              <span>India: +919773901990</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={12} className="text-green-600" />
              <span>UK: +447537188459</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={12} className="text-green-600" />
              <span>USA: +12028476988</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={12} className="text-green-600" />
              <span>AUS: +61485921488</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBookCall}
            className="w-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-bold py-3 rounded-lg mb-4 hover:from-orange-500 hover:to-yellow-600 transition-all transform hover:scale-105"
          >
            BOOK A DISCOVERY CALL NOW
          </button>

          {/* Trust indicators */}
          <div className="flex justify-center gap-6 text-sm text-green-600">
            <div className="flex items-center gap-1">
              <CheckCircle size={16} />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={16} />
              <span>We Sign NDA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPopup;