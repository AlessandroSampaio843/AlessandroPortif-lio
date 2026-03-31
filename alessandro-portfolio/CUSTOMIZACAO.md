# 🎯 Guia de Customização - Portfólio Alessandro

## 1. Personalizando Dados Pessoais

### Hero Section
**Arquivo:** `src/components/Hero.jsx`

Edite as seguintes linhas:
```jsx
<h2 className="text-gray-400 text-lg md:text-xl mb-4 tracking-widest uppercase">
  Bem-vindo ao meu portfólio  // Mude este texto
</h2>

<h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
  Desenvolvedor <span className="gradient-text">Full Stack</span>  // Personalize
</h1>

<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
  Criando experiências digitais incríveis... // Sua bio aqui
</p>
```

### Seção "Sobre"
**Arquivo:** `src/components/About.jsx`

```jsx
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  Sou um desenvolvedor apaixonado por tecnologia... // Sua história
</p>
```

**Adicionar Habilidades:**
```jsx
const skills = [
  ['React', 'Vue.js', 'Next.js'],
  ['Node.js', 'Express', 'MongoDB'],
  // Adicione suas skills aqui
];
```

---

## 2. Adicionando Seus Projetos

**Arquivo:** `src/components/Projects.jsx`

```jsx
const projects = [
  {
    id: 1,
    title: 'Seu Projeto 1',
    description: 'Descrição de 1-2 linhas',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://seu-projeto.com'  // Link direto para o projeto
  },
  // Adicione mais projetos...
];
```

**Exemplo completo:**
```jsx
{
  id: 7,
  title: 'Dashboard Analytics',
  description: 'Dashboard em tempo real com gráficos interativos e KPIs.',
  tech: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL'],
  link: 'https://github.com/seu-usuario/analytics-dashboard'
}
```

---

## 3. Configurando Redes Sociais

**Arquivo:** `src/components/Contact.jsx`

```jsx
const socialLinks = [
  { name: 'GitHub', icon: '⚪', url: 'https://github.com/seu-usuario' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/seu-usuario' },
  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/seu-usuario' },
  { name: 'Email', icon: '✉️', url: 'mailto:seu-email@example.com' }
];
```

**Emojis disponíveis para usar:**
- GitHub: `⚪` ou `🐙`
- LinkedIn: `💼` ou `🔗`
- Twitter: `𝕏` ou `🐦`
- Email: `✉️` ou `📧`
- Portfolio: `🌐`
- WhatsApp: `💬`

---

## 4. Integrando Email

### Opção 1: EmailJS (Recomendado)

1. **Instale a dependência:**
```bash
npm install @emailjs/browser
```

2. **Obtenha credenciais em:** https://www.emailjs.com/

3. **Configure em `src/components/Contact.jsx`:**

```jsx
import emailjs from '@emailjs/browser';

// Após a função handleSubmit:
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'seu_service_id',           // De EmailJS
      'seu_template_id',          // De EmailJS
      {
        to_email: 'seu-email@example.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'sua_public_key'            // De EmailJS
    );
    
    setIsSubmitted(true);
    // ... resto do código
  } catch (error) {
    console.error('Erro ao enviar:', error);
  }
};
```

### Opção 2: Formspree (Simples)

1. Acesse: https://formspree.io/
2. Crie um novo form
3. Adicione o endpoint: `https://formspree.io/f/YOUR_FORM_ID`

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    setIsSubmitted(true);
  }
};
```

---

## 5. Alterando Cores e Tema

**Arquivo:** `tailwind.config.js`

```js
theme: {
  extend: {
    colors: {
      // Cores personalizadas
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#ec4899',
    },
  },
},
```

**Exemplo de paleta moderna:**
```js
colors: {
  'brand': {
    50: '#f0f9ff',
    500: '#0ea5e9',
    900: '#0c2d48',
  }
}
```

---

## 6. Customizando Animações

**Arquivo:** `src/components/Hero.jsx` (ou qualquer componente)

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}      // Estado inicial
  animate={{ opacity: 1, y: 0 }}       // Estado final
  transition={{ duration: 0.8 }}       // Duração em segundos
  whileHover={{ scale: 1.05 }}         // Ao fazer hover
  whileTap={{ scale: 0.95 }}           // Ao clicar
>
  Seu conteúdo
</motion.div>
```

**Variações úteis:**
```jsx
// Entrada com delay
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
/>

// Animação contínua
<motion.div
  animate={{
    y: [0, 10, 0]
  }}
  transition={{
    duration: 2,
    repeat: Infinity
  }}
/>

// Scroll trigger
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
/>
```

---

## 7. Adicionando Novas Seções

1. **Crie um novo componente:**
```jsx
// src/components/Experience.jsx
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Experiência</h2>
        {/* Seu conteúdo */}
      </div>
    </section>
  );
};
```

2. **Importe em `App.jsx`:**
```jsx
import { Experience } from './components/Experience'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />  {/* Nova seção */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
```

3. **Adicione ao menu:**
```jsx
// Em Header.jsx
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Experiência', href: '#experience' },  // Novo
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];
```

---

## 8. Deploy no Vercel (Recomendado)

1. **Faça um push no GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Acesse:** https://vercel.com
3. **Conecte seu repositório GitHub**
4. **Vercel fará o deploy automaticamente!**

---

## 9. Dicas de Performance

### Lazy Loading de Imagens
```jsx
<img src="image.jpg" loading="lazy" alt="Description" />
```

### Code Splitting
```jsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));

<Suspense fallback={<div>Carregando...</div>}>
  <Projects />
</Suspense>
```

---

## 10. SEO - Meta Tags

**Arquivo:** `index.html`

```html
<meta name="description" content="Sua descrição breve (160 caracteres)" />
<meta name="keywords" content="React, Node.js, Desenvolvedor" />
<meta name="author" content="Seu Nome" />
<meta property="og:title" content="Alessandro - Desenvolvedor" />
<meta property="og:description" content="Sua descrição" />
<meta property="og:image" content="URL da imagem de preview" />
```

---

## 📋 Checklist Antes de Deploy

- [ ] Personalizou nome e descrição
- [ ] Adicionou todos os seus projetos
- [ ] Configurou links das redes sociais
- [ ] Testou formulário de contato
- [ ] Verificou responsividade em mobile
- [ ] Rodou `npm run build` sem erros
- [ ] Adicionou favicon personalizado
- [ ] Otimizou imagens
- [ ] Verificou velocidade com Lighthouse
- [ ] Fez deploy em produção

---

**Dúvidas?** Consulte a documentação oficial:
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com
- React: https://react.dev
- Vite: https://vite.dev
