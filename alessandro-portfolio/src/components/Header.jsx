import { motion } from 'framer-motion';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-gray-800/50 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Alessandro
          </motion.h1>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <motion.nav
            className="md:hidden mt-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link block"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
