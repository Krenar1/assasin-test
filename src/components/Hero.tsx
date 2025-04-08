
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      {
        root: null,
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

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-asaasin-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-purple-gradient opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-purple-gradient opacity-20 blur-3xl animate-float animation-delay-300"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="section-container relative z-10">
        <div 
          ref={sectionRef} 
          className="max-w-5xl mx-auto text-center transition-all duration-1000 opacity-0 translate-y-8"
        >
          <div className="inline-block mb-6 px-4 py-2 border border-asaasin-purple/30 rounded-full bg-asaasin-purple/5 backdrop-blur-sm">
            <p className="text-asaasin-neon text-sm font-medium">
              Precision. Efficiency. Stealth. Disruption.
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="block">Next Generation</span>
            <span className="bg-clip-text text-transparent bg-purple-gradient">
              AI Solutions
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-asaasin-mauve mb-10">
            We combine cutting-edge artificial intelligence with strategic implementation to transform your business processes and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#services" 
              className="btn-primary w-full sm:w-auto animate-fade-in"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="btn-secondary w-full sm:w-auto animate-fade-in animate-delay-200"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated triangle shapes */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden">
        <div className="h-16 w-px bg-asaasin-purple/40 animate-pulse-subtle"></div>
      </div>
      
      <div className="absolute bottom-16 right-1/4 w-8 h-8 bg-asaasin-purple/20 triangle-clip animate-float"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-asaasin-neon/10 triangle-clip rotate-180 animate-float animation-delay-300"></div>
    </section>
  );
};

export default Hero;
