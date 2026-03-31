import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-gray-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-2">
            © {currentYear} Alessandro. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Desenvolvido com <span className="gradient-text">React</span> + <span className="gradient-text">Tailwind</span> + <span className="gradient-text">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
