import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  Zap, 
  ShoppingCart, 
  BarChart, 
  Award, 
  Mail, 
  Linkedin, 
  Phone, 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowUp, 
  ExternalLink,
  Sparkles,
  Send,
  Loader2,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ExperienceCardProps, CaseStudyProps } from './types';
import { ScrollReveal } from './components/ScrollReveal';

// --- AI Assistant Component ---

const AIMarketingAssistant = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `You are Ramit Mehta's AI Portfolio Assistant. Ramit is a Digital Marketing Generalist expert in CRO, E-commerce, and Growth. 
      The user is asking for a marketing or CRO tip for the niche: "${input}". 
      Provide a concise, high-impact growth strategy or CRO experiment idea (max 60 words). 
      Format it professionally with a title and a bulleted list. 
      Mention that this is a sample of how Ramit uses AI to scale results.`;

      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(result.text || "I couldn't generate a strategy right now. Please try again.");
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the AI. This might be due to API limits or network issues.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12">
      <div className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles size={120} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-black text-white rounded-lg">
              <Sparkles size={20} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">AI Strategy Brainstormer</h3>
          </div>
          
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
            Test Ramit's AI integration. Enter your business niche or a marketing challenge, and get a data-driven CRO or growth tip instantly.
          </p>

          <form onSubmit={generateStrategy} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Luxury Skincare, SaaS Onboarding..."
              className="flex-1 px-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              disabled={loading}
            />
            <button 
              type="submit"
              disabled={loading || !input.trim()}
              className="px-8 py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
              {loading ? 'Thinking...' : 'Get Idea'}
            </button>
          </form>

          {error && <p className="mt-4 text-red-500 text-sm font-medium">{error}</p>}

          {response && (
            <ScrollReveal className="mt-8 p-6 bg-gray-50/80 rounded-2xl border border-gray-100 shadow-inner">
              <div className="prose prose-sm text-gray-700 max-w-none">
                <div dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br/>') }} />
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Standard Components ---

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div 
        className="relative z-10 bg-white rounded-[2.5rem] p-8 sm:p-12 max-w-lg w-full shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border border-gray-100 animate-in fade-in zoom-in duration-300"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={32} className="text-black" />
          </div>
          <h3 className="text-3xl font-bold mb-2 tracking-tight">Let's Connect</h3>
          <p className="text-gray-500">I'm currently exploring performance marketing & CRO roles.</p>
        </div>

        <div className="flex flex-col gap-4">
          <a 
            href="mailto:ramitmehta4@gmail.com" 
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-black text-white rounded-2xl font-bold transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] shadow-lg group"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
            Email Me
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ramit-mehta-417600233/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold transition-all duration-300 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
          >
            <Linkedin size={20} className="text-[#0077B5] group-hover:scale-110 transition-transform" />
            LinkedIn Profile
          </a>
          
          <a 
            href="tel:+919773505829" 
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold transition-all duration-300 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
          >
            <Phone size={20} className="text-[#25D366] group-hover:scale-110 transition-transform" />
            Call: +91 97735 05829
          </a>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'case-studies', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'case-studies' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100">
      <div 
        className="absolute top-0 left-0 h-[3px] bg-black transition-all duration-150 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className="text-2xl font-extrabold tracking-tighter hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          RM<span className="text-gray-400 font-light text-xl">.</span>
        </a>
        
        <div className="hidden md:flex space-x-10 text-[13px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`transition-all duration-300 relative py-1 ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {link.name}
                {isActive && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black rounded-full" />}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:block px-5 py-2.5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
          >
            Hire Me
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 py-6 px-8 flex flex-col space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-2xl font-bold tracking-tight transition-colors ${activeSection === link.id ? 'text-black' : 'text-gray-400'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, description, achievements, gradient, icon, link }) => {
  const CardContent = (
    <div className={`p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 h-full glass-card border-none flex flex-col`}>
      <div className="flex items-start justify-between mb-8">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-black/5`}>
          {icon}
        </div>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] py-1 px-3 bg-gray-100 text-gray-500 rounded-full">{period}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1 flex items-center gap-2 text-gray-900 group-hover:text-black transition-colors">
          {title}
          {link && <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />}
        </h3>
        <p className="text-sm font-semibold text-gray-500 mb-6">{company}</p>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed line-clamp-3">{description}</p>
        <div className="space-y-3">
          {achievements.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 size={14} className="text-gray-300 shrink-0 mt-0.5" />
              <span className="text-xs text-gray-500 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-2 transition-transform duration-500 h-full group">
        {CardContent}
      </a>
    );
  }

  return (
    <div className="hover:-translate-y-2 transition-transform duration-500 h-full group">
      {CardContent}
    </div>
  );
};

const CaseStudy: React.FC<CaseStudyProps> = ({ header, challenge, approach, execution, results, learnings, tools, projects, gradient, icon }) => (
  <ScrollReveal className="mb-20 last:mb-0">
    <div className={`rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl bg-white group/cs`}>
      <div className={`p-10 md:p-16 bg-gradient-to-br ${gradient} text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover/cs:scale-110 transition-transform duration-700">
            {icon}
        </div>
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            <Globe size={14} /> Case Study
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">{header}</h3>
        </div>
      </div>
      
      <div className="p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-12">
          <section>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gray-200"></span> The Challenge
            </h4>
            <p className="text-gray-900 leading-relaxed text-xl font-medium">{challenge}</p>
          </section>
          
          {approach && (
            <section>
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gray-200"></span> Strategic Approach
              </h4>
              <p className="text-gray-600 leading-relaxed">{approach}</p>
            </section>
          )}

          {projects && (
            <section>
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-gray-200"></span> Key Artifacts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((p, i) => {
                  const isObject = typeof p === 'object' && p !== null;
                  const name = isObject ? (p as any).name : p;
                  const url = isObject ? (p as any).url : null;

                  return (
                    <a 
                        key={i} 
                        href={url || '#'} 
                        target={url ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`p-5 rounded-2xl border border-gray-100 flex items-center justify-between transition-all hover:bg-gray-50 hover:border-gray-200 ${!url && 'pointer-events-none opacity-80'}`}
                    >
                      <span className="text-sm font-bold text-gray-800">{name}</span>
                      {url && <ExternalLink size={16} className="text-gray-400" />}
                    </a>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        <div className="lg:col-span-5 space-y-10">
          <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-400 mb-8">Performance Metrics</h4>
            <div className="space-y-8">
              {results.map((res, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-xl shadow-sm">
                    <TrendingUp size={18} className="text-green-500" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-gray-900 block tracking-tighter leading-none mb-1">{res.split(' ')[0]}</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{res.split(' ').slice(1).join(' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {tools && (
            <div>
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-gray-400 mb-6">Stack & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-gray-100 text-gray-700 text-xs font-bold rounded-xl shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const TimelineItem = ({ year, title, description, isRight }: { year: string; title: string; description: string; isRight: boolean }) => (
  <ScrollReveal className={`relative flex items-center justify-between mb-16 w-full ${isRight ? 'flex-row-reverse' : ''}`}>
    <div className="hidden md:block w-5/12"></div>
    <div className="z-20 flex items-center justify-center w-12 h-12 bg-white border border-gray-100 rounded-full shrink-0 shadow-lg">
      <div className="w-4 h-4 bg-black rounded-full"></div>
    </div>
    <div className={`w-full md:w-5/12 p-8 glass-card rounded-[2rem] shadow-sm ${isRight ? 'md:text-right' : 'md:text-left'}`}>
      <span className="text-[10px] font-extrabold text-gray-400 tracking-[0.3em] uppercase mb-2 block">{year}</span>
      <h4 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed font-medium">{description}</p>
    </div>
  </ScrollReveal>
);

// --- Main App ---

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.pageYOffset > 600);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-transparent">
      <Navbar />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-24 px-6 overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-100 rounded-full text-[10px] font-extrabold tracking-[0.2em] text-gray-500 mb-8 uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Available for Hires
              </div>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[0.95]">
                Growth through <span className="gradient-text italic">Precision.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-xl leading-tight font-medium">
                Digital Marketing Generalist specializing in <span className="text-black underline underline-offset-4 decoration-gray-200">CRO</span>, <span className="text-black underline underline-offset-4 decoration-gray-200">E-commerce</span>, and <span className="text-black underline underline-offset-4 decoration-gray-200">AI Automation</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-10 py-5 bg-black text-white rounded-full font-bold text-sm transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl shadow-black/10 active:scale-95"
                >
                  Get in Touch
                </button>
                <button 
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-white border border-gray-200 text-gray-900 rounded-full font-bold text-sm transition-all duration-300 hover:border-black hover:scale-105 shadow-sm active:scale-95"
                >
                  View My Work
                </button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="relative flex justify-center lg:justify-end">
              <div className="relative group animate-float">
                <div className="w-72 h-96 md:w-96 md:h-[560px] bg-gray-100 rounded-[3rem] shadow-2xl overflow-hidden border-[12px] border-white transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] relative">
                  <img 
                    src="https://image2url.com/r2/default/images/1769626955219-0d15c646-45d9-413f-bd7e-3d58ca53187c.png" 
                    alt="Ramit Mehta Portrait" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                
                <div className="absolute -bottom-10 -left-6 md:-left-16 p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-3xl max-w-[240px] border border-white transform -rotate-3 transition-transform hover:rotate-0 z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 bg-green-50 text-green-600 rounded-xl">
                      <TrendingUp size={24} />
                    </div>
                    <span className="text-4xl font-black text-gray-900 tracking-tighter">50%</span>
                  </div>
                  <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] leading-relaxed">Peak Conversion Rate Lift</p>
                </div>

                <div className="absolute -top-12 -right-6 w-24 h-24 bg-white/50 backdrop-blur-md rounded-full border border-white flex items-center justify-center -z-10 animate-bounce delay-700">
                  <Sparkles size={32} className="text-gray-200" />
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal className="mt-24">
            <AIMarketingAssistant />
          </ScrollReveal>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
             <div className="text-[10px] font-extrabold text-gray-400 tracking-[0.4em] uppercase mb-4">Evolution</div>
            <h2 className="text-5xl font-black tracking-tight mb-6">The Journey</h2>
            <p className="text-gray-500 max-w-md mx-auto">From managing massive Indian marketplaces to mastering high-stakes CRO strategies.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-200 hidden md:block"></div>
            <TimelineItem year="2022" title="Marketplace Native" description="Managed full-scale operations for Amazon, Flipkart, and Meesho listings." isRight={false} />
            <TimelineItem year="2023" title="Strategic Shift" description="Mastered technical Digital Marketing at Upgrad, focusing on SEM & Analytics." isRight={true} />
            <TimelineItem year="2024" title="International Growth" description="Scaled organic automotive marketplace operations for Cash24 in the UAE." isRight={false} />
            <TimelineItem year="2025" title="CRO Specialist" description="Driving double-digit conversions for leading Indian fashion conglomerates." isRight={true} />
            <TimelineItem year="Future" title="AI Marketing Lead" description="Integrating LLMs and automation to build the next generation of growth loops." isRight={false} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <div className="text-[10px] font-extrabold text-gray-400 tracking-[0.4em] uppercase mb-4">Track Record</div>
              <h2 className="text-5xl font-black tracking-tight text-gray-900 leading-none">Professional Impact</h2>
            </div>
            <div className="flex gap-4">
               <a 
                href="https://www.linkedin.com/in/ramit-mehta-417600233/" 
                target="_blank" 
                className="p-3 bg-white border border-gray-100 rounded-2xl hover:border-black transition-colors"
               >
                <Linkedin size={24} />
               </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExperienceCard 
              title="CRO Specialist" company="Aditya Birla Fashion / Pantaloons" period="2025" icon={<TrendingUp size={28} />}
              description="Leading A/B testing and user research to optimize purchase funnels for major fashion retail apps."
              achievements={["20-50% conversion uplift", "End-to-end experiment ownership", "Adobe Analytics & Figma workflows"]}
              gradient="from-slate-700 to-slate-900"
              link="https://docs.google.com/presentation/d/19HJoeY1kJnaQCtohBQGWjbLTtQfOlOx4_g52JF7FHiU/edit?slide=id.p"
            />
            <ExperienceCard 
              title="Growth Intern" company="Cash24 (UAE)" period="2024" icon={<Globe size={28} />}
              description="Architected organic growth strategy for the UAE's emerging pre-owned car marketplace."
              achievements={["Marketplace SEO lead", "Product roadmap contribution", "Competitor gap analysis"]}
              gradient="from-blue-700 to-blue-900"
            />
            <ExperienceCard 
              title="E-commerce Lead" company="Multi-Platform" period="2022" icon={<ShoppingCart size={28} />}
              description="Managed high-volume listings and performance ads across India's largest e-commerce ecosystems."
              achievements={["Amazon Ads specialist", "Inventory management", "Platform compliance lead"]}
              gradient="from-zinc-700 to-zinc-900"
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-[10px] font-extrabold text-gray-400 tracking-[0.4em] uppercase mb-4">Portfolios</div>
            <h2 className="text-5xl font-black tracking-tight mb-6">Deep Dives</h2>
            <p className="text-gray-500 max-w-lg mx-auto font-medium">Quantifiable results achieved through systematic testing and marketplace mastery.</p>
          </div>

          <CaseStudy 
            id="cro" header="Driving 50% Peak Uplift in Fashion CRO" icon={<BarChart size={32} />}
            gradient="from-gray-900 via-slate-800 to-slate-900"
            challenge="Identifying high-dropoff points in the user journey for Pantaloons and implementing data-backed UI fixes."
            approach="Used hotjar heatmaps and Adobe Analytics to spot friction in the checkout process, followed by rapid A/B prototyping in Figma."
            results={["50% Peak Conversion", "25% Average Lift", "12+ Live Tests"]}
            tools={["Convert", "Adobe Analytics", "GA4", "ContentSquare", "Figma"]}
            projects={[{ name: "Strategy & Case Study Deck", url: "https://docs.google.com/presentation/d/19HJoeY1kJnaQCtohBQGWjbLTtQfOlOx4_g52JF7FHiU/edit?usp=sharing" }]}
          />

          <CaseStudy 
            id="foundation" header="Digital Foundation & Technical Audits" icon={<Award size={32} />}
            gradient="from-zinc-800 to-black"
            challenge="Mastering the full digital marketing stack—from SEM to SEO technical audits and WordPress development."
            projects={[
              { name: "SEO Technical Audits", url: "https://docs.google.com/presentation/d/1tElIfrE1fAtE0LpSd1zVmexyrp_3iJH3/edit?usp=sharing" },
              { name: "Google Ads (SEM) Strategy", url: "https://drive.google.com/file/d/1fRT3KOvt7VwKdWJ2_HU2owecqre1Qnkd/view?usp=sharing" }, 
              { name: "WordPress Engineering", url: "https://docs.google.com/presentation/d/1yudb3M0lHcnQbFl8SGhrvLdiJ8luZUfC/edit?usp=sharing" }
            ]}
            results={["100% Course Success", "Technical Mastery", "Certified Growth Lead"]}
            tools={["SEO Spider", "Google Search Console", "WordPress", "SEMRush"]}
          />
        </div>
      </section>

      {/* Skills Arsenal */}
      <section id="skills" className="py-32 px-6 bg-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tight">The Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal className="glass-card p-10 rounded-[2.5rem] border-none shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
                <CheckCircle2 className="text-green-600" size={24} />
              </div>
              <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-green-600 mb-6">Mastered</h4>
              <ul className="space-y-5 font-bold text-gray-800 text-lg">
                <li>CRO Strategy</li>
                <li>E-commerce Ops</li>
                <li>A/B Testing</li>
                <li>Figma Design</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="glass-card p-10 rounded-[2.5rem] border-none shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <BarChart className="text-blue-600" size={24} />
              </div>
              <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600 mb-6">Core Competencies</h4>
              <ul className="space-y-5 font-bold text-gray-800 text-lg">
                <li>SEO / SEM</li>
                <li>Adobe Analytics</li>
                <li>Performance Marketing</li>
                <li>Data Visualization</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="glass-card p-10 rounded-[2.5rem] border-none shadow-sm hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-8">
                <Sparkles className="text-purple-600" size={24} />
              </div>
              <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-purple-600 mb-6">Current Focus</h4>
              <ul className="space-y-5 font-bold text-gray-800 text-lg">
                <li>AI in Marketing</li>
                <li>Prompt Engineering</li>
                <li>Marketing Automation</li>
                <li>Vibe Coding</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-6xl font-black mb-6 tracking-tight">Ready to Scale?</h2>
            <p className="text-gray-500 text-xl mb-16 font-medium max-w-lg mx-auto">Open for roles where I can drive measurable growth using data and creativity.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a 
                href="mailto:ramitmehta4@gmail.com" 
                className="group flex flex-col items-center gap-6 p-10 rounded-[2.5rem] border border-gray-100 hover:border-black transition-all hover:bg-black hover:text-white"
              >
                <Mail size={32} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm tracking-widest uppercase">Email Me</span>
              </a>
              <a 
                href="tel:+919773505829" 
                className="group flex flex-col items-center gap-6 p-10 rounded-[2.5rem] border border-gray-100 hover:border-black transition-all hover:bg-black hover:text-white"
              >
                <Phone size={32} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm tracking-widest uppercase">Call Me</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ramit-mehta-417600233/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-6 p-10 rounded-[2.5rem] border border-gray-100 hover:border-black transition-all hover:bg-black hover:text-white"
              >
                <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm tracking-widest uppercase">LinkedIn</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 p-5 bg-black text-white rounded-full shadow-2xl transition-all duration-500 z-50 hover:bg-gray-800 hover:scale-110 active:scale-90 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <footer className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black tracking-tighter">RAMIT MEHTA<span className="text-gray-300 font-light">.</span></div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">
            &copy; 2025 Digital Marketing & CRO Portfolio.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}