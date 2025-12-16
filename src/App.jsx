import React, { useState, useEffect } from 'react';
import { Play, Pause, ExternalLink, Mail, Github, Linkedin, ChevronDown, Menu, X, Video, ShoppingBag, CreditCard, Check, Lock, Youtube, AlertTriangle, Instagram, Calendar } from 'lucide-react';

// --- Données ---
const PROJECT_DATA = [
  {
    id: 1,
    title: "Vlog Cannes - La Menace",
    category: "Vlog / Lifestyle",
    description: "Retraçant son séjour à Cannes. Un rythme dynamique, une narration fluide et des choix musicaux en accord avec l’ambiance du voyage.",
    youtubeId: "3GBq70s8wvU",
    thumbnail: "https://img.youtube.com/vi/3GBq70s8wvU/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Vlog Camping - La Menace",
    category: "Vlog / Aventure",
    description: "Camping en montagne. Un style proche du court-métrage, alternant entre moments immersifs de nature et séquences tendues.",
    youtubeId: "Yrh7D5r8Ip8",
    thumbnail: "https://img.youtube.com/vi/Yrh7D5r8Ip8/maxresdefault.jpg",
    si: "q0xAiY-SSlp-oq8h" // Paramètre de partage spécifique
  },
  {
    id: 3,
    title: "Vlog Moscou - La Menace",
    category: "Vlog / Voyage",
    description: "Exploration urbaine et courses de nuit à Moscou. Montage rythmé et cinématographique.",
    youtubeId: "bfnU7s31s_I",
    thumbnail: "https://img.youtube.com/vi/bfnU7s31s_I/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "Publicité - MyFitRace",
    category: "Publicité / Sport",
    description: "Vidéos pour MyFitRace. Pensées pour capter l'attention et transmettre une expertise claire sur la nutrition et le sport.",
    youtubeId: "ajYWke0xkjc",
    thumbnail: "https://img.youtube.com/vi/ajYWke0xkjc/maxresdefault.jpg"
  },
  {
    id: 5,
    title: "Intro YouTube - Introspection",
    category: "Montage / Storytelling",
    description: "Intro dynamique et impactante expliquant comment transmettre un message fort.",
    youtubeId: "25IcyMAkNsU",
    thumbnail: "https://img.youtube.com/vi/25IcyMAkNsU/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "Book Trailer - 'Cross the Line'",
    category: "Trailer / Fiction",
    description: "Trailer cinématographique mêlant romance et F1. Montage rythmé et sound design immersif.",
    youtubeId: "zwv-JmgkSns",
    thumbnail: "https://img.youtube.com/vi/zwv-JmgkSns/maxresdefault.jpg"
  }
];

const SHOP_DATA = [
  {
    id: 1,
    title: "MDE FX PACK",
    // ICI : Lien vers votre image locale (à mettre dans le dossier 'public')
    image: "/pack-fx.png",
    description: "Le pack essentiel pour dynamiser vos montages. Transitions, effets et assets prêts à l'emploi pour donner un look unique à vos vidéos.",
    features: ["Drag & Drop Facile", "Compatible Premiere & AE", "Mise à jour à vie incluse"],
    link: "https://mickadeesoain.gumroad.com/l/rgysg", 
    cta: "Acheter sur Gumroad"
  }
];

