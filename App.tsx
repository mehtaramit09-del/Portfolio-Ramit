
import React, { useState, useEffect } from 'react';
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
  Globe,
  MousePointer2,
  Share2
} from 'lucide-react';
import { ExperienceCardProps, CaseStudyProps, ProjectItem } from './types';
import { ScrollReveal } from './components/ScrollReveal';

// --- Data Constants ---

const ALL_PROJECTS = [
  {
    category: "Conversion Rate Optimization",
    items: [
      { name: "CRO Strategy & Case Study Deck", url: "https://docs.google.com/presentation/d/19HJoeY1kJnaQCtohBQGWjbLTtQfOlOx4_g52JF7FHiU/edit?usp=sharing" }
    ]
  },
  {
    category: "Digital Marketing Foundation",
    items: [
      { name: "WordPress Blog Creation", url: "https://docs.google.com/presentation/d/1yudb3M0lHcnQbFl8SGhrvLdiJ8luZUfC/edit?usp=sharing&ouid=105681893837280252861&rtpof=true&sd=true" }, 
      { name: "Google Ads (SEM) Campaign", url: "https://drive.google.com/file/d/1fRT3KOvt7VwKdWJ2_HU2owecqre1Qnkd/view?usp=sharing" }, 
      { name: "SEO Technical Audits", url: "https://docs.google.com/presentation/d/1tElIfrE1fAtE0LpSd1zVmexyrp_3iJH3/edit?usp=sharing&ouid=105681893837280252861&rtpof=true&sd=true" },
      { name: "Social Media Marketing: Facebook Campaign", url: "https://drive.google.com/file/d/1mDwjOXADX5ttKxYxT0SH2yjIQjFNWUab/view?usp=sharing" }
    ]
  }
];

// --- Components ---

const ProjectsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative z-10 bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 max-w-2xl w-full shadow-2xl border border-gray-100 transform transition-all duration-300 animate-in fade-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="mb-10">
          <h3 className="text-3xl font-bold mb-2 tracking-tight">Key Projects Gallery</h3>
          <p className="text-gray-500">A consolidated view of my strategic marketing implementations.</p>
        </div>

        <div className="space-y-10 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
          {ALL_PROJECTS.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 px-1">{group.category}</h4>
              <div className="grid grid-cols-1 gap-3">
                {group.items.map((project, pIdx) => (
                  <a 
                    key={pIdx} 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-black hover:bg-white hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-black transition-colors">
                        {group.category.includes("CRO") ? <MousePointer2 size={18} /> : group.category.includes("SEO") ? <Globe size={18} /> : <Share2 size={18} />}
                      </div>
                      <span className="font-bold text-gray-800 text-sm sm:text-base">{project.name}</span>
                    </div>
                    <ExternalLink size={18} className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
          <button 
            onClick={onClose}
            className="px-8 py-3 text-sm font-bold text-gray-400 hover:text-black transition-colors"
          >
            Close Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative z-10 bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 max-w-lg w-full shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border border-gray-100 transform transition-all duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2 tracking-tight">Let's Connect</h3>
          <p className="text-gray-500 text-sm">Open for performance marketing & CRO roles</p>
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
            href="tel:+919773505829" 
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold transition-all duration-300 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
          >
            <Phone size={20} className="text-green-600 group-hover:scale-110 transition-transform" />
            +91 97735 05829
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ramit-mehta-417600233/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-bold transition-all duration-300 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
          >
            <Linkedin size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
            LinkedIn
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
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div 
        className="absolute top-0 left-0 h-0.5 bg-black transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
        >
          Ramit Mehta
        </a>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const commonClasses = `transition-all duration-300 relative py-1 ${
              isActive ? 'text-black cursor-default' : 'text-gray-400 hover:text-gray-600'
            }`;

            if (isActive) {
              return (
                <span key={link.id} className={commonClasses}>
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full" />
                </span>
              );
            }

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={commonClasses}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-lg font-medium transition-colors ${activeSection === link.id ? 'text-black' : 'text-gray-500'}`}
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
    <div className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br ${gradient} text-white`}>
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-white/10 rounded-xl">
          {icon}
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest opacity-80">{period}</span>
      </div>
      <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
        {title}
        {link && <ExternalLink size={16} className="opacity-70" />}
      </h3>
      <p className="text-sm font-medium opacity-90 mb-4">{company}</p>
      <p className="text-sm opacity-80 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {achievements.map((item, idx) => (
          <li key={idx} className="text-xs flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:-translate-y-1 transition-transform h-full">
        {CardContent}
      </a>
    );
  }

  return (
    <div className="hover:-translate-y-1 transition-transform h-full">
      {CardContent}
    </div>
  );
};

