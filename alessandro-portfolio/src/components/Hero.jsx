import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gray-400 text-lg md:text-xl mb-4 tracking-widest uppercase">
            Bem-vindo ao meu portfólio
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Desenvolvedor <span className="gradient-text">Full Stack</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Criando experiências digitais incríveis com React, Node.js e as últimas tecnologias web. Focado em código limpo, performance e user experience.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#projects" className="btn-primary">
            Ver Projetos
          </a>
          <a href="#contact" className="btn-secondary">
            Entre em Contato
          </a>
        </motion.div>

        <motion.div
          className="mt-16"
          variants={scrollVariants}
          animate="animate"
        >
          <p className="text-gray-500 text-sm">Scroll para explorar</p>
          <p className="text-2xl mt-2">↓</p>
        </motion.div>
      </div>
    </section>
  );
};
