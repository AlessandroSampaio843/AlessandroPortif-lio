# ⚡ RÁPIDO - Onde Está Cada Seção Para Editar

## 🎯 **TEM 4 ARQUIVOS PRINCIPAIS - SÓ ISSO!**

### 1️⃣ HER O.JSX - Seu Nome e Apresentação
```
📁 src/components/Hero.jsx
```

**Procure por:**
```jsx
<h2 className="text-gray-400...">
  Bem-vindo ao meu portfólio  ← MUDE ISSO
</h2>

<h1 className="text-5xl...">
  Desenvolvedor <span className="gradient-text">Full Stack</span>  ← MUDE ISSO
</h1>

<p className="text-gray-400...">
  Criando experiências digitais incríveis...  ← MUDE ISSO
</p>
```

---

### 2️⃣ ABOUT.JSX - Sobre Você
```
📁 src/components/About.jsx
```

**Procure por:**
```jsx
<p className="text-gray-300...">
  Sou um desenvolvedor apaixonado por tecnologia...  ← MUDE ISSO
</p>

const skills = [
  ['React', 'Vue.js', 'Next.js'],        ← MUDE ISSO
  ['Node.js', 'Express', 'MongoDB'],      ← MUDE ISSO
  // Adicione suas skills
];
```

---

### 3️⃣ PROJECTS.JSX - Seus Projetos
```
📁 src/components/Projects.jsx
```

**Procure por:**
```jsx
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',          ← MUDE ISSO
    description: 'Plataforma completa...',  ← MUDE ISSO
    tech: ['React', 'Node.js', 'MongoDB'],  ← MUDE ISSO
    link: '#',                              ← MUDE LINK
  },
  // COPIE ESTE E COLE PARA ADICIONAR NOVOS
];
```

---

### 4️⃣ CONTACT.JSX - Contato e Redes
```
📁 src/components/Contact.jsx
```

**Procure por:**
```jsx
const socialLinks = [
  { name: 'GitHub', icon: '⚪', url: '#' },        ← MUDE URL
  { name: 'LinkedIn', icon: '💼', url: '#' },      ← MUDE URL
  { name: 'Twitter', icon: '𝕏', url: '#' },       ← MUDE URL
  { name: 'Email', icon: '✉️', url: 'mailto:...' }, ← MUDE EMAIL
];
```

---

## 🎨 **CORES - TAILWIND.CONFIG.JS**
```
📁 tailwind.config.js (raiz do projeto)
```

Se quiser **mudar de cor**, os estilos estão em:
```
📁 src/index.css
```

Classes úteis que aparecem nos componentes:
- `.btn-primary` - Botões azuis
- `.glass` - Efeito vidro
- `.gradient-text` - Texto com gradiente

---

## 📋 **Resumão em 30 Segundos**

| O que fazer | Arquivo | O que procurar |
|---|---|---|
| **Seu nome/título** | `src/components/Hero.jsx` | `Desenvolvedor Full Stack` |
| **Sobre você** | `src/components/About.jsx` | `Sou um desenvolvedor` |
| **Seus projetos** | `src/components/Projects.jsx` | `const projects = [` |
| **Redes sociais** | `src/components/Contact.jsx` | `socialLinks` |
| **Mudar cores** | `src/index.css` ou `tailwind.config.js` | `.btn-primary`, `.glass` |

---

## 🚀 **Rodar Localmente**

```bash
npm run dev
```

Abre em: `http://localhost:5174/`

Muda um arquivo → **atualiza sozinho no navegador!** ✨

---

## 📦 **Deploy no Vercel**

Quando terminar:

1. Dê push no GitHub
2. Vá em https://vercel.com
3. Conecta seu repositório
4. **Pronto!** Deploy automático

---

**É isso! Só editis esses 4 arquivos e seu portfólio fica pronto! 🎉**
