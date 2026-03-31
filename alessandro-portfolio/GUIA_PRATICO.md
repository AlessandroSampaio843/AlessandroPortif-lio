# 📖 Guia Prático - Como Fazer as Coisas

## 1️⃣ MUDAR SEU NOME NA APRESENTAÇÃO

**Onde:** `src/components/Hero.jsx`

**Antes:**
```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
  Desenvolvedor <span className="gradient-text">Full Stack</span>
</h1>
```

**Depois (seu nome):**
```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
  Alessandro - <span className="gradient-text">Desenvolvedor Web</span>
</h1>
```

---

## 2️⃣ MUDAR SUA DESCRIÇÃO PESSOAL

**Onde:** `src/components/About.jsx`

**Antes:**
```jsx
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  Sou um desenvolvedor apaixonado por tecnologia e resolução de problemas. 
  Com mais de 5 anos de experiência, tenho trabalhado em diversos projetos...
</p>
```

**Depois (sua história):**
```jsx
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  Sou o Alessandro, desenvolvedora apaixonada por criar soluções web inovadoras.
  Tenho 3 anos com React e Node.js, adorei trabalhar com startups...
</p>
```

---

## 3️⃣ MUDAR SUAS HABILIDADES

**Onde:** `src/components/About.jsx`

**Antes:**
```jsx
const skills = [
  ['React', 'Vue.js', 'Next.js'],
  ['Node.js', 'Express', 'MongoDB'],
  ['Tailwind CSS', 'Framer Motion', 'TypeScript'],
  ['Git', 'Docker', 'REST APIs'],
];
```

**Depois (suas skills):**
```jsx
const skills = [
  ['React', 'Next.js', 'TypeScript'],
  ['Node.js', 'Python', 'PostgreSQL'],
  ['Tailwind CSS', 'HTML5', 'CSS3'],
  ['Git', 'GitHub', 'Vercel'],
];
```

---

## 4️⃣ ADICIONAR SEUS PROJETOS

**Onde:** `src/components/Projects.jsx`

Cada projeto tem essa estrutura:

```jsx
{
  id: 1,                           // número único
  title: 'Nome do Projeto',        // seu nome
  description: 'O que faz...',     // descrição breve
  tech: ['React', 'Node.js'],      // tecnologias
  link: 'https://...',             // link para o projeto
}
```

**Exemplo Real - Adicionar um Projeto Novo:**

```jsx
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com carrinho, pagamento e painel administrativo.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  // NOVO PROJETO
  {
    id: 7,
    title: 'App Delivery de Comida',
    description: 'App completo de delivery com rastreamento em tempo real e pagamento integrado.',
    tech: ['React Native', 'Firebase', 'Google Maps'],
    link: 'https://github.com/seu-usuario/app-delivery',
  },
  // OUTRO NOVO
  {
    id: 8,
    title: 'Dashboard de Análise',
    description: 'Dashboard para análise de dados com gráficos interativos em tempo real.',
    tech: ['Next.js', 'Chart.js', 'PostgreSQL'],
    link: 'https://seu-dashboard.vercel.app',
  },
];
```

---

## 5️⃣ MUDAR LINKS DE REDES SOCIAIS

**Onde:** `src/components/Contact.jsx`

**Antes:**
```jsx
const socialLinks = [
  { name: 'GitHub', icon: '⚪', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'Twitter', icon: '𝕏', url: '#' },
  { name: 'Email', icon: '✉️', url: 'mailto:seu@email.com' }
];
```

**Depois (seus links):**
```jsx
const socialLinks = [
  { name: 'GitHub', icon: '⚪', url: 'https://github.com/seu-usuario' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/seu-usuario' },
  { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/seu-usuario' },
  { name: 'Email', icon: '✉️', url: 'mailto:seu-email@gmail.com' }
];
```

---

## 6️⃣ MUDAR FAVICON (ICONE NA ABA)

**Arquivo:** `public/favicon.svg`

1. Crie seu próprio icone SVG
2. Ou encontre em: https://favicon.io/
3. Coloque em `public/` com nome `favicon.svg`
4. Reinicie o servidor

---

## 7️⃣ ADICIONAR SUA FOTO

**Onde:** `src/components/Hero.jsx` (depois da apresentação)

Adicione esta linha:
```jsx
<img 
  src="/sua-foto.jpg" 
  alt="Sua foto" 
  className="rounded-full w-40 h-40 object-cover border-2 border-blue-500 mt-8"
/>
```

Coloque a foto em `public/sua-foto.jpg`

---

## 8️⃣ MUDAR CORES DO SITE

**Onde:** `src/index.css`

Procure por `.btn-primary`:

**Antes:**
```css
.btn-primary {
  @apply px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ...
}
```

**Para vermelho:**
```css
.btn-primary {
  @apply px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg ...
}
```

**Cores disponíveis:** `blue`, `red`, `green`, `purple`, `pink`, `yellow`, `orange`, etc.

---

## 9️⃣ ADICIONAR NOVA SEÇÃO (Certificações)

**Criar arquivo:** `src/components/Certifications.jsx`

```jsx
import { motion } from 'framer-motion';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Certificações</h2>
        {/* seu conteúdo */}
      </div>
    </section>
  );
};
```

**Depois edite `App.jsx`:**
```jsx
import { Certifications } from './components/Certifications'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certifications />  {/* Adicione aqui */}
      <Contact />
      <Footer />
    </div>
  );
}
```

**E o menu:** `src/components/Header.jsx`
```jsx
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Certificações', href: '#certifications' },  // Adicione
  { name: 'Contato', href: '#contact' },
];
```

---

## 🔟 ATIVAR EMAIL (EmailJS)

**Passo 1:** Ir em https://www.emailjs.com/

**Passo 2:** Criar conta e pegar:
- Service ID
- Template ID
- Public Key

**Passo 3:** Editar `src/components/Contact.jsx`:

```jsx
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    emailjs.init('SUA_PUBLIC_KEY_AQUI');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', {
        to_email: 'seu-email@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  // resto do código...
};
```

---

## 🚀 CHECKLIST ANTES DE DEPLOY

- [ ] Nome atualizado em Hero.jsx
- [ ] Bio e skills em About.jsx
- [ ] Projetos adicionados em Projects.jsx
- [ ] Links de redes sociais em Contact.jsx
- [ ] Email funcionando (EmailJS configurado)
- [ ] Favicon adicionado
- [ ] Sem erros em `npm run build`
- [ ] Testado em mobile (F12)
- [ ] Pronto para Vercel!

---

## 💡 DICAS FINAIS

1. **Sempre salve o arquivo** (Ctrl+S)
2. **Veja mudanças em tempo real** no navegador
3. **Se quebrar algo**, use Ctrl+Z para voltar
4. **Consulte CUSTOMIZACAO.md** para mais detalhes
5. **Dúvidas?** Veja o arquivo correspondente

---

**Pronto para customizar! Bora lá! 🚀**
