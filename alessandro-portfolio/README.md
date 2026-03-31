# 🎨 Portfólio Profissional - Alessandro

Portfólio moderno, minimalista e clean com Dark Mode. Desenvolvido com **Vite + React + Tailwind CSS + Framer Motion** para máxima performance e animações fluidas.

## ✨ Características

- ✅ **Design Clean & Minimal** - Interface limpa e profissional
- ✅ **Dark Mode Moderno** - Tema escuro sofisticado
- ✅ **Totalmente Responsivo** - Mobile, tablet e desktop
- ✅ **Animações Suaves** - Framer Motion animations
- ✅ **Performance Otimizada** - Vite para build rápido
- ✅ **Tailwind CSS** - Styling moderno e eficiente
- ✅ **SEO Ready** - Meta tags otimizadas

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx        # Navegação fixa no topo
│   ├── Hero.jsx          # Seção inicial com call-to-action
│   ├── About.jsx         # Sobre mim e habilidades
│   ├── Projects.jsx      # Galeria de projetos
│   ├── Contact.jsx       # Formulário de contato
│   └── Footer.jsx        # Rodapé
├── App.jsx              # Componente principal
├── App.css              # Estilos globais
├── index.css            # Configuração Tailwind
└── main.jsx             # Ponto de entrada
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone ou navegue até o projeto:**
```bash
cd alessandro-portfolio
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Acesse no navegador:**
```
http://localhost:5174
```

## 📦 Build para Produção

```bash
npm run build
```

Isso criará uma pasta `dist/` com os arquivos otimizados prontos para deploy.

## 🎯 Seções do Portfólio

### 1. **Header/Navegação**
- Menu fixo no topo com scroll suave
- Links para todas as seções
- Menu responsivo para mobile

### 2. **Hero Section**
- Apresentação pessoal impactante
- Call-to-action buttons
- Animações de entrada

### 3. **Sobre (About)**
- Biografia resumida
- Grid de habilidades técnicas
- Cards com efeito glass morphism

### 4. **Projetos**
- Grid responsivo de projetos
- Descrição e tecnologias usadas
- Efeitos hover interativos
- Links para os projetos

### 5. **Contato**
- Formulário funcional
- Links para redes sociais
- Feedback visual de envio

## 🎨 Customização

### Cores e Tema
Edite `tailwind.config.js` para customizar:
- Paleta de cores
- Tipografia
- Breakpoints responsivos

### Conteúdo
- **Hero:** Edite `src/components/Hero.jsx`
- **About:** Edite `src/components/About.jsx`
- **Projects:** Adicione seus projetos em `src/components/Projects.jsx`
- **Contact:** Configure em `src/components/Contact.jsx`

### Redes Sociais
Em `src/components/Contact.jsx`, atualize os links:
```jsx
const socialLinks = [
  { name: 'GitHub', icon: '⚪', url: 'https://github.com/seu-usuario' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/seu-usuario' },
  // ... mais links
];
```

## 🔧 Tecnologias

- **Vite** - Build tool incrivelmente rápido
- **React 19** - UI library moderna
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animações declarativas
- **PostCSS** - Processador CSS
- **ESLint** - Linting de código

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:
- 📱 Mobile (até 640px)
- 📱 Tablet (641px a 1024px)
- 🖥️ Desktop (acima de 1025px)

## 🚀 Deploy

### Opções de Deploy

**Vercel** (Recomendado):
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Faça upload da pasta 'dist/' no Netlify
```

**GitHub Pages**:
```bash
npm run build
# Configure o repositório para servir a pasta 'dist/'
```

## 📊 Performance

- ✅ Vite oferece build extremamente rápido
- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Compressão de assets

## 🎯 Próximos Passos

1. ✏️ Personalize o conteúdo com suas informações
2. 🖼️ Adicione seus próprios projetos
3. 🔗 Configure links para suas redes sociais
4. 📧 Integre serviço de email (Emailjs, Formspree, etc.)
5. 🚀 Deploy em produção

## 📝 Exemplo de Configuração de Email

Para ativar o envio de emails, integre com **EmailJS** ou similar:

```bash
npm install @emailjs/browser
```

Depois configure em `src/components/Contact.jsx`.

## 🤝 Contribuições

Sinta-se livre para fazer fork, melhorar e submeter pull requests!

## 📄 Licença

MIT License - Fique livre para usar em seus projetos!

---

**Desenvolvido com ❤️ por Alessandro**

Para sugestões ou dúvidas, entre em contato através do formulário no portfólio!
