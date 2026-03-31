# 🏗️ Estrutura de Componentes

## Visão Geral da Arquitetura

```
src/
├── components/           # Componentes React reutilizáveis
│   ├── Header.jsx        # Cabeçalho com navegação
│   ├── Hero.jsx          # Seção de destaque inicial
│   ├── About.jsx         # Sobre mim e habilidades
│   ├── Projects.jsx      # Galeria de projetos
│   ├── Contact.jsx       # Formulário de contato
│   └── Footer.jsx        # Rodapé
├── App.jsx              # Componente raiz
├── App.css              # Estilos globais
├── index.css            # Importações Tailwind
└── main.jsx             # Ponto de entrada React
```

---

## 📄 Detalhes de Cada Componente

### 1. Header.jsx
**Responsabilidades:**
- Exibir logo/nome
- Menu de navegação
- Menu responsivo para mobile
- Scroll suave para seções

**Props:** Nenhuma (componente apresentacional)

**Estado:**
```jsx
const [isOpen, setIsOpen] = useState(false); // Menu mobile
```

**Principais Classes:**
- `fixed top-0` - Fixo no topo
- `z-50` - Acima de tudo
- `glass` - Efeito glassmorphism

---

### 2. Hero.jsx
**Responsabilidades:**
- Apresentação principal
- Call-to-action buttons
- Animações de entrada
- Indicador de scroll

**Animações:**
- `initial`: Opacidade 0, y: 20
- `animate`: Opacidade 1, y: 0
- `scrollVariants`: Animação contínua

**Elementos Principais:**
- Título e subtítulo
- Dois botões (primário e secundário)
- Indicador de scroll

---

### 3. About.jsx
**Responsabilidades:**
- Biografia pessoal
- Grid de habilidades
- Efeito glass nos cards

**Dados:**
```jsx
const skills = [
  ['React', 'Vue.js', 'Next.js'],
  ['Node.js', 'Express', 'MongoDB'],
  ['Tailwind CSS', 'Framer Motion', 'TypeScript'],
  ['Git', 'Docker', 'REST APIs'],
];
```

**Animações:**
- Cards com stagger effect
- Entrada com delay
- Scale em hover

---

### 4. Projects.jsx
**Responsabilidades:**
- Exibir projetos em grid
- Mostrar tecnologias usadas
- Links para projetos

**Estrutura de Projeto:**
```jsx
{
  id: 1,
  title: 'Nome do Projeto',
  description: 'Descrição breve',
  tech: ['React', 'Node.js'],
  link: 'https://...'
}
```

**Grid:**
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas

**Efeitos:**
- Hover: y: -10, scale: 1.02
- Border color muda

---

### 5. Contact.jsx
**Responsabilidades:**
- Formulário de contato
- Links de redes sociais
- Feedback de envio

**Form Fields:**
```jsx
{
  name: '',
  email: '',
  message: ''
}
```

**Redes Sociais:**
- GitHub
- LinkedIn
- Twitter
- Email

**Estados:**
- `formData`: Dados do formulário
- `isSubmitted`: Feedback após envio

**Validações:**
- Nome, email e mensagem obrigatórios
- Email com validação nativa

---

### 6. Footer.jsx
**Responsabilidades:**
- Copyright
- Creditos das tecnologias
- Links úteis

**Conteúdo Dinâmico:**
```jsx
const currentYear = new Date().getFullYear();
```

---

## 🎨 Classes CSS Personalizadas (Tailwind)

### Componentes (em `index.css`)

```css
.nav-link
/* Links de navegação com underline animado */

.btn-primary
/* Botão principal com gradient azul */

.btn-secondary
/* Botão secundário com border */

.glass
/* Efeito glassmorphism */

.gradient-text
/* Texto com gradiente */
```

---

## 🔄 Fluxo de Dados

```
App.jsx
├── Header (props: nenhuma)
├── Hero (props: nenhuma)
├── About (props: nenhuma)
├── Projects (props: nenhuma)
├── Contact
│   ├── formData (state)
│   ├── isSubmitted (state)
│   └── handleChange, handleSubmit (functions)
├── Footer (props: nenhuma)
```

**Nota:** Componentes são "controlled" e gerenciam próprio estado.

---

## 🎬 Variantes de Animação Reutilizáveis

### Hero.jsx
```jsx
const scrollVariants = {
  animate: {
    y: [0, 10, 0],
    transition: { duration: 2, repeat: Infinity }
  }
};
```

### About.jsx
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

### Projects.jsx
```jsx
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

---

## 📱 Breakpoints Responsivos

```
sm: 640px  (Tablet pequeno)
md: 768px  (Tablet)
lg: 1024px (Desktop)
xl: 1280px (Desktop grande)
2xl: 1536px (Desktop muito grande)
```

**Padrão usado no projeto:**
- Aplicar base mobile
- Adicionar `md:` para tablet
- Adicionar `lg:` para desktop

---

## 🔧 Como Estender Componentes

### Exemplo: Adicionar seção "Certificações"

1. **Crie o arquivo:**
```jsx
// src/components/Certifications.jsx
import { motion } from 'framer-motion';

export const Certifications = () => {
  const certs = [
    { name: 'React Advanced', issuer: 'Udemy', date: '2024' },
    // ... mais
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">
          Certificações
        </h2>
        {/* Conteúdo */}
      </div>
    </section>
  );
};
```

2. **Importe em App.jsx:**
```jsx
import { Certifications } from './components/Certifications';

function App() {
  return (
    <div>
      {/* ... outros componentes ... */}
      <Certifications />
      {/* ... */}
    </div>
  );
}
```

3. **Adicione ao menu (Header.jsx):**
```jsx
const navItems = [
  // ...
  { name: 'Certificações', href: '#certifications' },
  // ...
];
```

---

## 📚 Padrões de Desenvolvimento

### Imports
```jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
```

### Nomes de Componentes
```jsx
export const ComponentName = () => { ... }
```

### Estução Section
```jsx
<section id="section-id" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Conteúdo */}
  </div>
</section>
```

### Animações
```jsx
<motion.element
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

---

## ✅ Checklist para Novo Componente

- [ ] Criar arquivo em `src/components/`
- [ ] Exportar como `const` component
- [ ] Usar `motion` do Framer Motion
- [ ] Adicionar `id` na section
- [ ] Usar classes Tailwind
- [ ] Adicionar ao `App.jsx`
- [ ] Adicionar ao menu (se necessário)
- [ ] Testar responsividade
- [ ] Verificar animações

---

## 🐛 Debug & Testes

### Inspeccionar Elemento
- F12 → Elements → Procure a classe
- Verifique estilos aplicados
- Teste media queries

### React DevTools
```bash
npm install -D @react-devtools/shell
```

### Framer Motion Inspector
- https://www.framer.com/motion/ → Tools

---

**Dúvidas?** Consulte componentes existentes como referência! 🚀
