
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
  Globe,
  MousePointer2,
  Share2,
  BarChart3,
  Activity,
  FileSpreadsheet,
  LayoutGrid,
  Target,
  Figma,
  CheckSquare,
  Database,
  Code2,
  BarChart2,
  LineChart,
  GitCompare,
  Megaphone,
  Search,
  Sparkles,
  Wand2,
  Kanban
} from 'lucide-react';
import { ExperienceCardProps, CaseStudyProps, ProjectItem } from './types';
import { ScrollReveal } from './components/ScrollReveal';

// --- Data Constants ---

const ALL_PROJECTS = [
  {
    category: "Conversion Rate Optimization",
    items: [
      { 
        name: "CRO Max Fashion Audit", 
        description: "Comprehensive e-commerce CRO audit and UX redesign experiments across product pages, mobile purchase flows, and conversion test variants in Figma.",
        url: "https://www.figma.com/design/4JDiKefj6QGrQKaDx3aTyU/Untitled?node-id=0-1&t=XSX9MUutvIuf3b7M-1" 
      },
      { 
        name: "CRO Strategy & Case Study Deck", 
        url: "https://docs.google.com/presentation/d/19HJoeY1kJnaQCtohBQGWjbLTtQfOlOx4_g52JF7FHiU/edit?usp=sharing" 
      }
    ]
  },
  {
    category: "Data & Business Analytics",
    items: [
      { name: "End-to-End Business Analytics Case Study", url: "https://github.com/ramitmehta4/mock-business-analytics/tree/main/Project%20portfolio" }
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative z-10 bg-white rounded-2xl sm:rounded-[3rem] p-4 sm:p-12 max-w-2xl w-full shadow-2xl border border-gray-100 transform transition-all duration-300 animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="mb-4 sm:mb-10 pr-8">
          <h3 className="text-xl sm:text-3xl font-bold mb-1 tracking-tight">Key Projects Gallery</h3>
          <p className="text-xs sm:text-sm text-gray-500">A consolidated view of my strategic marketing implementations.</p>
        </div>

        <div className="space-y-6 sm:space-y-10 overflow-y-auto pr-1 sm:pr-4 custom-scrollbar">
          {ALL_PROJECTS.map((group, idx) => (
            <div key={idx} className="space-y-3 sm:space-y-4">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 px-1">{group.category}</h4>
              <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                {group.items.map((project, pIdx) => (
                  <a 
                    key={pIdx} 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 sm:p-5 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-black hover:bg-white hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-400 group-hover:text-black transition-colors shrink-0">
                        {project.url.includes("figma") ? <Figma size={16} className="sm:w-[18px] sm:h-[18px]" /> : group.category.includes("Data") || group.category.includes("Analytics") ? <BarChart size={16} className="sm:w-[18px] sm:h-[18px]" /> : group.category.includes("CRO") ? <MousePointer2 size={16} className="sm:w-[18px] sm:h-[18px]" /> : group.category.includes("SEO") ? <Globe size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Share2 size={16} className="sm:w-[18px] sm:h-[18px]" />}
                      </div>
                      <div className="text-left">
                        <span className="font-bold text-gray-800 text-xs sm:text-base block">{project.name}</span>
                        {project.description && (
                          <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">{project.description}</p>
                        )}
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all shrink-0 ml-2 sm:ml-3 sm:w-[18px] sm:h-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 sm:mt-12 sm:pt-8 border-t border-gray-100 flex justify-center">
          <button 
            onClick={onClose}
            className="px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm font-bold text-gray-400 hover:text-black transition-colors cursor-pointer min-h-[40px]"
          >
            Close Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

const CroProjectsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative z-10 bg-white rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-10 max-w-xl w-full shadow-2xl border border-gray-100 transform transition-all duration-300 animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100 cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="mb-4 sm:mb-8 pr-8">
          <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-1">CRO Projects</h3>
          <p className="text-xs sm:text-sm text-gray-500">Selected conversion rate optimization audits and presentations.</p>
        </div>

        <div className="space-y-3 sm:space-y-4 overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
          {/* Entry: CRO Max Fashion Audit (at top) */}
          <a
            href="https://www.figma.com/design/4JDiKefj6QGrQKaDx3aTyU/Untitled?node-id=0-1&t=XSX9MUutvIuf3b7M-1"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3.5 sm:p-5 bg-gray-50 hover:bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-[#0D99FF] hover:shadow-lg transition-all group"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="space-y-1.5 sm:space-y-2 flex-1 text-left">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-blue-100 text-[#0066CC]">
                    Independent CRO audit
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 italic mt-0.5 sm:mt-1">
                    Independent work, separate from my OptiPhoenix role.
                  </p>
                </div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-[#0D99FF] transition-colors flex items-center gap-1.5 sm:gap-2">
                  <span>CRO Max Fashion Audit</span>
                  <Figma size={14} className="text-[#0D99FF] sm:w-4 sm:h-4" />
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                  Comprehensive e-commerce CRO audit and UX redesign experiments across product pages, mobile purchase flows, and conversion test variants in Figma.
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#0D99FF] shrink-0 transition-colors">
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
            </div>
          </a>

          {/* Entry: Existing PPT project */}
          <a
            href="https://docs.google.com/presentation/d/19HJoeY1kJnaQCtohBQGWjbLTtQfOlOx4_g52JF7FHiU/edit?slide=id.p#slide=id.p"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3.5 sm:p-5 bg-gray-50 hover:bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all group"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="space-y-1.5 sm:space-y-2 flex-1 text-left">
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-slate-200 text-slate-800">
                    Independent project
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 italic mt-0.5 sm:mt-1">
                    Independent work, separate from my OptiPhoenix role.
                  </p>
                </div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-black transition-colors">
                  CRO Strategy & Case Study Deck
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                  Strategic CRO deck covering research hypotheses, test design, and uplift frameworks for top fashion brands.
                </p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-black shrink-0 transition-colors">
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
            </div>
          </a>
        </div>

        <div className="mt-4 pt-3 sm:mt-8 sm:pt-6 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-black transition-colors cursor-pointer min-h-[40px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const FigmaFeaturedBanner = () => {
  return (
    <section className="px-4 md:px-6 py-2 md:py-4 max-w-6xl mx-auto -mt-3 md:-mt-6 mb-6 md:mb-12">
      <ScrollReveal>
        <div className="relative group">
          {/* Figma-style frame label tab at top-left */}
          <div className="absolute -top-2.5 sm:-top-3 left-4 sm:left-6 z-20 flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 bg-[#0D99FF] text-white text-[10px] sm:text-[11px] font-semibold tracking-wide rounded shadow-xs">
            <Figma size={11} className="shrink-0 sm:w-3 sm:h-3" />
            <span>CRO Max Fashion Audit</span>
          </div>

          {/* Main frame container */}
          <div className="relative rounded-xl md:rounded-2xl border border-[#0D99FF]/40 bg-[#fafbfc] p-4 sm:p-8 md:p-10 shadow-[0_4px_25px_-5px_rgba(13,153,255,0.12)] hover:shadow-[0_8px_30px_-5px_rgba(13,153,255,0.22)] hover:border-[#0D99FF] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden">
            
            {/* Subtle Figma canvas dot grid background */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            />

            {/* Corner handles (Figma frame selection handles) */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border border-[#0D99FF] rounded-[1px] shadow-xs" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border border-[#0D99FF] rounded-[1px] shadow-xs" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border border-[#0D99FF] rounded-[1px] shadow-xs" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-[#0D99FF] rounded-[1px] shadow-xs" />

            {/* Content row */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
              <div className="space-y-1.5 sm:space-y-2 max-w-2xl text-left">
                <h3 className="text-lg sm:text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                  CRO Max Fashion Audit
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-snug line-clamp-2 md:line-clamp-none">
                  Comprehensive UX audit: heuristic analysis, product page redesigns, and high-impact conversion experiments
                </p>
              </div>

              <div className="flex items-center shrink-0">
                <a
                  href="https://www.figma.com/design/4JDiKefj6QGrQKaDx3aTyU/Untitled?node-id=0-1&t=XSX9MUutvIuf3b7M-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3.5 bg-black hover:bg-[#0D99FF] text-white font-semibold text-xs md:text-sm rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group/btn min-h-[40px]"
                >
                  <Figma size={14} className="text-[#0D99FF] group-hover/btn:text-white transition-colors sm:w-4 sm:h-4" />
                  <span>View in Figma</span>
                  <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 transition-transform sm:w-[15px] sm:h-[15px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className="relative z-10 bg-white rounded-2xl sm:rounded-[3rem] p-4 sm:p-12 max-w-lg w-full shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] border border-gray-100 transform transition-all duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100 min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight">Let's Connect</h3>
          <p className="text-gray-500 text-xs sm:text-sm">Open for performance marketing & CRO roles</p>
        </div>

        <div className="flex flex-col gap-2.5 sm:gap-4">
          <a 
            href="mailto:ramitmehta4@gmail.com" 
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3 sm:px-8 sm:py-5 bg-black text-white rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] shadow-lg group min-h-[44px]"
          >
            <Mail size={18} className="group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
            Email Me
          </a>
          
          <a 
            href="tel:+919773505829" 
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3 sm:px-8 sm:py-5 bg-white border border-gray-200 text-gray-900 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base transition-all duration-300 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] shadow-sm group min-h-[44px]"
          >
            <Phone size={18} className="text-green-600 group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
            +91 97735 05829
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ramit-mehta-417600233/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3 sm:px-8 sm:py-5 bg-white border border-gray-200 text-gray-900 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-base transition-all duration-300 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] shadow-sm group min-h-[44px]"
          >
            <Linkedin size={18} className="text-blue-600 group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
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
      const sections = ['about', 'journey', 'experience', 'case-studies', 'skills', 'contact'];
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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  title, 
  company, 
  period, 
  description, 
  achievements, 
  gradient, 
  icon, 
  link,
  onCardClick,
  onCompanyClick
}) => {
  const CardContent = (
    <div className={`p-4 sm:p-6 md:p-8 rounded-[14px] md:rounded-2xl shadow-sm md:shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br ${gradient} text-white flex flex-col justify-between`}>
      <div>
        <div className="flex items-start justify-between mb-3 md:mb-6">
          <div className="p-2 md:p-3 bg-white/10 rounded-lg md:rounded-xl">
            {icon}
          </div>
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest opacity-80">{period}</span>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 flex items-center gap-1.5 md:gap-2">
          {title}
          {(link || onCardClick) && <ExternalLink size={14} className="opacity-70 shrink-0 md:w-4 md:h-4" />}
        </h3>
        {onCompanyClick ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onCompanyClick();
            }}
            className="text-xs md:text-sm font-semibold opacity-95 hover:opacity-100 mb-2 md:mb-4 inline-flex items-center gap-1.5 md:gap-2 underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all text-left cursor-pointer group/co min-h-[40px]"
            title="Click to view CRO projects"
          >
            <span>{company}</span>
            <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm group-hover/co:bg-white group-hover/co:text-black transition-colors">
              View Projects
            </span>
          </button>
        ) : (
          <p className="text-xs md:text-sm font-medium opacity-90 mb-2 md:mb-4">{company}</p>
        )}
        <p className="text-xs md:text-sm opacity-80 mb-3 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-none">{description}</p>
      </div>
      <ul className="space-y-1.5 md:space-y-2 mt-auto">
        {achievements.slice(0, 3).map((item, idx) => (
          <li key={idx} className="text-[12px] md:text-xs flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (onCardClick) {
    return (
      <div 
        onClick={onCardClick} 
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onCardClick();
          }
        }}
        className="block hover:-translate-y-1 transition-transform h-full cursor-pointer text-left w-full"
      >
        {CardContent}
      </div>
    );
  }

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

const CaseStudy: React.FC<CaseStudyProps> = ({ 
  id,
  header, 
  summary,
  note,
  period, 
  link, 
  challenge, 
  approach, 
  execution, 
  exampleTests,
  results, 
  resultsFootnote,
  learnings, 
  tools, 
  projects, 
  gradient, 
  icon,
  isMobileOpen = false,
  onToggleMobile
}) => {
  // State for which example test dropdowns are open inside the expanded view
  const [openTests, setOpenTests] = useState<{ [key: number]: boolean }>({});

  const toggleTest = (idx: number) => {
    setOpenTests(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const displaySummary = summary || challenge;

  return (
  <ScrollReveal className="mb-6 md:mb-16 last:mb-0">
    <div className={`rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 shadow-xs md:shadow-sm bg-white`}>
      <div className={`p-4 sm:p-8 md:p-12 bg-gradient-to-br ${gradient} text-white flex flex-col md:flex-row md:items-center justify-between gap-3.5 md:gap-6`}>
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 md:mb-6">
            <div className="p-2 md:p-3 bg-white/10 w-fit rounded-lg sm:rounded-xl">
              {icon}
            </div>
            {period && (
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/15 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase border border-white/20">
                {period}
              </span>
            )}
          </div>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight break-words">{header}</h3>
          {note && (
            <p className="mt-1 md:mt-2 text-[11px] sm:text-xs text-white/75 font-normal tracking-wide italic">
              {note}
            </p>
          )}

          {/* One-line summary shown on mobile */}
          <p className="mt-2 text-xs text-white/90 leading-relaxed font-normal md:hidden line-clamp-2">
            {displaySummary}
          </p>

          {/* Mobile "View details" button */}
          <div className="mt-2.5 md:hidden">
            <button
              type="button"
              onClick={onToggleMobile}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-gray-900 rounded-full font-bold text-xs hover:bg-gray-100 transition-all shadow-md active:scale-95 min-h-[40px] select-none cursor-pointer"
            >
              <span>{isMobileOpen ? 'Hide details' : 'View details'}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isMobileOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-lg shrink-0 group self-start md:self-center min-h-[40px]"
          >
            <span>View on GitHub</span>
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform sm:w-4 sm:h-4" />
          </a>
        )}
      </div>
      
      {/* Full content: expanded on mobile when isMobileOpen is true, always visible on desktop */}
      <div className={`${isMobileOpen ? 'block' : 'hidden'} md:grid p-4 sm:p-8 md:p-12 grid-cols-1 md:grid-cols-12 gap-5 md:gap-12 transition-all duration-300`}>
        <div className="md:col-span-7 space-y-5 md:space-y-8">
          <div>
            <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3">The Challenge</h4>
            <p className="text-gray-700 leading-relaxed text-[13px] md:text-lg">{challenge}</p>
          </div>
          
          {approach && (
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3">Approach</h4>
              <p className="text-gray-600 leading-relaxed text-[13px] md:text-base">{approach}</p>
            </div>
          )}

          {exampleTests && (
            <div>
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">Three Example Tests</h4>
                <span className="text-[10px] md:text-[11px] text-gray-400 font-medium">Click to expand</span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 mb-3">{exampleTests.intro}</p>
              
              <div className="space-y-2 sm:space-y-2.5">
                {exampleTests.items.map((test, idx) => {
                  const isOpen = !!openTests[idx];
                  return (
                    <div 
                      key={idx} 
                      className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen 
                          ? 'bg-gray-50/90 border-gray-300 shadow-2xs' 
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                      }`}
                    >
                      {/* Accordion / Dropdown Header Button */}
                      <button
                        type="button"
                        onClick={() => toggleTest(idx)}
                        aria-expanded={isOpen}
                        className="w-full text-left p-3 sm:p-4.5 flex items-center justify-between gap-2.5 transition-colors select-none focus:outline-none min-h-[44px]"
                      >
                        <div className="flex-1 min-w-0 pr-1">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="font-bold text-gray-900 text-xs sm:text-sm">
                              {test.title}
                            </span>
                            <span className={`text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded border shrink-0 ${
                              test.badge === 'Inconclusive'
                                ? 'text-amber-800 bg-amber-50 border-amber-200/80'
                                : 'text-emerald-800 bg-emerald-50 border-emerald-200/60'
                            }`}>
                              {test.badge || 'Win'}
                            </span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-gray-500 truncate mt-0.5 font-normal">
                            {test.context}
                          </p>
                        </div>
                        
                        <div className={`p-1 sm:p-1.5 rounded-full text-gray-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-gray-200/80 text-gray-900' : 'bg-gray-100 group-hover:bg-gray-200'}`}>
                          <ChevronDown size={14} className="sm:w-4 sm:h-4" />
                        </div>
                      </button>

                      {/* Dropdown Content */}
                      {isOpen && (
                        <div className="px-3 pb-3 sm:px-4.5 sm:pb-4.5 pt-0 border-t border-gray-200/70 text-[12px] sm:text-xs text-gray-700 space-y-2 mt-1 bg-white/70">
                          <div className="pt-2 text-[10px] sm:text-[11px] text-gray-500 font-medium pb-0.5">
                            <span className="text-gray-400 uppercase tracking-wider text-[9px] sm:text-[10px] block font-bold mb-0.5">Test Context</span>
                            {test.context}
                          </div>
                          
                          <div className="space-y-1.5 leading-relaxed bg-gray-50/80 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-gray-100">
                            <p><span className="font-semibold text-gray-900">Problem:</span> {test.problem}</p>
                            <p><span className="font-semibold text-gray-900">Change:</span> {test.change}</p>
                            <p className="font-medium text-gray-900 pt-0.5">
                              <span className={`font-bold ${test.badge === 'Inconclusive' ? 'text-amber-700' : 'text-emerald-700'}`}>Result:</span> {test.result}
                            </p>
                            {test.learning && (
                              <p className="text-[10px] sm:text-[11px] text-gray-500 italic pt-1 border-t border-gray-200/60 mt-1">
                                <span className="font-medium not-italic text-gray-600">Learning:</span> {test.learning}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {execution && (
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3">Execution</h4>
              <p className="text-gray-600 leading-relaxed text-[13px] md:text-base">{execution}</p>
            </div>
          )}

          {projects && (
            <div>
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 md:mb-3">Key Projects</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                {projects.map((p, i) => {
                  const isObject = typeof p === 'object' && p !== null;
                  const name = isObject ? (p as any).name : p;
                  const url = isObject ? (p as any).url : null;
                  const description = isObject ? (p as any).description : null;

                  const cardContent = (
                    <div className={`p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 text-[13px] md:text-sm font-medium text-gray-700 h-full flex items-center justify-between transition-all ${url ? 'hover:bg-gray-100 hover:border-gray-300' : ''}`}>
                      <div className="flex-1 pr-2">
                        <span className="font-semibold text-gray-900 block">{name}</span>
                        {description && (
                          <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 font-normal leading-relaxed line-clamp-2">{description}</p>
                        )}
                      </div>
                      {url && <ExternalLink size={14} className="text-gray-400 ml-2 shrink-0 group-hover:text-black transition-colors" />}
                    </div>
                  );

                  return url ? (
                    <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block no-underline group h-full">
                      {cardContent}
                    </a>
                  ) : <div key={i}>{cardContent}</div>;
                })}
              </div>
            </div>
          )}
          
          {learnings && (
            <div className="p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border-l-4 border-slate-500">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-500 mb-1.5 sm:mb-2">Key Learnings</h4>
              <p className="text-gray-600 italic leading-relaxed text-[13px] sm:text-base">{learnings}</p>
            </div>
          )}
        </div>

        <div className="md:col-span-5 space-y-5 md:space-y-8">
          <div className="p-4 sm:p-8 bg-gray-50 rounded-[14px] sm:rounded-2xl">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 mb-3 sm:mb-6">Measurable Results</h4>
            <ul className="space-y-2.5 sm:space-y-5">
              {results.map((res, i) => (
                <li key={i} className="flex items-start space-x-2.5 sm:space-x-3.5">
                  <div className="mt-0.5 sm:mt-1 p-1 bg-green-100 text-green-600 rounded-full shrink-0">
                    <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="text-[13.5px] sm:text-base md:text-lg font-bold text-gray-900 leading-snug">{res}</span>
                </li>
              ))}
            </ul>
            {resultsFootnote && (
              <p className="mt-3.5 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200/60 text-[11px] sm:text-xs text-gray-500 italic leading-relaxed">
                {resultsFootnote}
              </p>
            )}
          </div>

          {tools && (
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 mb-2.5 sm:mb-4">Tools & Skills</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {tools.map((t, i) => (
                  <span key={i} className="px-2 py-1 md:px-3 md:py-1 bg-white border border-gray-200 text-gray-700 text-[11px] md:text-xs font-medium rounded-full">
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
};

interface JourneyStep {
  year: string;
  title: string;
  description?: string;
  renderDescription?: (openCro: () => void) => React.ReactNode;
  isCurrent?: boolean;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    year: "2023",
    title: "Digital Foundation",
    description: "Upgrad Digital Marketing Course.",
    isCurrent: false,
  },
  {
    year: "Oct 2023 – Jan 2024",
    title: "Cars24 Growth Analytics",
    description: "UAE automotive growth strategy.",
    isCurrent: false,
  },
  {
    year: "Mar 2024 – Dec 2024",
    title: "E-commerce Analytics",
    description: "Amazon, Flipkart, Meesho management.",
    isCurrent: false,
  },
  {
    year: "2025",
    title: "CRO & Data Analysis",
    renderDescription: (openCro: () => void) => (
      <span>
        Optimization for major brands at{' '}
        <button 
          type="button" 
          onClick={openCro} 
          className="font-semibold text-gray-900 underline decoration-gray-400 hover:decoration-black hover:text-black transition-colors cursor-pointer"
          title="View CRO projects"
        >
          OptiPhoenix Xperts
        </button>
        .
      </span>
    ),
    isCurrent: false,
  },
  {
    year: "Now",
    title: "AI-Driven Analytics",
    description: "Vibe coding & marketing automation.",
    isCurrent: true,
  },
];

// --- Main App ---

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isCroProjectsModalOpen, setIsCroProjectsModalOpen] = useState(false);
  
  // Mobile accordion state for Case Studies (only one open at a time, collapsed by default)
  const [activeMobileCaseStudyId, setActiveMobileCaseStudyId] = useState<string | null>(null);

  // Mobile Experience carousel state
  const [activeExpSlide, setActiveExpSlide] = useState(0);
  const expCarouselRef = useRef<HTMLDivElement>(null);

  const handleExpScroll = () => {
    if (expCarouselRef.current) {
      const scrollLeft = expCarouselRef.current.scrollLeft;
      const cardWidth = expCarouselRef.current.clientWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveExpSlide(Math.min(Math.max(index, 0), 3));
    }
  };

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

  const scrollToJourney = () => {
    const element = document.getElementById('journey');
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleViewProjects = () => {
    setIsProjectsModalOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-gray-200 bg-white overflow-x-hidden">
      <Navbar />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <ProjectsModal isOpen={isProjectsModalOpen} onClose={() => setIsProjectsModalOpen(false)} />
      <CroProjectsModal isOpen={isCroProjectsModalOpen} onClose={() => setIsCroProjectsModalOpen(false)} />

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-8 md:pt-32 md:pb-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] md:text-xs font-semibold tracking-wide text-gray-600 mb-3 md:mb-6 shadow-xs">
              Marketing & Business Analytics
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-3 md:mb-8 leading-tight">
              Turning Data Into <span className="gradient-text">Growth Decisions</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-600 mb-4 md:mb-10 max-w-lg leading-relaxed">
              From e-commerce analytics to conversion rate optimization—I analyze data to uncover insights and drive measurable business outcomes.
            </p>
            <div className="flex flex-row gap-2.5 sm:gap-4 w-full sm:w-auto">
              <button 
                onClick={handleViewProjects}
                className="px-4 py-2.5 sm:px-8 sm:py-4 bg-black text-white rounded-full font-semibold text-xs sm:text-base min-h-[42px] flex-1 sm:flex-none justify-center items-center flex transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 hover:-translate-y-0.5 shadow-md shadow-black/10 cursor-pointer"
              >
                View Projects
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-4 py-2.5 sm:px-8 sm:py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold text-xs sm:text-base min-h-[42px] flex-1 sm:flex-none justify-center items-center flex transition-all duration-300 ease-in-out hover:border-black hover:scale-105 hover:-translate-y-0.5 shadow-xs cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="relative flex justify-center lg:justify-end mt-2 md:mt-0">
            <div className="relative group">
              <div className="w-[140px] h-[175px] md:w-80 md:h-[480px] mx-auto bg-white rounded-2xl md:rounded-[2rem] shadow-xl md:shadow-2xl overflow-hidden border-2 md:border-4 border-white transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src="https://i.ibb.co/Pz4HZW2J/1763154192490.jpg" 
                  alt="Ramit Mehta Portrait" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-12 p-2 md:p-5 bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl max-w-[125px] md:max-w-[200px] border border-gray-50 transform -rotate-2 md:-rotate-3 transition-transform hover:rotate-0 z-10">
                <div className="flex items-center gap-1.5 md:gap-3 mb-0.5 md:mb-2">
                  <div className="p-1 md:p-1.5 bg-green-100 text-green-600 rounded-md md:rounded-lg">
                    <TrendingUp className="w-3.5 h-3.5 md:w-5 md:h-5" />
                  </div>
                  <span className="text-base md:text-3xl font-extrabold text-gray-900 tracking-tighter">15+</span>
                </div>
                <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider md:tracking-[0.2em] leading-tight">Successful Tests</p>
              </div>

              <div className="hidden md:flex absolute -top-10 -right-6 w-16 h-16 bg-white/50 backdrop-blur-sm rounded-full border border-gray-100 items-center justify-center -z-10 animate-bounce">
                <Zap size={24} className="text-gray-300" />
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="hidden md:flex justify-center mt-20 animate-bounce">
          <button 
            onClick={scrollToJourney}
            className="p-2 text-gray-300 hover:text-black transition-colors cursor-pointer"
            aria-label="Scroll to journey"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Featured Banner (CRO Max Fashion Audit - Figma Frame) */}
      <FigmaFeaturedBanner />

      {/* Journey Timeline */}
      <section id="journey" className="py-8 md:py-24 px-4 md:px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 tracking-tight">The Journey</h2>
            <p className="text-[13px] md:text-sm text-gray-500">A path of continuous learning and adaptation</p>
          </div>

          <ScrollReveal>
            {/* Desktop / PC Horizontal View */}
            <div className="hidden md:block">
              <div className="overflow-x-auto no-scrollbar pb-2">
                <div className="min-w-[760px] lg:min-w-0">
                  {/* Track and Milestone Nodes */}
                  <div className="relative mb-6">
                    {/* Connecting line between the 5 nodes */}
                    <div className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-0.5 bg-gray-200 -z-0"></div>
                    <div className="grid grid-cols-5 relative z-10">
                      {JOURNEY_STEPS.map((step, idx) => (
                        <div key={idx} className="flex justify-center">
                          <div className={`w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center transition-all ${
                            step.isCurrent 
                              ? 'border-emerald-500 shadow-sm ring-4 ring-emerald-50' 
                              : 'border-gray-300 hover:border-gray-400'
                          }`}>
                            <div className={`w-2.5 h-2.5 rounded-full ${
                              step.isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-gray-700'
                            }`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Horizontal Cards Grid */}
                  <div className="grid grid-cols-5 gap-3.5 lg:gap-4">
                    {JOURNEY_STEPS.map((step, idx) => (
                      <div 
                        key={idx} 
                        className={`p-4 lg:p-5 bg-white rounded-2xl border transition-all flex flex-col justify-between text-left ${
                          step.isCurrent 
                            ? 'border-emerald-200/90 shadow-2xs ring-1 ring-emerald-100/70 hover:shadow-md' 
                            : 'border-gray-100 shadow-2xs hover:border-gray-200 hover:shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-2">
                            <span className={`text-[10px] lg:text-[11px] font-bold tracking-widest uppercase ${
                              step.isCurrent ? 'text-emerald-600 font-extrabold' : 'text-gray-400'
                            }`}>
                              {step.year}
                            </span>
                            {step.isCurrent && (
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                Current
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-gray-900 mb-1.5 leading-snug">
                            {step.title}
                          </h4>
                        </div>
                        <div className="text-xs text-gray-600 leading-relaxed mt-2 pt-2 border-t border-gray-50">
                          {step.renderDescription ? step.renderDescription(() => setIsCroProjectsModalOpen(true)) : step.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Compact Vertical View */}
            <div className="block md:hidden">
              <div className="relative pl-6 space-y-2.5">
                {/* Slim vertical line down the left */}
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-200"></div>

                {JOURNEY_STEPS.map((step, idx) => (
                  <div key={idx} className="relative flex items-start">
                    {/* Compact node marker on the line */}
                    <div className={`absolute -left-6 top-2.5 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center z-10 ${
                      step.isCurrent ? 'border-emerald-500 ring-2 ring-emerald-50' : 'border-gray-300'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        step.isCurrent ? 'bg-emerald-500 animate-pulse' : 'bg-gray-600'
                      }`}></div>
                    </div>

                    {/* Compact Card */}
                    <div className={`w-full p-2.5 bg-white rounded-xl border text-left transition-all ${
                      step.isCurrent 
                        ? 'border-emerald-200/90 shadow-2xs ring-1 ring-emerald-100/50' 
                        : 'border-gray-100 shadow-2xs'
                    }`}>
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className={`text-[10px] font-bold tracking-wider uppercase ${
                          step.isCurrent ? 'text-emerald-600 font-extrabold' : 'text-gray-400'
                        }`}>
                          {step.year}
                        </span>
                        {step.isCurrent && (
                          <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 mb-0.5 leading-snug">
                        {step.title}
                      </h4>
                      <div className="text-[11px] text-gray-600 leading-snug line-clamp-1">
                        {step.renderDescription ? step.renderDescription(() => setIsCroProjectsModalOpen(true)) : step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-8 md:py-24 px-4 md:px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-4 tracking-tight text-gray-900">Experience</h2>
            <p className="text-[13px] md:text-sm text-gray-500">Career progression and key achievements</p>
          </div>

          {/* Mobile Horizontal Swipe Carousel with scroll-snap and peek */}
          <div className="block md:hidden">
            <div 
              ref={expCarouselRef}
              onScroll={handleExpScroll}
              className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-3 pb-2 px-1"
            >
              <div className="w-[85vw] max-w-[320px] shrink-0 snap-start">
                <ExperienceCard 
                  title="CRO Analyst/Strategist" 
                  company="OptiPhoenix Xperts Pvt. Ltd." 
                  period="2025" 
                  icon={<TrendingUp size={20} />}
                  description="Ran CRO experiments for fashion and D2C brands."
                  achievements={["15+ successful A/B tests across fashion and D2C brands", "Competitor Analyses & User Research", "Tools: Convert, GA4, Adobe Analytics, Figma"]}
                  gradient="from-slate-600 to-slate-800"
                  onCardClick={() => setIsCroProjectsModalOpen(true)}
                  onCompanyClick={() => setIsCroProjectsModalOpen(true)}
                />
              </div>
              <div className="w-[85vw] max-w-[320px] shrink-0 snap-start">
                <ExperienceCard 
                  title="Influencer Marketing" 
                  company="Troovy (FMCG Startup)" 
                  period="2025" 
                  icon={<Users size={20} />}
                  description="Influencer marketing for emerging FMCG brand."
                  achievements={["Negotiated partnerships", "Coordinated influencer campaigns"]}
                  gradient="from-gray-600 to-gray-800"
                />
              </div>
              <div className="w-[85vw] max-w-[320px] shrink-0 snap-start">
                <ExperienceCard 
                  title="Growth Intern (Part-time)" 
                  company="Cars24 (UAE)" 
                  period="Oct 2023 – Jan 2024" 
                  icon={<Zap size={20} />}
                  description="Organic growth strategies for automotive marketplace in Dubai."
                  achievements={["Marketplace performance analysis", "Data-driven strategy over paid acquisition", "Cross-platform management"]}
                  gradient="from-neutral-600 to-neutral-800"
                />
              </div>
              <div className="w-[85vw] max-w-[320px] shrink-0 snap-start">
                <ExperienceCard 
                  title="E-Commerce Analytics & Ops" 
                  company="AMP Operational Services" 
                  period="Mar 2024 – Dec 2024" 
                  icon={<ShoppingCart size={20} />}
                  description="End-to-end marketplace management across India's top 3 platforms (Amazon, Flipkart, Meesho)."
                  achievements={["Listing performance analysis & optimization", "SEO & Platform Compliance", "Ads campaign management"]}
                  gradient="from-stone-600 to-stone-800"
                />
              </div>
            </div>

            {/* Small dot indicators underneath */}
            <div className="flex justify-center items-center gap-1.5 mt-3">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (expCarouselRef.current) {
                      const cardWidth = expCarouselRef.current.clientWidth * 0.85 + 12;
                      expCarouselRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' });
                      setActiveExpSlide(idx);
                    }
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="min-h-[30px] min-w-[24px] flex items-center justify-center p-1"
                >
                  <span className={`block rounded-full transition-all duration-300 ${
                    activeExpSlide === idx ? 'w-4 h-1.5 bg-black' : 'w-1.5 h-1.5 bg-gray-300'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8">
            <ScrollReveal>
              <ExperienceCard 
                title="CRO Analyst/Strategist" 
                company="OptiPhoenix Xperts Pvt. Ltd." 
                period="2025" 
                icon={<TrendingUp size={24} />}
                description="Ran CRO experiments for fashion and D2C brands."
                achievements={["15+ successful A/B tests across fashion and D2C brands", "Competitor Analyses & User Research", "Tools: Convert, GA4, Adobe Analytics, Figma"]}
                gradient="from-slate-600 to-slate-800"
                onCardClick={() => setIsCroProjectsModalOpen(true)}
                onCompanyClick={() => setIsCroProjectsModalOpen(true)}
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
                title="Growth Intern (Part-time)" company="Cars24 (UAE)" period="Oct 2023 – Jan 2024" icon={<Zap size={24} />}
                description="Organic growth strategies for automotive marketplace in Dubai."
                achievements={["Marketplace performance analysis", "Data-driven strategy over paid acquisition", "Cross-platform management"]}
                gradient="from-neutral-600 to-neutral-800"
              />
            </ScrollReveal>
            <ScrollReveal>
              <ExperienceCard 
                title="E-Commerce Analytics and Operations Associate (Part-time)" company="AMP Operational Services" period="Mar 2024 – Dec 2024" icon={<ShoppingCart size={24} />}
                description="End-to-end marketplace management across India's top 3 platforms (Amazon, Flipkart, Meesho)."
                achievements={["Listing performance analysis & optimization", "SEO & Platform Compliance", "Ads campaign management"]}
                gradient="from-stone-600 to-stone-800"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-8 md:py-24 px-4 md:px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-4 tracking-tight">Case Studies</h2>
            <p className="text-[13px] md:text-sm text-gray-500">Deep dives into key projects and their impact</p>
          </div>

          <CaseStudy 
            id="cro" 
            header="CRO Experiments for Fashion and D2C Brands" 
            summary="Ran CRO experiments for fashion and D2C brands, driving 15+ winning A/B tests."
            note="Brand names are not shown due to non-disclosure agreements."
            icon={<BarChart size={24} />}
            gradient="from-slate-600 to-slate-800"
            challenge="Shoppers were dropping off at key decision points (cart, size selection and mini-cart) even where traffic was healthy."
            approach="Behavioural data (heatmaps, session recordings, surveys), competitor benchmarking and A/B test design to find friction and test one change at a time."
            exampleTests={{
              intro: "Three examples from 15+ successful A/B tests.",
              items: [
                {
                  title: "Cart product selector",
                  context: "Indian ethnic-wear marketplace, about 1,100 to 1,300 daily users",
                  problem: "shoppers used the cart as a wishlist and deleted unwanted items before checkout, and many dropped off.",
                  change: "added a product selector so shoppers could check out only the items they wanted, with return and shipping reassurance and trust badges near the top of the cart.",
                  result: "conversion up about 6.4% and cart abandonment reduced.",
                  learning: "the cart worked better once it supported how shoppers actually used it."
                },
                {
                  title: "Size-guide placement on the product page",
                  context: "D2C fashion store, European market, about 17,000 to 18,000 daily users",
                  problem: "the size guide sat below the size selector, so shoppers hesitated while choosing a size.",
                  change: "moved the size guide next to the size selector so the chart was one tap away.",
                  result: "conversion up about 3.5%, directionally positive but not statistically significant .",
                  learning: "help at the point of decision beat adding more content.",
                  badge: "Win"
                },
                {
                  title: "Free-gift progress bar",
                  context: "D2C hair-care brand, about 6,500 to 7,000 daily users",
                  problem: "the mini-cart didn't show shoppers what gift they would earn at each milestone.",
                  change: "redesigned it to show the actual gift at each milestone, with tighter spacing and a countdown timer.",
                  result: "checkouts and conversion up about 6%, statistically significant."
                }
              ]
            }}
            results={[
              "15+ Successful A/B Tests",
              "+6.4% conversion (cart selector)",
              "+3.5% conversion (size guide)",
              "+6% conversion (free-gift bar)"
            ]}
            resultsFootnote="Highlighted results are relative changes in conversion rate from three of these tests."
            tools={["Convert", "GA4", "ContentSquare", "Figma", "Crazy Egg", "Adobe Analytics"]}
            projects={ALL_PROJECTS[0].items}
            isMobileOpen={activeMobileCaseStudyId === 'cro'}
            onToggleMobile={() => setActiveMobileCaseStudyId(prev => prev === 'cro' ? null : 'cro')}
          />

          <CaseStudy 
            id="analytics-case-study" 
            header="Independent Portfolio Project — End-to-End Business Analytics Case Study" 
            summary="Funnel/segment diagnosis, A/B test statistical auditing, and cart-abandonment root-cause analysis."
            period="Jan 2026 – Present"
            link="https://github.com/ramitmehta4/mock-business-analytics/tree/main/Project%20portfolio"
            icon={<BarChart size={24} />}
            gradient="from-slate-700 to-slate-900"
            challenge="A complete e-commerce CRO case study covering funnel/segment diagnosis, A/B test statistical auditing, and cart-abandonment root-cause analysis."
            approach="Conducted granular funnel breakdown and segmented behavioral analysis to locate conversion bottlenecks and drops across user journeys."
            execution="Built using Python, SQL, Tableau, and Excel, with AI-assisted development workflows to perform statistical audits of A/B tests and diagnose root causes of cart abandonment."
            results={["Funnel & Segment Diagnosis", "A/B Test Statistical Auditing", "Cart-Abandonment Root-Cause Analysis"]}
            tools={["Python", "SQL", "Tableau", "Excel", "AI-Assisted Workflows", "Statistical Analysis"]}
            projects={ALL_PROJECTS[1].items}
            isMobileOpen={activeMobileCaseStudyId === 'analytics-case-study'}
            onToggleMobile={() => setActiveMobileCaseStudyId(prev => prev === 'analytics-case-study' ? null : 'analytics-case-study')}
          />

          <CaseStudy 
            id="ecommerce" 
            header="End-to-End Marketplace Management" 
            summary="End-to-end multi-platform operations, SEO listing optimization, and ads across top marketplaces."
            icon={<ShoppingCart size={24} />}
            gradient="from-stone-600 to-stone-800"
            challenge="Successfully launch and scale products across Amazon, Flipkart, and Meesho—three distinct platforms with different algorithms."
            execution="Analyzed multi-platform performance data to develop a marketplace strategy covering listing optimization, SEO, and ads performance tracking."
            results={["Multi-Platform Scale", "Optimized Listings", "High Ads ROI"]}
            tools={["Amazon Seller Central", "Flipkart Seller Hub", "Helium 10", "Canva", "Google Sheets"]}
            isMobileOpen={activeMobileCaseStudyId === 'ecommerce'}
            onToggleMobile={() => setActiveMobileCaseStudyId(prev => prev === 'ecommerce' ? null : 'ecommerce')}
          />

          <CaseStudy 
            id="foundation" 
            header="Building Core Skills: Foundation Project" 
            summary="Foundational marketing analytics, live search and social campaigns, and technical SEO audits."
            icon={<Award size={24} />}
            gradient="from-gray-600 to-gray-800"
            challenge="Built foundational data and marketing analytics skills through hands-on campaigns and technical/SEO audits."
            projects={ALL_PROJECTS[2].items}
            results={["6-Month Specialization", "Hands-on Mastery", "Foundation for CRO"]}
            tools={["WordPress", "SEO", "Google Ads", "Facebook Ads", "Analytics"]}
            isMobileOpen={activeMobileCaseStudyId === 'foundation'}
            onToggleMobile={() => setActiveMobileCaseStudyId(prev => prev === 'foundation' ? null : 'foundation')}
          />
        </div>
      </section>

      {/* Skills Arsenal */}
      <section id="skills" className="py-8 md:py-24 px-4 md:px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-4 tracking-tight">Skills Arsenal</h2>
            <p className="text-[13px] md:text-sm text-gray-500">Core analytics tools, experimentation frameworks, and tech competencies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
            <ScrollReveal className="bg-white p-3.5 sm:p-4 md:p-8 rounded-[14px] md:rounded-2xl shadow-xs md:shadow-sm border border-gray-100/70">
              <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2.5 md:mb-6 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500"></span>
                Advanced
              </h4>
              
              {/* Mobile wrapped chip layout */}
              <div className="flex flex-wrap gap-1.5 md:hidden">
                {[
                  { name: "GA4", icon: <BarChart3 size={14} /> },
                  { name: "Adobe Analytics", icon: <Activity size={14} /> },
                  { name: "Excel", icon: <FileSpreadsheet size={14} /> },
                  { name: "Tableau", icon: <LayoutGrid size={14} /> },
                  { name: "CRO & Competitor Analyses", icon: <Target size={14} /> },
                  { name: "E-commerce", icon: <ShoppingCart size={14} /> },
                  { name: "Figma", icon: <Figma size={14} /> },
                  { name: "ClickUp", icon: <CheckSquare size={14} /> },
                ].map((skill, sIdx) => (
                  <span key={sIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-100 text-[12px] font-medium text-gray-800">
                    <span className="text-gray-500 shrink-0">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>

              {/* Desktop list layout */}
              <ul className="hidden md:block space-y-3 font-medium text-gray-700">
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <BarChart3 size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">GA4</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <Activity size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Adobe Analytics</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <FileSpreadsheet size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Excel</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <LayoutGrid size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Tableau</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <Target size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">CRO & Competitor Analyses</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <ShoppingCart size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">E-commerce</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <Figma size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Figma</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-emerald-600 group-hover:bg-emerald-50/70 group-hover:border-emerald-100 transition-all shrink-0 shadow-2xs">
                    <CheckSquare size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">ClickUp</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="bg-white p-3.5 sm:p-4 md:p-8 rounded-[14px] md:rounded-2xl shadow-xs md:shadow-sm border border-gray-100/70">
              <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-blue-600 mb-2.5 md:mb-6 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></span>
                Intermediate
              </h4>
              
              {/* Mobile wrapped chip layout */}
              <div className="flex flex-wrap gap-1.5 md:hidden">
                {[
                  { name: "SQL", icon: <Database size={14} /> },
                  { name: "Python", icon: <Code2 size={14} /> },
                  { name: "Power BI", icon: <BarChart2 size={14} /> },
                  { name: "Data Analysis", icon: <LineChart size={14} /> },
                  { name: "A/B Testing", icon: <GitCompare size={14} /> },
                  { name: "Influencer Marketing", icon: <Megaphone size={14} /> },
                  { name: "SEO / SEM", icon: <Search size={14} /> },
                ].map((skill, sIdx) => (
                  <span key={sIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-100 text-[12px] font-medium text-gray-800">
                    <span className="text-gray-500 shrink-0">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>

              {/* Desktop list layout */}
              <ul className="hidden md:block space-y-3 font-medium text-gray-700">
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50/70 group-hover:border-blue-100 transition-all shrink-0 shadow-2xs">
                    <Database size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">SQL</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50/70 group-hover:border-blue-100 transition-all shrink-0 shadow-2xs">
                    <Code2 size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Python</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50/70 group-hover:border-blue-100 transition-all shrink-0 shadow-2xs">
                    <BarChart2 size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Power BI</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50/70 group-hover:border-blue-100 transition-all shrink-0 shadow-2xs">
                    <LineChart size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Data Analysis</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50/70 group-hover:border-blue-100 transition-all shrink-0 shadow-2xs">
                    <GitCompare size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">A/B Testing</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50/70 group-hover:border-blue-100 transition-all shrink-0 shadow-2xs">
                    <Megaphone size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Influencer Marketing</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-blue-600 group-hover:bg-blue-50/70 group-hover:border-blue-100 transition-all shrink-0 shadow-2xs">
                    <Search size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">SEO / SEM</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="bg-white p-3.5 sm:p-4 md:p-8 rounded-[14px] md:rounded-2xl shadow-xs md:shadow-sm border border-gray-100/70">
              <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-purple-600 mb-2.5 md:mb-6 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500"></span>
                Currently Learning
              </h4>
              
              {/* Mobile wrapped chip layout */}
              <div className="flex flex-wrap gap-1.5 md:hidden">
                {[
                  { name: "AI in Marketing", icon: <Sparkles size={14} /> },
                  { name: "Vibe Coding", icon: <Wand2 size={14} /> },
                  { name: "Jira", icon: <Kanban size={14} /> },
                ].map((skill, sIdx) => (
                  <span key={sIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-100 text-[12px] font-medium text-gray-800">
                    <span className="text-gray-500 shrink-0">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>

              {/* Desktop list layout */}
              <ul className="hidden md:block space-y-3 font-medium text-gray-700">
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-purple-600 group-hover:bg-purple-50/70 group-hover:border-purple-100 transition-all shrink-0 shadow-2xs">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">AI in Marketing</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-purple-600 group-hover:bg-purple-50/70 group-hover:border-purple-100 transition-all shrink-0 shadow-2xs">
                    <Wand2 size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Vibe Coding</span>
                </li>
                <li className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50/80 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover:text-purple-600 group-hover:bg-purple-50/70 group-hover:border-purple-100 transition-all shrink-0 shadow-2xs">
                    <Kanban size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">Jira</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-24 px-4 md:px-6 bg-white border-t border-gray-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-bold mb-1 md:mb-4 tracking-tight">Let's Connect</h2>
            <p className="text-[13px] md:text-base text-gray-500">Open for performance marketing & CRO roles</p>
            <div className="mt-4 md:mt-12 flex flex-col md:flex-row flex-wrap justify-center items-center gap-2.5 md:gap-6 max-w-md md:max-w-none mx-auto">
              <a 
                href="mailto:ramitmehta4@gmail.com" 
                className="w-full md:w-auto h-10 min-h-[40px] flex items-center justify-center gap-2 px-6 md:px-10 md:py-5 md:h-auto bg-black text-white rounded-full font-bold text-xs md:text-base transition-all duration-300 hover:bg-gray-800 shadow-md group"
              >
                <Mail size={16} className="md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>Email Me</span>
              </a>
              <div className="flex flex-row gap-2.5 w-full md:w-auto">
                <a 
                  href="tel:+919773505829" 
                  className="flex-1 md:flex-none md:w-auto h-10 min-h-[40px] flex items-center justify-center gap-1.5 px-3 md:px-10 md:py-5 md:h-auto bg-white border border-gray-200 text-gray-900 rounded-full font-bold text-xs md:text-base transition-all duration-300 hover:border-gray-300 shadow-xs group"
                >
                  <Phone size={15} className="md:w-5 md:h-5 text-green-600 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="truncate">+91 97735 05829</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ramit-mehta-417600233/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none md:w-auto h-10 min-h-[40px] flex items-center justify-center gap-1.5 px-3 md:px-10 md:py-5 md:h-auto bg-white border border-gray-200 text-gray-900 rounded-full font-bold text-xs md:text-base transition-all duration-300 hover:border-gray-300 shadow-xs group"
                >
                  <Linkedin size={15} className="md:w-5 md:h-5 text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 p-3 md:p-4 bg-black text-white rounded-full shadow-2xl transition-all duration-300 z-50 hover:bg-gray-800 min-h-[42px] min-w-[42px] flex items-center justify-center ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="md:w-6 md:h-6" />
      </button>

      <footer className="py-6 md:py-12 px-4 md:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-xs md:text-sm font-medium">
            &copy; 2025 Ramit Mehta Portfolio.
          </p>
        </div>
      </footer>
    </div>
  );
}
