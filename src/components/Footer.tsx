
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#151515] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2QjUzQTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-b border-asaasin-purple/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/c7af0244-9fec-423c-b322-45b8020b43f2.png" 
                  alt="Asaasin Logo" 
                  className="w-8 h-8" 
                />
                <span className="font-bold text-xl text-white">Asaasin</span>
              </div>
              
              <p className="text-asaasin-mauve mb-6 max-w-md">
                Pioneering the future of AI-driven business solutions with precision, efficiency, stealth, and disruption.
              </p>
              <p className="text-asaasin-mauve italic">
                A Morris Media Company
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-asaasin-mauve hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-asaasin-purple" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-asaasin-mauve hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-asaasin-purple" />
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-asaasin-mauve hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-asaasin-purple" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-asaasin-mauve hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-2 text-asaasin-purple" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="text-asaasin-mauve">
                  California, USA<br />
                  Kosovo
                </li>
                <li>
                  <a href="mailto:info@asaasin.ai" className="text-asaasin-mauve hover:text-white transition-colors">
                    info@asaasin.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-asaasin-mauve text-sm">
            © {currentYear} Asaasin. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-asaasin-mauve hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-asaasin-mauve hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
