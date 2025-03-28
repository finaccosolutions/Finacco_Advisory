import React from 'react';
import { ArrowDown, BarChart2, Shield, Users, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Business Growth",
      description: "Strategic solutions for sustainable expansion"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance Assured",
      description: "Stay compliant with regulations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Dedicated professionals at your service"
    }
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-700/25"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 relative"
        > 
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight px-4 relative z-10"
          >
            <span className="relative inline-block text-gray-900 dark:text-white">
              Empowering Your
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
            <br />
            <span className="text-blue-600 dark:text-blue-400">
              Business Success
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 px-4"
          >
            Your trusted partner for comprehensive business solutions, compliance management, and financial growth strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Discover Our Solutions
              <ArrowDown className="group-hover:animate-bounce" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 pb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              className="relative group mx-4 sm:mx-0 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative p-8 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-purple-900/40 rounded-lg shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-lg mb-4 text-white transform group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}