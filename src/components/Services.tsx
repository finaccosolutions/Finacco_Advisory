import React from 'react';
import { advisoryServices } from '../data/services';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-300 px-4">
            We offer a comprehensive range of consultancy services tailored to your business needs.
          </p>
        </div>
        
        <div className="mt-16 space-y-16">
          {advisoryServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className={`group flex flex-col lg:flex-row gap-4 sm:gap-8 items-center bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all p-4 sm:p-8 hover:bg-blue-50 dark:hover:bg-gray-700`}
            >
              <div className="w-full lg:w-1/2 order-1 lg:order-none">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-md transform transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 p-4 sm:p-6">
                <div className="relative inline-block">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  {service.description}
                </p>
                <button
                  onClick={() => {
                    const message = encodeURIComponent(`Hi, I'm interested in your ${service.name} service. Can you provide more information?`);
                    window.open(`https://wa.me/919745524438?text=${message}`, '_blank');
                  }}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 group-hover:bg-blue-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg transform group-hover:translate-y-[-2px]"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}