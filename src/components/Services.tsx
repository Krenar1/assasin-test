
import { useEffect, useRef, useState } from 'react';
import { Brain, Cpu, Database, LineChart, Code, Globe } from 'lucide-react';

const ServiceCard = ({ icon, title, description, index }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden transition-all duration-500 opacity-0 translate-y-8`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-asaasin-purple/20 to-asaasin-neon/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <div className={`h-full p-6 md:p-8 bg-asaasin-black/80 border border-asaasin-purple/20 backdrop-blur-sm transition-all duration-500 ${isHovered ? 'bg-asaasin-black/90' : ''}`}>
        <div className={`mb-5 p-3 rounded-lg inline-block bg-asaasin-purple/10 transition-all duration-300 ${isHovered ? 'bg-asaasin-neon/20 translate-y-[-5px]' : ''}`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-asaasin-mauve">
          {description}
        </p>
        
        <div className={`absolute bottom-0 left-0 w-full h-1 bg-asaasin-neon scale-x-0 origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : ''}`}></div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6 text-asaasin-neon" />,
      title: "AI Strategy Consulting",
      description: "Develop a comprehensive AI roadmap tailored to your business goals and challenges."
    },
    {
      icon: <Cpu className="w-6 h-6 text-asaasin-neon" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models that deliver predictive insights and automate complex decision processes."
    },
    {
      icon: <Database className="w-6 h-6 text-asaasin-neon" />,
      title: "Data Engineering",
      description: "Transform raw data into structured, actionable information with our advanced data pipelines."
    },
    {
      icon: <LineChart className="w-6 h-6 text-asaasin-neon" />,
      title: "Predictive Analytics",
      description: "Forecast trends and anticipate market changes with our powerful predictive models."
    },
    {
      icon: <Code className="w-6 h-6 text-asaasin-neon" />,
      title: "AI Integration",
      description: "Seamlessly connect AI capabilities with your existing systems and workflows."
    },
    {
      icon: <Globe className="w-6 h-6 text-asaasin-neon" />,
      title: "Intelligent Automation",
      description: "Streamline operations with intelligent process automation that adapts and improves over time."
    }
  ];
  
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-asaasin-black to-asaasin-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2QjUzQTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-asaasin-purple opacity-10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-asaasin-neon opacity-10 blur-[100px] rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Our Services</h2>
          <p className="section-subtitle text-asaasin-mauve">
            Comprehensive AI solutions designed to address your unique business challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
