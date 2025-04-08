
import { useEffect, useRef } from 'react';
import { CheckCircle2, Target, Shield, Zap } from 'lucide-react';

const ValueCard = ({ icon, title, description, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
      className="flex flex-col md:flex-row items-start gap-5 opacity-0 translate-y-8 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-asaasin-purple/10 p-3 rounded-lg shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-asaasin-mauve">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.reveal-animation');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('revealed');
            }, index * 100);
          });
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const values = [
    {
      icon: <Target size={24} className="text-asaasin-neon" />,
      title: "Precision",
      description: "We deliver carefully crafted solutions with meticulous attention to detail, ensuring accuracy in every aspect of our work."
    },
    {
      icon: <Zap size={24} className="text-asaasin-neon" />,
      title: "Efficiency",
      description: "Our streamlined processes and advanced technologies maximize productivity while minimizing resource consumption."
    },
    {
      icon: <Shield size={24} className="text-asaasin-neon" />,
      title: "Stealth",
      description: "We operate with discretion and security, protecting your sensitive data and competitive advantages."
    },
    {
      icon: <CheckCircle2 size={24} className="text-asaasin-neon" />,
      title: "Disruption",
      description: "We challenge conventional thinking to pioneer innovative solutions that transform industries."
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-asaasin-black/95 to-asaasin-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2QjUzQTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="mb-6 inline-block px-4 py-2 border border-asaasin-purple/30 rounded-full bg-asaasin-purple/5 backdrop-blur-sm reveal-animation">
              <p className="text-asaasin-neon text-sm font-medium">
                Who We Are
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal-animation">
              Pioneering the Future of AI-Driven Business Solutions
            </h2>
            
            <p className="text-asaasin-mauve mb-8 reveal-animation">
              Asaasin was founded with a vision to make advanced AI technologies accessible and impactful for businesses of all sizes. Our team of AI specialists, data scientists, and business strategists work collaboratively to develop solutions that address real-world challenges.
            </p>
            
            <p className="text-asaasin-mauve mb-10 reveal-animation">
              We believe in the transformative power of artificial intelligence when implemented with strategic purpose and ethical considerations. Our approach combines cutting-edge technology with practical business acumen to deliver measurable results.
            </p>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-purple-gradient rounded-2xl overflow-hidden shadow-xl relative reveal-animation">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-asaasin-black rotate-45 flex items-center justify-center">
                  <div className="w-10 h-10 bg-asaasin-purple triangle-clip rotate-180"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-1 bg-white/10 rounded-full"></div>
              <div className="absolute top-14 left-10 w-12 h-1 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-20 h-1 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-14 right-10 w-12 h-1 bg-white/10 rounded-full"></div>
            </div>
            
            {/* Decorative shapes */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-asaasin-purple/10 rounded-lg rotate-12 reveal-animation" style={{ transitionDelay: '200ms' }}></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-asaasin-neon/10 rounded-full reveal-animation" style={{ transitionDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
