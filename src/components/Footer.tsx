'use client';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold">Homora Interiors</h3>
          <p className="text-sm mt-2 max-w-xs">
            Transforming spaces into personalized sanctuaries from Kochi.
          </p>
        </div>

        {/* Quick Links - Column Format */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><a href="/home" className="hover:text-yellow-300 transition-colors">Home</a></li>
            <li><a href="/services" className="hover:text-yellow-300 transition-colors">Services</a></li>
            <li><a href="/projects" className="hover:text-yellow-300 transition-colors">Projects</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="text-sm space-y-2">
            <p>
              Email: <a 
                href="mailto:homorainteriors@gmail.com" 
                className="hover:text-yellow-300 transition-colors underline"
              >
                homorainteriors@gmail.com
              </a>
            </p>
            <p>
              Phone: <a 
                href="tel:+919048400797" 
                className="hover:text-yellow-300 transition-colors underline"
              >
                +91 9048400797
              </a>
            </p>
            <p>Address: 48/1326-D, Rosa mystica building, P.C road, Vyttila P.O kochi-682019</p>
            
            {/* Google Map Embed */}
            <div className="mt-4 h-32 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.082395399002!2d76.3200112749927!3d9.966805990137037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0873c7e1e7d5d5%3A0xea4f1b6f3c4f3c4f!2sVyttila%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1642345678901!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Homora Interiors Location"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 md:justify-start">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-sm text-center md:text-left mt-8 border-t border-white/30 pt-4">
        &copy; {new Date().getFullYear()} Homora Interiors. All rights reserved.
      </div>
    </footer>
  );
}