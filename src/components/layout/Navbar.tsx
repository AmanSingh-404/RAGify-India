
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const NavItem = ({ to, children, currentPath, onClick }: { 
  to: string; 
  children: React.ReactNode;
  currentPath: string;
  onClick?: () => void;
}) => {
  const active = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${
          active 
            ? 'text-primary bg-primary/10' 
            : 'text-foreground/70 hover:text-foreground hover:bg-muted'
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const handleNavigation = (path: string) => {
    setCurrentPath(path);
    closeMenu();
  };
  
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b">
      <div className="container-narrow flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          <Link to="/" onClick={() => handleNavigation('/')} className="text-xl font-bold">
            FluentChat
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-1">
            <NavItem to="/" currentPath={currentPath} onClick={() => handleNavigation('/')}>Home</NavItem>
            <NavItem to="/features" currentPath={currentPath} onClick={() => handleNavigation('/features')}>Features</NavItem>
            <NavItem to="/chatbot" currentPath={currentPath} onClick={() => handleNavigation('/chatbot')}>Chatbot</NavItem>
            <NavItem to="/about" currentPath={currentPath} onClick={() => handleNavigation('/about')}>About</NavItem>
            <NavItem to="/contact" currentPath={currentPath} onClick={() => handleNavigation('/contact')}>Contact</NavItem>
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link to="/chatbot" className="btn btn-primary btn-sm">
            Try Now
          </Link>
        </div>
        
        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 w-full bg-foreground transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-foreground transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-foreground transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      
      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b shadow-lg animate-slide-down">
          <nav className="container-narrow py-4">
            <ul className="flex flex-col gap-1">
              <NavItem to="/" currentPath={currentPath} onClick={() => handleNavigation('/')}>Home</NavItem>
              <NavItem to="/features" currentPath={currentPath} onClick={() => handleNavigation('/features')}>Features</NavItem>
              <NavItem to="/chatbot" currentPath={currentPath} onClick={() => handleNavigation('/chatbot')}>Chatbot</NavItem>
              <NavItem to="/about" currentPath={currentPath} onClick={() => handleNavigation('/about')}>About</NavItem>
              <NavItem to="/contact" currentPath={currentPath} onClick={() => handleNavigation('/contact')}>Contact</NavItem>
            </ul>
            <div className="mt-4">
              <Link to="/chatbot" onClick={closeMenu} className="btn btn-primary btn-sm w-full">
                Try Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
