import { Link } from 'react-router-dom';
import { Network, Globe, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10 px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3 text-primary">
          <Network className="w-8 h-8" />
          <h1 className="text-xl font-bold tracking-tight text-white">AfroLink Europe</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Tech Tours</Link>
          <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Services</Link>
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Innovation Hubs</Link>
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-bold">FR / EN</span>
          </button>
          <button className="px-6 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/40 transition-all">
            Join Network
          </button>
        </div>
      </div>
    </header>
  );
}
