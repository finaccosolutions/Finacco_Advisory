import React from 'react';
import { motion } from 'framer-motion';
import { advisoryServices } from '../../data/services';

export default function AdvisoryServices() {
  return (
    <div id="services" className="max-w-6xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our comprehensive range of financial and business advisory services designed to help your business thrive.
        </p>
      </motion.div>

      <div className="space-y-8">
        {advisoryServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`bg-gradient-to-br ${
              index % 2 === 0 ? 'from-blue-50 to-indigo-50' : 'from-indigo-50 to-blue-50'
            } dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-500`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2 space-y-4">
                <div className="relative inline-block">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                <div className="pt-4">
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Hi, I'm interested in your ${service.name} service. Can you provide more information?`);
                    window.open(`https://wa.me/919745524438?text=${message}`, '_blank');
                  }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Enquire Now
                </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[300px] object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center bg-white dark:bg-gray-800 rounded-2xl p-16 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today for a personalized consultation about your business needs.
        </p>
        <a
          href="mailto:contact@finaccosolutions.com"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:translate-y-[-2px] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Get Started Today
        </a>
      </motion.div>
    </div>
  );
}