const CaseStudy: React.FC<CaseStudyProps> = ({ header, challenge, approach, execution, results, learnings, tools, projects, gradient, icon }) => (
  <ScrollReveal className="mb-16 last:mb-0">
    <div className={`rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white`}>
      <div className={`p-8 md:p-12 bg-gradient-to-br ${gradient} text-white flex flex-col md:flex-row md:items-center justify-between gap-6`}>
        <div className="max-w-2xl">
          <div className="p-3 bg-white/10 w-fit rounded-xl mb-6">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">{header}</h3>
        </div>
      </div>
      
      <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-8">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">The Challenge</h4>
            <p className="text-gray-700 leading-relaxed text-lg">{challenge}</p>
          </div>
          
          {approach && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Approach</h4>
              <p className="text-gray-600 leading-relaxed">{approach}</p>
            </div>
          )}

          {execution && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Execution</h4>
              <p className="text-gray-600 leading-relaxed">{execution}</p>
            </div>
          )}

          {projects && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Key Projects</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((p, i) => {
                  const isObject = typeof p === 'object' && p !== null;
                  const name = isObject ? (p as any).name : p;
                  const url = isObject ? (p as any).url : null;

                  const cardContent = (
                    <div className={`p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm font-medium text-gray-700 h-full flex items-center justify-between transition-all ${url ? 'hover:bg-gray-100 hover:border-gray-300' : ''}`}>
                      <span>{name}</span>
                      {url && <ExternalLink size={14} className="text-gray-400 ml-2" />}
                    </div>
                  );

                  return url ? (
                    <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block no-underline group">
                      {cardContent}
                    </a>
                  ) : <div key={i}>{cardContent}</div>;
                })}
              </div>
            </div>
          )}
          
          {learnings && (
            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-500">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Key Learnings</h4>
              <p className="text-gray-600 italic leading-relaxed">{learnings}</p>
            </div>
          )}
        </div>

        <div className="md:col-span-5 space-y-8">
          <div className="p-8 bg-gray-50 rounded-2xl">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Measurable Results</h4>
            <ul className="space-y-6">
              {results.map((res, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="mt-1 p-1 bg-green-100 text-green-600 rounded-full">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-xl font-bold text-gray-900">{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {tools && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tools & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full">
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
  <ScrollReveal className={`relative flex items-center justify-between mb-12 w-full ${isRight ? 'flex-row-reverse' : ''}`}>
    <div className="hidden md:block w-5/12"></div>
    <div className="z-20 flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-300 rounded-full shrink-0">
      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
    </div>
    <div className={`w-full md:w-5/12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 ${isRight ? 'md:text-right' : 'md:text-left'}`}>
      <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1 block">{year}</span>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </ScrollReveal>
);

// --- Main App ---

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProjects = () => {
    setIsProjectsModalOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-gray-200 bg-white">
      <Navbar />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <ProjectsModal isOpen={isProjectsModalOpen} onClose={() => setIsProjectsModalOpen(false)} />

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold tracking-wide text-gray-600 mb-6 shadow-sm">
              Digital Marketing Generalist
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Exploring the <span className="gradient-text">Intersection</span> of Data, Creativity & Growth
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              From E-commerce to CRO, Social Media to AI Automation—I adapt, learn, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleViewProjects}
                className="px-8 py-4 bg-black text-white rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl text-center shadow-lg shadow-black/10 flex-1 sm:flex-none"
              >
                View Projects
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold transition-all duration-300 ease-in-out hover:border-black hover:scale-105 hover:-translate-y-1 hover:shadow-xl text-center flex-1 sm:flex-none"
              >
                Get in Touch
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-64 h-80 md:w-80 md:h-[480px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                <img 
                  src="https://image2url.com/r2/default/images/1769626955219-0d15c646-45d9-413f-bd7e-3d58ca53187c.png" 
                  alt="Ramit Mehta Portrait" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-4 md:-left-12 p-5 bg-white rounded-2xl shadow-2xl max-w-[200px] border border-gray-50 transform -rotate-3 transition-transform hover:rotate-0 z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 bg-green-100 text-green-600 rounded-lg">
                    <TrendingUp size={20} />
                  </div>
                  <span className="text-3xl font-extrabold text-gray-900 tracking-tighter">50%</span>
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Peak CRO Uplift</p>
              </div>

              <div className="absolute -top-10 -right-6 w-16 h-16 bg-white/50 backdrop-blur-sm rounded-full border border-gray-100 flex items-center justify-center -z-10 animate-bounce">
                <Zap size={24} className="text-gray-300" />
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="flex justify-center mt-20 animate-bounce">
          <ChevronDown className="text-gray-300" />
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The Journey</h2>
            <p className="text-gray-500">A path of continuous learning and adaptation</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            <TimelineItem year="2022" title="E-commerce Mastery" description="Amazon, Flipkart, Meesho management." isRight={false} />
            <TimelineItem year="2023" title="Digital Foundation" description="Upgrad Digital Marketing Course." isRight={true} />
            <TimelineItem year="2024" title="Cars24 Growth Marketing" description="UAE automotive growth strategy." isRight={false} />
            <TimelineItem year="2025" title="CRO Specialist & Troovy" description="Optimization for major brands." isRight={true} />
            <TimelineItem year="Now" title="AI & Automation" description="Vibe coding & marketing automation." isRight={false} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-gray-900">Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <ExperienceCard 
                title="CRO Specialist" company="Various Brands" period="2025" icon={<TrendingUp size={24} />}
                description="Led CRO initiatives for Pantaloons and Aditya Birla Fashion."
                achievements={["20-50% conversion rate uplift", "Competitor Analyses & User Research", "Mastered: Convert, GA4, Adobe Analytics, Figma"]}
                gradient="from-slate-600 to-slate-800"
                link="https://docs.google.com/presentation/d/19HJoeY1kJnaQCtohBQGWjbLTtQfOlOx4_g52JF7FHiU/edit?slide=id.p#slide=id.p"
              />
            </ScrollReveal>
            <ScrollReveal>
              <ExperienceCard 
                title="Influencer Marketing" company="Troovy (FMCG Startup)" period="2025" icon={<Users size={24} />}
                description="Influencer marketing for emerging FMCG brand."
                achievements={["Negotiated partnerships", "Coordinated influencer campaigns"]}
                gradient="from-gray-600 to-gray-800"
              />
            </ScrollReveal>
            <ScrollReveal>
              <ExperienceCard 
                title="Growth Marketing Intern" company="Cars24 (UAE)" period="2024" icon={<Zap size={24} />}
                description="Organic growth strategies for automotive marketplace in Dubai."
                achievements={["Marketplace optimization", "Strategies over paid ads", "Cross-platform management"]}
                gradient="from-neutral-600 to-neutral-800"
              />
            </ScrollReveal>
            <ScrollReveal>
              <ExperienceCard 
                title="E-commerce Specialist" company="Amazon, Flipkart, Meesho" period="2022" icon={<ShoppingCart size={24} />}
                description="End-to-end marketplace management across India's top 3 platforms."
                achievements={["Product listing optimization", "SEO & Platform Compliance", "Ads campaign management"]}
                gradient="from-stone-600 to-stone-800"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Case Studies</h2>
            <p className="text-gray-500">Deep dives into key projects and their impact</p>
          </div>

          <CaseStudy 
            id="cro" header="20-50% Conversions for Indian Brands" icon={<BarChart size={24} />}
            gradient="from-slate-600 to-slate-800"
            challenge="Plateau in e-commerce conversion rates despite high traffic volumes for major fashion brands."
            approach="Quantitative research, competitor analyses, and qualitative feedback + A/B testing."
            results={["20-30% Average Uplift", "50% Peak Performance", "15+ Successful Tests"]}
            tools={["Convert", "GA4", "ContentSquare", "Figma", "Crazy Egg", "Adobe Analytics"]}
            projects={ALL_PROJECTS[0].items}
          />

          <CaseStudy 
            id="ecommerce" header="End-to-End Marketplace Management" icon={<ShoppingCart size={24} />}
            gradient="from-stone-600 to-stone-800"
            challenge="Successfully launch and scale products across Amazon, Flipkart, and Meesho—three distinct platforms with different algorithms."
            execution="Developed comprehensive marketplace strategy covering listing optimization, platform-specific SEO, and local ads management."
            results={["Multi-Platform Scale", "Optimized Listings", "High Ads ROI"]}
            tools={["Amazon Seller Central", "Flipkart Seller Hub", "Helium 10", "Canva", "Google Sheets"]}
          />

          <CaseStudy 
            id="foundation" header="Building Core Skills: Foundation Project" icon={<Award size={24} />}
            gradient="from-gray-600 to-gray-800"
            challenge="Transition into digital marketing by mastering broad disciplines through hands-on practice and technical audits."
            projects={ALL_PROJECTS[1].items}
            results={["6-Month Specialization", "Hands-on Mastery", "Foundation for CRO"]}
            tools={["WordPress", "SEO", "Google Ads", "Facebook Ads", "Analytics"]}
          />
        </div>
      </section>

      {/* Skills Arsenal */}
      <section id="skills" className="py-24 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Skills Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-green-500 mb-6 flex items-center gap-2">Advanced</h4>
              <ul className="space-y-4 font-medium text-gray-700">
                <li>CRO & Competitor Analyses</li>
                <li>E-commerce</li>
                <li>Figma</li>
                <li>GA4</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-6 flex items-center gap-2">Intermediate</h4>
              <ul className="space-y-4 font-medium text-gray-700">
                <li>Social Media</li>
                <li>Influencer Mkt</li>
                <li>SEO / SEM</li>
              </ul>
            </ScrollReveal>
            <ScrollReveal className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-purple-500 mb-6 flex items-center gap-2">Currently Learning</h4>
              <ul className="space-y-4 font-medium text-gray-700">
                <li>AI in Marketing</li>
                <li>Vibe Coding</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-gray-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Let's Connect</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mt-12">
              <a 
                href="mailto:ramitmehta4@gmail.com" 
                className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-black text-white rounded-full font-bold transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-xl shadow-black/10 group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                Email Me
              </a>
              <a 
                href="tel:+919773505829" 
                className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white border border-gray-200 text-gray-900 rounded-full font-bold transition-all duration-300 hover:border-gray-300 hover:scale-105 shadow-sm group"
              >
                <Phone size={20} className="text-green-600 group-hover:scale-110 transition-transform" />
                +91 97735 05829
              </a>
              <a 
                href="https://www.linkedin.com/in/ramit-mehta-417600233/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white border border-gray-200 text-gray-900 rounded-full font-bold transition-all duration-300 hover:border-gray-300 hover:scale-105 shadow-sm group"
              >
                <Linkedin size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-black text-white rounded-full shadow-2xl transition-all duration-300 z-50 hover:bg-gray-800 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <footer className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm font-medium">
            &copy; 2025 Ramit Mehta Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
}
