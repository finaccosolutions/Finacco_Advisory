import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in learning more about your business advisory services.");
    window.open(`https://wa.me/919745524438?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
}