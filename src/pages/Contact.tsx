import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in learning more about your business advisory services.");
    window.open(`https://wa.me/919745524438?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Add spacing div to account for fixed navbar */}
      <div className="h-24 sm:h-16"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
            Have questions about our services? We're here to help. Reach out to us through any of the following channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Our Location</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Mecca Tower, 2nd Floor,<br />
                Court Road, Near Sree Krishna Theatre,<br />
                Manjeri, Kerala-676521
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Business Hours</h2>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <li>Monday - Saturday</li>
                <li>9:30 AM - 6:00 PM</li>
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Contact Details</h2>
              </div>
              <ul className="space-y-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="h-5 w-5 mr-2" />
                  <div>
                    <p>+91 97455 24438</p>
                    <p>+91 96453 53469</p>
                  </div>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="h-5 w-5 mr-2" />
                  contact@finaccosolutions.com
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <MapPin className="h-5 w-5 mr-2 mt-1" />
                  <div>
                    Mecca Tower, 2nd Floor,<br />
                    Court Road, Near Sree Krishna Theatre,<br />
                    Manjeri, Kerala-676521
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl h-fit"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Connect</h2>
            <div className="space-y-6">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl text-sm sm:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </button>
              
              <a
                href="mailto:contact@finaccosolutions.com"
                className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl text-sm sm:text-base"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </a>
            </div>

            <div className="mt-8 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <h3 className="font-semibold mb-2">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Quick Response Time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Expert Consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Personalized Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Comprehensive Support</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}