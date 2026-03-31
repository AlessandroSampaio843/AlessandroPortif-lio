import { motion } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pawly Petshop',
      description: 'Sistema de agendamento e vitrine de serviços para petshops, com interface responsiva e animações fluidas.',
      tech: ['React', 'Tailwind CSS', 'Lucide Icons', 'Framer Motion'],
      link: 'https://pawly-petshop.vercel.app/',
      github: 'https://github.com/AlessandroSampaio843/pawly-petshop',
      image: '/images/projects/Projetc1.jpg',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicação de gerenciamento de tarefas com sincronização em tempo real e temas customizáveis.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1555949519-2f4eb4da8066?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Social Network',
      description: 'Rede social com sistema de posts, comentários, likes e notificações em tempo real.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Dashboard de clima com previsões, histórico e dados em tempo real de múltiplas cidades.',
      tech: ['Vue.js', 'Axios', 'Chart.js'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'App de rastreamento de exercícios com gráficos de progresso e planos de treino personalizados.',
      tech: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'Sistema de gerenciamento de blog com editor rich text, SEO otimizado e análises.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projetos em Destaque
        </motion.h2>

        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group glass overflow-hidden rounded-lg hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-slate-700 to-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all text-sm justify-center"
                  >
                    Ver Projeto →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
                    title="GitHub"
                  >
                    GH
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
