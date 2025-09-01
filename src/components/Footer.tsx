import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const examLinks = [
    { name: "IBPS Clerk", path: "/ibps-clerk" },
    { name: "IBPS PO", path: "/ibps-po" },
    { name: "IBPS RRB", path: "/ibps-rrb" },
    { name: "SBI PO", path: "/sbi-po" },
    { name: "SBI Clerk", path: "/sbi-clerk" },
    { name: "RBI Grade B", path: "/rbi-grade-b" },
    { name: "RBI Assistant", path: "/rbi-assistant" },
    { name: "NABARD", path: "/nabard" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Mock Tests", path: "/mock-tests" },
    { name: "Study Material", path: "/study-material" },
    { name: "Faculty", path: "/faculty" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="bg-banking-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-banking-gold rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-banking-navy" />
              </div>
              <div>
                <h1 className="font-heading font-bold text-lg">Kingmakers</h1>
                <p className="text-sm text-banking-light -mt-1">School of Banking</p>
              </div>
            </div>
            <p className="text-banking-light leading-relaxed">
              Your gateway to banking careers. Expert coaching for IBPS, SBI, RBI & NABARD exams 
              with proven results and personalized mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-banking-gold/20 rounded-lg flex items-center justify-center hover:bg-banking-gold hover:text-banking-navy transition-smooth">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-banking-gold/20 rounded-lg flex items-center justify-center hover:bg-banking-gold hover:text-banking-navy transition-smooth">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-banking-gold/20 rounded-lg flex items-center justify-center hover:bg-banking-gold hover:text-banking-navy transition-smooth">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-banking-gold/20 rounded-lg flex items-center justify-center hover:bg-banking-gold hover:text-banking-navy transition-smooth">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Exam Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-banking-gold">Banking Exams</h3>
            <ul className="space-y-2">
              {examLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-banking-light hover:text-banking-gold transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-banking-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-banking-light hover:text-banking-gold transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-banking-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-banking-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-banking-light">
                    123 Banking Street, Education Hub,<br />
                    New Delhi - 110001, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-banking-gold flex-shrink-0" />
                <p className="text-banking-light">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-banking-gold flex-shrink-0" />
                <p className="text-banking-light">info@kingmakersbanking.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-banking-gold/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-banking-light text-sm">
            © 2024 Kingmakers School of Banking. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-banking-light hover:text-banking-gold text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-banking-light hover:text-banking-gold text-sm transition-smooth">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-banking-light hover:text-banking-gold text-sm transition-smooth">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;