
import { useEffect, useRef, useState } from 'react';
import { Zap, Timer, Lock, LineChart } from 'lucide-react';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedStat = ({ value, label, prefix = '', suffix = '', duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    function startAnimation() {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(percentage * value));
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };
      
      animationFrame = requestAnimationFrame(step);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);
  
  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        <span ref={countRef}>{prefix}{count}</span>{suffix}
      </div>
      <div className="text-asaasin-mauve font-regular">{label}</div>
    </div>
  );
};

const ValueProposition = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-asaasin-neon" />,
      title: "Enhanced Performance",
      description: "Our AI solutions boost operational efficiency by automating complex tasks and reducing manual workload."
    },
    {
      icon: <Timer className="w-6 h-6 text-asaasin-neon" />,
      title: "Time Efficiency",
      description: "Reduce processing time by up to 78% with our intelligent automation and workflow optimization."
    },
    {
      icon: <Lock className="w-6 h-6 text-asaasin-neon" />,
      title: "Secure Implementation",
      description: "Enterprise-grade security protocols ensure your data remains protected during transformation."
    },
    {
      icon: <LineChart className="w-6 h-6 text-asaasin-neon" />,
      title: "Data-Driven Insights",
      description: "Extract actionable intelligence from your data with advanced analytics capabilities."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-asaasin-black/95 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2QjUzQTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white reveal-animation">
            Transform Your Business with Asaasin
          </h2>
          <p className="section-subtitle text-asaasin-mauve max-w-3xl mx-auto reveal-animation">
            Our AI-driven solutions deliver measurable results, helping you stay ahead in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg reveal-animation"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-asaasin-purple/10 p-3 inline-flex rounded-lg mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-asaasin-mauve">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-purple-gradient rounded-2xl overflow-hidden shadow-2xl reveal-animation">
          <div className="backdrop-blur-sm bg-black/10 p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Delivering Measurable Results</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our clients have experienced significant improvements across key performance metrics.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AnimatedStat value={87} suffix="%" label="Efficiency Increase" />
              <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
              <AnimatedStat value={62} suffix="%" label="Cost Reduction" />
              <AnimatedStat value={3} suffix="x" label="ROI Improvement" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
