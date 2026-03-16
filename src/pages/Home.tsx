import { ArrowRight, Code, Cpu, Globe2, Lightbulb, Rocket, Users, Network } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Marquee = () => (
  <div className="w-full overflow-hidden bg-primary/10 border-y border-primary/20 py-4 flex whitespace-nowrap relative z-20">
    <motion.div
      className="flex gap-8 items-center"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-8 items-center px-4">
          <span className="text-primary font-bold tracking-widest uppercase">Lagos</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-primary font-bold tracking-widest uppercase">Berlin</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-primary font-bold tracking-widest uppercase">Nairobi</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-primary font-bold tracking-widest uppercase">Paris</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-primary font-bold tracking-widest uppercase">Kigali</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-primary font-bold tracking-widest uppercase">London</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-primary font-bold tracking-widest uppercase">Cape Town</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-primary font-bold tracking-widest uppercase">Amsterdam</span>
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      ))}
    </motion.div>
  </div>
);

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1626125345510-4603468eedfb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  // duplicate slides for seamless looping
  const slides = [...images, ...images];
  const slideCount = slides.length;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="flex h-full"
        // container width equals number of slides * 100% so children can be sized by percentage
        style={{ width: `${slideCount * 100}%` }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {slides.map((src, idx) => (
          <div
            key={idx}
            className="h-full flex-shrink-0"
            // each slide should take an equal fraction of the container width
            style={{ width: `${100 / slideCount}%` }}
          >
            <img
              src={src}
              alt={`Travel ${idx}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-20 py-20">
        <motion.div 
          style={{ y: backgroundY, opacity }} 
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/30 to-background-dark/50 z-10" />
          <Carousel />
        </motion.div>

        {/* Animated Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide uppercase">Bridging Continents</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display"
          >
            Connecting African Tech <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              to European Markets
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We facilitate strategic partnerships, investment opportunities, and market entry
            for innovative African startups expanding into Europe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
              Explore Opportunities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl glass-effect border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              Partner with Us
            </button>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        className="py-16 border-b border-white/5 bg-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { value: "50+", label: "Startups Scaled" },
              { value: "€12M", label: "Capital Raised" },
              { value: "15", label: "European Hubs" },
              { value: "100k", label: "Network Members" }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 savannah-pattern opacity-30 pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Our Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A comprehensive platform designed to accelerate growth and foster cross-continental innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="w-8 h-8 text-primary" />,
                title: "Market Entry Strategy",
                desc: "Tailored roadmaps for African tech companies navigating European regulatory landscapes and consumer markets."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Investor Matchmaking",
                desc: "Direct access to our curated network of European VCs, angel investors, and institutional funds."
              },
              {
                icon: <Cpu className="w-8 h-8 text-primary" />,
                title: "Tech Talent Exchange",
                desc: "Facilitating skill transfer and collaborative engineering projects between tech hubs."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group bg-black/40 backdrop-blur-xl"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Startups / Image Gallery */}
      <section className="py-24 px-6 lg:px-20 bg-black/60 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Success Stories</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                Discover the innovative companies bridging the gap between Africa and Europe.
              </p>
            </div>
            <button className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2 group">
              View All Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
                tag: "FinTech",
                route: "Lagos → Berlin",
                title: "PayStream Africa",
                desc: "Revolutionizing cross-border B2B payments with blockchain infrastructure.",
                tagClasses: "bg-primary/20 text-primary border-primary/30"
              },
              {
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
                tag: "AgriTech",
                route: "Nairobi → Amsterdam",
                title: "CropSense",
                desc: "AI-driven crop monitoring solutions for sustainable European farming.",
                tagClasses: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
              },
              {
                img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2938&auto=format&fit=crop",
                tag: "HealthTech",
                route: "Kigali → Paris",
                title: "MediConnect",
                desc: "Telemedicine platform connecting specialized doctors across borders.",
                tagClasses: "bg-blue-500/20 text-blue-400 border-blue-500/30",
                hiddenOnMd: true
              }
            ].map((story, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl aspect-[4/5] ${story.hiddenOnMd ? 'md:hidden lg:block' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border ${story.tagClasses}`}>
                      {story.tag}
                    </span>
                    <span className="px-3 py-1 text-xs font-bold bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20">
                      {story.route}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-slate-300 text-sm line-clamp-2">{story.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative z-10 text-center glass-card p-12 md:p-20 rounded-3xl border border-primary/20 bg-black/40 backdrop-blur-2xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-16 h-16 text-primary mx-auto mb-8" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display text-white">Ready to Scale Global?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join our next cohort of African innovators expanding into the European market. Applications are now open.
          </p>
          <button className="px-10 py-5 rounded-xl bg-primary text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(230,57,70,0.4)] hover:-translate-y-1 transition-all">
            Apply for 2026 Cohort
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-t border-white/10 bg-black/80 pt-20 pb-10 px-6 lg:px-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 text-primary mb-6">
              <Network className="w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight text-white">AfroLink Europe</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Building the definitive bridge between African technological innovation and European capital markets.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer border border-white/10">
                <span className="font-bold text-sm">IN</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer border border-white/10">
                <span className="font-bold text-sm">TW</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Initiatives</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Tech Tours 2026</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Investor Summit</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Startup Accelerator</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors">Policy Advocacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hubs</h4>
            <ul className="space-y-4">
              <li><span className="text-slate-400">Lagos, Nigeria</span></li>
              <li><span className="text-slate-400">Nairobi, Kenya</span></li>
              <li><span className="text-slate-400">Berlin, Germany</span></li>
              <li><span className="text-slate-400">Paris, France</span></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 AfroLink Europe. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
