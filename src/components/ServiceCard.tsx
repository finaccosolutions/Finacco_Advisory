import React from 'react';
import { MessageCircle } from 'lucide-react';
import { AdvisoryService } from '../types';

interface ServiceCardProps {
  service: AdvisoryService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const handleEnquiry = () => {
    const message = encodeURIComponent(`Hi, I'm interested in your ${service.name} service. Can you provide more information?`);
    window.open(`https://wa.me/919745524438?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {service.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>
        <button
          onClick={handleEnquiry}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <MessageCircle className="mr-2" size={18} />
          Enquire Now
        </button>
      </div>
    </div>
  );
}