import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você integraria com um serviço de email
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { name: 'GitHub', icon: '⚪', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Email', icon: '✉️', url: 'mailto:seu@email.com' },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Vamos Trabalhar Juntos?
        </motion.h2>

        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia em mente, vamos conversar!
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-6">Conecte-se comigo</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="glass p-4 hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    title={social.name}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-green-400 text-lg font-semibold">
                  ✓ Mensagem enviada com sucesso!
                </p>
                <p className="text-gray-400 mt-2">
                  Responderei em breve.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <label className="block text-gray-300 font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Enviar Mensagem
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