// --- Composants ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Boutique', href: '#shop' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          MDE<span className="font-extrabold text-white">_VIDEO</span>.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-wider">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg text-slate-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-xs text-slate-300 uppercase tracking-widest font-semibold">Disponible pour vos projets</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Donner vie au récit <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">par le montage.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Monteur vidéo créatif. Je transforme vos rushs en histoires percutantes.
          Spécialisé dans le format YouTube, la publicité et le storytelling.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#portfolio" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            <Play size={20} fill="currentColor" />
            Voir mes montages
          </a>
          <a href="#shop" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            <ShoppingBag size={20} />
            Mon Pack
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const VideoCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Construction robuste de l'URL
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  
  let embedUrl = `https://www.youtube.com/embed/${project.youtubeId}`;
  const queryParams = [];

  if (project.si) {
    queryParams.push(`si=${project.si}`);
  }

  // Paramètres standards
  queryParams.push('autoplay=1');
  queryParams.push('rel=0'); 
  queryParams.push('modestbranding=1');
  
  if (origin) {
    queryParams.push(`origin=${origin}`);
  }

  embedUrl += `?${queryParams.join('&')}`;

  const watchUrl = `https://www.youtube.com/watch?v=${project.youtubeId}`;

  return (
    <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
      <div className="relative aspect-video bg-slate-950 overflow-hidden">
        {isPlaying ? (
          <div className="w-full h-full relative">
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
            
            <a 
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full transition-colors z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
              title="Ouvrir sur YouTube"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        ) : (
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
             <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500/80 transition-all duration-300 border border-white/40 shadow-lg"
                aria-label="Lire la vidéo"
              >
                <Play size={32} className="text-white fill-white ml-1" />
              </button>
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10 shadow-lg">
              {project.category}
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        {/* Suppression de 'line-clamp-3' pour afficher tout le texte */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <a 
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 w-max transition-colors cursor-pointer"
        >
          Voir sur YouTube <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <section id="shop" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Boutique</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Ressources pour Monteurs</h3>
          </div>
          <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-right md:text-left">
            Mes packs d'effets et assets personnels pour améliorer vos productions.
          </p>
        </div>

        <div className="flex justify-center">
          {SHOP_DATA.map((item) => (
            <div key={item.id} className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/20 group w-full max-w-5xl flex flex-col md:flex-row">
              {/* Image Section - Grande et visible */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[300px] overflow-hidden">
                 <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/20"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 md:p-12 w-full md:w-1/2 flex flex-col justify-center bg-slate-950">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-base mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400">
                        <Check size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-4 mt-auto">
                   <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-slate-900 font-bold py-4 px-6 rounded-xl hover:bg-blue-50 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-white/5"
                  >
                    <ShoppingBag size={18} /> Voir sur Gumroad
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Dernières Réalisations</h3>
          </div>
          <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-right md:text-left">
            Une sélection de mes montages favoris, alliant rythme et narration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
          {/* ICI : Lien vers votre image locale dans le dossier 'public' */}
          <img 
            src="/timeline.jpg" 
            alt="Interface de montage vidéo Timeline" 
            className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] bg-slate-800"
          />
          <div className="absolute -bottom-6 -right-6 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl hidden md:block">
            <div className="flex items-center gap-4 mb-2">
              <Video className="text-blue-400" size={24} />
              <span className="text-white font-bold text-xl">4 Ans</span>
            </div>
            <p className="text-slate-400 text-sm">d'expérience en montage vidéo</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">À Propos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Le rythme au service de l'histoire.</h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Passionné par l'image, j'ai développé une expertise technique pointue en montage, étalonnage et motion design. Mon objectif est simple : sublimer vos rushs pour créer des vidéos qui ne laissent pas indifférent.
          </p>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Je travaille exclusivement avec la suite Adobe (Premiere Pro, After Effects) pour garantir un flux de travail professionnel et créatif.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {['Montage Vidéo', 'Color Grading', 'Motion Design', 'Sound Design', 'Storytelling', 'VFX'].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-slate-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2">Contact</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Un projet de montage ?</h3>
        <p className="text-xl text-slate-400 mb-12">
          Je suis toujours à la recherche de nouveaux défis créatifs. Discutons de votre prochaine vidéo.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <button 
            onClick={() => window.open('mailto:votre-email@exemple.com')}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all hover:-translate-y-1 cursor-pointer"
          >
            <Mail size={20} />
            m'envoyer un email
          </button>
        </div>

        {/* Réseaux Sociaux */}
        <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/mde_video" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-pink-500 hover:border-pink-500 transition-all hover:-translate-y-1">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/@mde_video" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-red-500 hover:border-red-500 transition-all hover:-translate-y-1">
              <Youtube size={24} />
            </a>
            <a href="https://www.tiktok.com/@mde_video" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:-translate-y-1 flex items-center justify-center font-bold">
               {/* TikTok Icon (SVG custom car pas dans lucide par défaut parfois, ou remplacement simple) */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
        </div>

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} MDE_VIDEO. Tous droits réservés.
        </p>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Portfolio />
      <Shop />
      <About />
      <Contact />
    </div>
  );
};

export default App;