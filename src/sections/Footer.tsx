import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  // Company information
  const companyInfo = {
    name: "CodeFusion",
    description:
      "Empowering businesses with cutting-edge technology solutions. We specialize in IoT, embedded systems, mobile apps, websites, and machine learning.",
    email: "hello@codefusion.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech City, TC 12345",
  };

  // Quick links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  // Services
  const services = [
    "IoT Development",
    "Embedded Systems",
    "Mobile Applications",
    "Web Development",
    "Machine Learning",
    "Consulting",
  ];

  // Social media links
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/codefusion",
      color: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/codefusion",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/codefusion",
      color: "hover:text-blue-400 dark:hover:text-blue-300",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/codefusion",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/codefusion",
      color: "hover:text-pink-600 dark:hover:text-pink-400",
    },
  ];

  // Handle smooth scroll navigation
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle external link
  const handleExternalLink = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className={`bg-gray-900 dark:bg-black text-white ${className}`}>
      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CF</span>
              </div>
              <span className="text-2xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for the latest tech insights and
              company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  onClick={() => handleExternalLink(social.href)}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
