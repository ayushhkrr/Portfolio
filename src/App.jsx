import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  Globe,
  Cpu,
  Layers,
  Zap,
  Layout,
  Play,
  MessageSquare,
  Send,
  ArrowRight,
  Copy,
  Check,
  Download,
  Phone,
} from "lucide-react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const cols = Math.floor(width / 20);
    const ypos = Array(cols).fill(0);

    const characters =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const draw = () => {
      // Black background with very low opacity for long, smooth trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      // White / Silver text for high contrast monochrome look
      ctx.fillStyle = "#E5E7EB";
      ctx.font = "14px monospace";

      ypos.forEach((y, index) => {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        const x = index * 20;
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          ypos[index] = 0;
        } else {
          ypos[index] = y + 20;
        }
      });
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
  );
};

const NotionPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const profile = {
    name: "Ayush Kumar",
    role: "Full Stack JavaScript Developer",
    tagline: "Web Developer | MERN Stack",
    location: "Chandigarh, India",
    email: "aayuwavee@gmail.com",
    socials: {
      linkedin: "https://linkedin.com/in/ayush-kumar-a1935b331",
      github: "https://github.com/ayushhkrr",
    },
    summary:
      "Full-Stack Developer skilled in MERN stack with hands-on experience building and deploying production-style projects with authentication, payments, and cloud deployment. Strong focus on REST APIs, scalable backend architecture, and real-world integrations like Stripe.",
  };

  const projects = [
    {
      title: "PromptVerse - AI Marketplace",
      image: "/promptverse.jpeg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      desc: "A full-featured marketplace for AI prompts. Implemented JWT auth, protected routes, and role-based access. Integrated Stripe for payments and optimized API latency.",
      liveLink: "https://pro-universe.vercel.app/",
      repoLink: "https://github.com/ayushhkrr/promptverse",
    },
    {
      title: "URL Shortener Service",
      image: "/urlshortner.jpeg",
      tags: ["React", "Vite", "Express", "Rest API"],
      desc: "A robust URL shortening application. Features custom alias generation, QR codes, and click tracking. Backend deployed on Render, Frontend on Vercel.",
      liveLink: "https://u-inventor.vercel.app/",
      repoLink: "https://github.com/ayushhkrr/URL-Shortener",
    },
    {
      title: "Subscription Manager",
      image: "/submanager.jpeg",
      tags: ["Node.js", "Express", "Security", "Stripe"],
      desc: "Automated subscription tracking system. Uses Cron jobs for renewal reminders and Stripe webhooks for status updates. Built with heavy focus on API security.",
      liveLink: "https://sub-man.vercel.app/",
      repoLink: "https://github.com/ayushhkrr/Subs-Manager",
    },
  ];

  const skills = {
    backend: ["Node.js", "Express", "JWT", "REST APIs", "Stripe"],
    frontend: ["React.js", "TailwindCSS", "Vite"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "GitHub", "Vercel", "Render", "Postman"],
  };

  const FadeIn = ({ children, delay = 0, className = "" }) => (
    <div
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  // Material Design Chip Style
  const MaterialChip = ({ text, color = "default" }) => {
    const colors = {
      blue: "bg-[#E0F2FE] text-[#0369A1] border-[#BAE6FD]", // Sky 100/700
      green: "bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]", // Green 100/700
      orange: "bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]", // Orange 100/700
      purple: "bg-[#F3E8FF] text-[#7E22CE] border-[#E9D5FF]", // Purple 100/700
      default: "bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]", // Slate 100/600
    };

    let selectedColor = color;
    if (["React", "React.js", "TailwindCSS"].includes(text))
      selectedColor = "blue";
    if (["Node.js", "Express", "MongoDB"].includes(text))
      selectedColor = "green";
    if (["Stripe", "JWT", "Security"].includes(text)) selectedColor = "purple";
    if (["Vercel", "Render", "Git"].includes(text)) selectedColor = "orange";

    return (
      <span
        className={`px-3 py-1 rounded-full text-[12px] font-medium mr-2 mb-2 inline-flex items-center border transition-all duration-[400ms] ease-out hover:shadow-md hover:scale-105 ${
          colors[selectedColor] || colors.default
        }`}
      >
        {text}
      </span>
    );
  };

  const ProjectCard = ({ project, idx }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <div 
        className="h-[320px] w-full [perspective:1000px] group"
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          <div 
            className="h-full w-full float-animation"
            style={{ 
              animationPlayState: isFlipped ? 'paused' : undefined,
              willChange: 'transform' 
            }}
          >
          <div
            className={`relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Front Face */}
            <div
              className={`absolute inset-0 h-full w-full rounded-3xl p-8 flex flex-col justify-between [backface-visibility:hidden] border border-white/50 bg-gradient-to-br ${
                idx === 0
                  ? "from-blue-50/80 via-indigo-50/50 to-white"
                  : idx === 1
                  ? "from-emerald-50/80 via-teal-50/50 to-white"
                  : "from-orange-50/80 via-amber-50/50 to-white"
              } material-shadow transition-shadow hover:shadow-2xl hover:border-white/80`}
              style={{ transform: "translateZ(1px)" }} 
            >
              {/* Decorative background blur blobs */}
              <div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 ${
                  idx === 0
                    ? "bg-blue-400"
                    : idx === 1
                    ? "bg-emerald-400"
                    : "bg-orange-400"
                }`}
              ></div>

              <div className="relative z-10">
                <div className="flex flex-wrap gap-3 mb-5">
                  {project.tags.map((tag) => {
                     const getTechStack = (name) => {
                       switch(name) {
                         case 'React': return { 
                           img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
                           color: "shadow-cyan-500/20 border-cyan-100",
                           tooltipBg: "bg-sky-500"
                         };
                         case 'Node.js': return { 
                           img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
                           color: "shadow-green-500/20 border-green-100",
                           tooltipBg: "bg-green-600"
                         };
                         case 'MongoDB': return { 
                           img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
                           color: "shadow-emerald-500/20 border-emerald-100",
                           tooltipBg: "bg-emerald-600"
                         };
                         case 'Stripe': return { 
                           img: "https://cdn.simpleicons.org/stripe/5469d4", 
                           color: "shadow-indigo-500/20 border-indigo-100",
                           tooltipBg: "bg-[#5469d4]" // Stripe brand color
                         };
                         case 'Vite': return { 
                           img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", 
                           color: "shadow-purple-500/20 border-purple-100",
                           tooltipBg: "bg-purple-600"
                         };
                         case 'Express': return { 
                           img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", 
                           color: "shadow-gray-500/20 border-gray-100",
                           tooltipBg: "bg-slate-700"
                         };
                         case 'Rest API': return { 
                           component: <Globe size={16} className="text-blue-500" />, 
                           color: "shadow-blue-500/20 border-blue-100",
                           tooltipBg: "bg-blue-600"
                         };
                         case 'Security': return { 
                           component: <div className="text-rose-500"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>, 
                           color: "shadow-rose-500/20 border-rose-100",
                           tooltipBg: "bg-rose-600"
                         };
                         default: return { 
                           component: <Code2 size={16} className="text-slate-400" />, 
                           color: "shadow-slate-500/20 border-slate-100",
                           tooltipBg: "bg-slate-600"
                         };
                       }
                     };
                     
                     const stack = getTechStack(tag);
                     
                     return (
                       <div
                         key={tag}
                         className={`w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg border ${stack.color} hover:scale-125 hover:shadow-xl transition-all duration-300 cursor-pointer relative group/icon`}
                       >
                         <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-2 py-1 rounded-full opacity-0 transform translate-y-2 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-md ${stack.tooltipBg || "bg-slate-800"}`}>
                           {tag}
                         </span>
                         {stack.img ? (
                            <img src={stack.img} alt={tag} className="w-5 h-5 object-contain" />
                         ) : (
                            stack.component
                         )}
                       </div>
                     );
                  })}
                </div>

                <h3 className="font-extrabold text-2xl text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-400 ease-out tracking-tight">
                  {project.title}
                </h3>
                
                <button
                   onClick={() => setIsFlipped(true)}
                   className="text-sm font-semibold text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all duration-300 mb-4"
                >
                   <span className="group-hover:hidden">Expand</span>
                   <span className="hidden group-hover:inline">Flip</span> <ArrowRight size={14} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 relative z-10">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-bold py-3.5 rounded-xl hover:bg-black hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-slate-900/10"
                >
                  <Globe size={18} /> <span>Demo</span>
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold py-3.5 rounded-xl hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all duration-300 shadow-sm"
                >
                  <Code2 size={18} /> <span>Code</span>
                </a>
              </div>
            </div>

            {/* Back Face */}
            <div
              className={`absolute inset-0 h-full w-full rounded-3xl p-8 bg-white border border-indigo-100 material-shadow [backface-visibility:hidden] flex flex-col`}
              style={{ transform: "rotateY(180deg) translateZ(1px)" }}
            >
              <div className="flex justify-between items-start mb-4">
                 <h3 className="font-bold text-xl text-slate-900">{project.title}</h3>
                 <button 
                   onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                   }}
                   className="p-1 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                 >
                   <ArrowRight className="rotate-180" size={20}/>
                 </button>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                 <p className="text-[15px] text-slate-600 leading-relaxed">
                   {project.desc}
                 </p>
              </div>
              
               <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center">
                   <button 
                     onClick={() => setIsFlipped(false)}
                     className="text-xs font-bold uppercase tracking-widest text-indigo-500 hover:text-indigo-700 transition-colors"
                   >
                     Close Details
                   </button>
               </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div
      className="min-h-screen bg-[#FDFBFF] text-[#1B1B1F] pb-20 overflow-x-hidden"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

        .material-shadow { 
          box-shadow: 0 4px 20px rgba(0,0,0,0.03); 
          transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .material-shadow:hover { 
          box-shadow: 0 15px 35px rgba(0,0,0,0.08); 
          transform: translateY(-4px); 
        }
        .material-btn { 
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); 
        }
        .material-btn:active { 
          transform: scale(0.96); 
        }
        
        .material-input { 
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); 
          border: 1px solid #E2E8F0;
        }
        .material-input:focus { 
          border-color: #818CF8; 
          box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.1);
          outline: none;
        }

        .pastel-gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
          will-change: transform;
        }
        
        @media (hover: hover) {
          .float-animation:hover {
            animation-play-state: paused;
          }
        }
        
        @keyframes float {
          0% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -10px, 0); }
          100% { transform: translate3d(0, 0px, 0); }
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top Navigation Bar - Material App Bar Style */}
      <div className="group h-16 flex items-center justify-between px-6 fixed top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[400px] md:hover:w-[530px] bg-white z-50 border border-gray-100 shadow-xl shadow-black/5 rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden">
        <div className="flex items-center gap-3 text-sm shrink-0">
          <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md cursor-pointer hover:scale-110 transition-transform duration-300 ease-out">
            A
          </span>
          <span className="font-extrabold text-black tracking-tight whitespace-nowrap">
            ayush-kumar / portfolio
          </span>
        </div>
        <div className="flex gap-6 items-center shrink-0">
          <a
            href="/CV.pdf" // Ensure Resume.pdf is in your 'public' folder
            download="Ayush_Kumar_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-900 hover:scale-105 transition-all duration-300 ease-out material-btn shadow-lg shadow-black/20"
          >
            <Download size={16} />
            <span className="font-bold">CV</span>
          </a>
        </div>
      </div>

      {/* Cover Image - Black Matrix Rain Effect */}
      <div className="group relative h-64 w-full bg-black overflow-hidden border-b border-gray-100 shadow-inner">
        <MatrixRain />
        {/* Subtle bottom gradient to blend into the white card below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 relative -mt-20 z-10">
        {/* Profile Header Card - Material Card */}
        <FadeIn delay={100}>
          <div className="bg-white rounded-2xl p-8 material-shadow mb-12 relative border border-gray-50">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image with Ring */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg p-1.5 -mt-16 md:mt-0 float-animation">
                  <img
                    src="/profile.png"
                    alt={profile.name}
                    className="w-full h-full object-cover rounded-full bg-gray-50"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Ayush+Kumar&background=random";
                    }}
                  />
                </div>
              </div>

              <div className="flex-1 w-full">
                <h1 className="text-5xl font-bold mb-2 tracking-tight pastel-gradient-text">
                  {profile.name}
                </h1>
                <p className="text-xl text-[#444746] mb-6 font-light">
                  {profile.tagline}
                </p>

                <p className="text-[#444746] leading-relaxed text-lg font-light mb-8 max-w-3xl">
                  {profile.summary}
                </p>

                {/* Meta Data Grid */}
                <div className="flex flex-col gap-4 mt-2">
                  {/* Connect Item - Minimalist */}
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-3">
                      Connect
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={profile.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-indigo-100 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-sm"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-indigo-100 text-blue-600 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-sm"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-t-[#EA4335] border-r-[#4285F4] border-b-[#34A853] border-l-[#FBBC05] hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-sm group/mail"
                      >
                         <Mail size={20} className="text-slate-600 group-hover/mail:text-slate-900" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Projects Gallery View */}
        <div className="mb-16">
          <FadeIn delay={300}>
            <h3 className="text-2xl font-normal text-[#1B1B1F] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-r-full"></span>
              Featured Projects
            </h3>
          </FadeIn>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-12 px-6 -mx-6 md:px-0 md:mx-0 snap-x snap-mandatory hide-scrollbar">
            {projects.map((project, idx) => (
              <FadeIn key={idx} delay={400 + idx * 100} className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center">
                <ProjectCard project={project} idx={idx} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <FadeIn delay={600}>
            <h3 className="text-2xl font-normal text-[#1B1B1F] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-r-full"></span>
              Technical Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Backend Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 material-shadow group hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Server size={20} />
                  </div>
                  <span className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors">
                    Backend Engineering
                  </span>
                </div>
                <div className="flex flex-wrap">
                  {skills.backend.map((s) => (
                    <MaterialChip key={s} text={s} color="blue" />
                  ))}
                </div>
              </div>

              {/* Frontend Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 material-shadow group hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                    <Layout size={20} />
                  </div>
                  <span className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors">
                    Frontend & UI
                  </span>
                </div>
                <div className="flex flex-wrap">
                  {skills.frontend.map((s) => (
                    <MaterialChip key={s} text={s} color="purple" />
                  ))}
                </div>
              </div>

              {/* Database & Tools Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 material-shadow sm:col-span-2 group hover:border-indigo-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <Database size={20} />
                  </div>
                  <span className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors">
                    Database & DevOps
                  </span>
                </div>
                <div className="flex flex-wrap">
                  {skills.database.map((s) => (
                    <MaterialChip key={s} text={s} color="green" />
                  ))}
                  {skills.tools.map((s) => (
                    <MaterialChip key={s} text={s} color="orange" />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Contact Section - Material Form */}
        <FadeIn delay={800}>
          <div id="contact" className="mb-12">
            <h3 className="text-2xl font-normal text-[#1B1B1F] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-r-full"></span>
              Get in Touch
            </h3>

            <div className="bg-white rounded-2xl border border-gray-100 material-shadow overflow-hidden flex flex-col lg:flex-row">
              {/* Left: Context */}
              <div className="bg-gray-50 p-8 lg:w-2/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Let's build something amazing
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    I'm currently available for freelance work or full-time
                    opportunities. If you have a project that needs some
                    creative tech wizardry, I'd love to hear about it.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-400 ease-out group"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase">
                        Email Me
                      </p>
                      <p className="font-semibold text-gray-900">
                        {profile.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-400 ease-out group"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase">
                        LinkedIn
                      </p>
                      <p className="font-semibold text-gray-900">
                        Connect with me
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919835707452"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-400 ease-out group"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase">
                        Phone
                      </p>
                      <p className="font-semibold text-gray-900">
                        +91 9835707452
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right: Form Visual */}
              <div className="hidden lg:block p-8 lg:w-3/5 bg-white">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        className="material-input w-full rounded-lg p-3 text-gray-700 bg-gray-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="material-input w-full rounded-lg p-3 text-gray-700 bg-gray-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="material-input w-full rounded-lg p-3 text-gray-700 bg-gray-50 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button className="w-full bg-black text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 ease-out material-btn">
                    <Send size={18} /> Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={1000}>
          <div className="text-center text-gray-400 text-sm pb-8 pt-8">
            <p>
              © {new Date().getFullYear()} Ayush Kumar. Crafted with 💝
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default NotionPortfolio;
