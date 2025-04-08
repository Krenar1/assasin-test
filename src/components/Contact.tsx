
import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      }, 500);
    }, 1500);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }
    
    return () => {
      if (formContainerRef.current) {
        observer.unobserve(formContainerRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-asaasin-black to-[#1a1a1a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-gradient opacity-10 blur-[100px]"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-gradient opacity-10 blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 inline-block px-4 py-2 border border-asaasin-purple/30 rounded-full bg-asaasin-purple/5 backdrop-blur-sm">
              <p className="text-asaasin-neon text-sm font-medium">
                Get In Touch
              </p>
            </div>
            
            <h2 className="section-title text-white">
              Ready to Transform Your Business?
            </h2>
            
            <p className="section-subtitle text-asaasin-mauve">
              Schedule a consultation with our AI experts and discover how our solutions can address your unique challenges.
            </p>
          </div>
          
          <div 
            ref={formContainerRef} 
            className="bg-asaasin-black/70 border border-asaasin-purple/20 rounded-2xl backdrop-blur-md p-8 shadow-xl opacity-0 translate-y-10 transition-all duration-1000"
          >
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-asaasin-purple/10 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8 text-asaasin-neon" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 animate-fade-in">Thank You!</h3>
                <p className="text-asaasin-mauve max-w-md mx-auto animate-fade-in animate-delay-100">
                  Your message has been received. One of our AI specialists will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 btn-secondary animate-fade-in animate-delay-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-white">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-asaasin-purple/30 bg-asaasin-black/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asaasin-neon transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-white">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-asaasin-purple/30 bg-asaasin-black/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asaasin-neon transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-white">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full rounded-md border border-asaasin-purple/30 bg-asaasin-black/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asaasin-neon transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-white">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-md border border-asaasin-purple/30 bg-asaasin-black/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asaasin-neon transition-all"
                    placeholder="Tell us about your project and requirements..."
                  />
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary ${isSubmitting ? 'opacity-70' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
