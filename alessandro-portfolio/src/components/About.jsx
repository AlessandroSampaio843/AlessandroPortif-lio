import { motion } from 'framer-motion';

export const About = () => {
  const skills = [
    ['React', 'Vue.js', 'Next.js'],
    ['Node.js', 'Express', 'MongoDB'],
    ['Tailwind CSS', 'Framer Motion', 'TypeScript'],
    ['Git', 'Docker', 'REST APIs'],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mim
        </motion.h2>

        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Sou um desenvolvedor apaixonado por tecnologia e resolução de problemas. Com mais de 1 ano de experiência, tenho trabalhado em diversos projetos que vão desde aplicações web complexas até soluções mobile inovadoras.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Meu foco é criar código limpo, performático e escalável, sempre priorizando a experiência do usuário e as melhores práticas da indústria.
            </p>
          </motion.div>

          <motion.div
            className="glass p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Habilidades</h3>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.flat().map((skill) => (
                <motion.div
                  key={skill}
                  className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg hover:border-blue-500/60 transition-all duration-300"
                  variants={itemVariants}
                >
                  <p className="text-gray-200 font-medium">{skill}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
