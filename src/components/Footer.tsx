import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm interested in learning more about your business advisory services.");
    window.open(`https://wa.me/919745524438?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-6xl mx-auto mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-400">
                Empowering businesses with expert financial guidance and compliance solutions for sustainable growth and success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Saturday</li>
                <li>9:30 AM - 6:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setTimeout(() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Professional Excellence</li>
                <li>Client-Centric Approach</li>
                <li>Integrity & Transparency</li>
                <li>Continuous Innovation</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Finacco Solutions. All rights reserved. | Professional Business Consultancy Services</p>
        </div>
      </div>
    </footer>
  );
}