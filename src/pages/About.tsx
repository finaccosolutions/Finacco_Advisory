import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Spacing for fixed navbar */}
      <div className="h-24 sm:h-16"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About Finacco Advisory
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            We are a leading business consultancy firm dedicated to helping businesses navigate complex financial landscapes and achieve sustainable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="group space-y-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Founded with a vision to simplify business compliance and financial management, Business Bugs Advisory has grown to become a trusted partner for businesses across industries. Our journey is marked by continuous innovation and unwavering commitment to client success.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We combine expertise with cutting-edge technology to deliver comprehensive solutions that address the evolving needs of modern businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="group space-y-6 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              To empower businesses with expert guidance and innovative solutions that drive growth, ensure compliance, and maximize financial efficiency. We strive to be the catalyst that transforms challenges into opportunities for our clients.
            </p>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <Target className="h-6 w-6 text-blue-600 mr-2" />
                Strategic Growth Planning
              </li>
              <li className="flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                Compliance Excellence
              </li>
              <li className="flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Client-Centric Approach
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Call Us
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 97455 24438</p>
                <p className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+91 96453 53469</p>
              </div>
            </div>

            <div className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Email Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                contact@finaccosolutions.com
              </p>
            </div>

            <div className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Visit Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mecca Tower, 2nd Floor,<br />
                Court Road, Near Sree Krishna Theatre,<br />
                Manjeri, Kerala-676521
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Years of expertise in business consultancy and financial advisory services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl"
          >
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Dedicated professionals with diverse expertise in finance and business.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl"
          >
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Results Driven</h3>
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Focused on delivering measurable results and sustainable growth for clients.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}