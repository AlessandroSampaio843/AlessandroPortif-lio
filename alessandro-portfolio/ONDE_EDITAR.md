# 🗂️ Guia de Localização - Portfólio Alessandro

## 📍 Onde Fica Cada Coisa

### 🔤 **Seu Nome e Apresentação**
**Arquivo:** `src/components/Hero.jsx`

```
Alessandro Portifólio/
└── src/
    └── components/
        └── Hero.jsx  ← EDITE AQUI
```

**O que mudar:**
- Seu nome/título profissional
- Descrição de quem você é
- Botões de ação (links)

---

### 📝 **Seção Sobre Mim**
**Arquivo:** `src/components/About.jsx`

```
Alessandro Portifólio/
└── src/
    └── components/
        └── About.jsx  ← EDITE AQUI
```

**O que mudar:**
- Sua bio/história profissional
- Lista de habilidades técnicas (React, Node.js, etc)

---

### 🎯 **Seus Projetos**
**Arquivo:** `src/components/Projects.jsx`

```
Alessandro Portifólio/
└── src/
    └── components/
        └── Projects.jsx  ← EDITE AQUI
```

**O que mudar:**
- Adicione seus projetos reais
- Descrição de cada projeto
- Tecnologias usadas
- Links para os projetos (GitHub, Deploy, etc)

---

### 📞 **Contato e Redes Sociais**
**Arquivo:** `src/components/Contact.jsx`

```
Alessandro Portifólio/
└── src/
    └── components/
        └── Contact.jsx  ← EDITE AQUI
```

**O que mudar:**
- Links do GitHub, LinkedIn, Twitter, Email
- Configurar envio de emails (EmailJS)
- Endereço de contato

---

### 🎨 **Cores e Tema**
**Arquivo:** `tailwind.config.js`

```
Alessandro Portifólio/
└── tailwind.config.js  ← EDITE AQUI
```

**O que mudar:**
- Cores personalizadas
- Tipografia
- Breakpoints

---

### 🎬 **Estilos Globais**
**Arquivo:** `src/index.css`

```
Alessandro Portifólio/
└── src/
    └── index.css  ← EDITE AQUI
```

**O que mudar:**
- Classes reutilizáveis (botões, cards, etc)
- Animações globais
- Dark mode

---

## 🏗️ Estrutura Completa

```
Alessandro Portifólio/
│
├── src/                          # Código-fonte
│   │
│   ├── components/               # 🎯 SEUS COMPONENTES
│   │   ├── Header.jsx            # Menu do topo
│   │   ├── Hero.jsx              # ← EDITAR: Apresentação
│   │   ├── About.jsx             # ← EDITAR: Sobre mim
│   │   ├── Projects.jsx          # ← EDITAR: Projetos
│   │   ├── Contact.jsx           # ← EDITAR: Contato
│   │   └── Footer.jsx            # Rodapé
│   │
│   ├── App.jsx                   # Componente principal (não mexer)
│   ├── App.css                   # Estilos App (não mexer)
│   ├── index.css                 # 🎨 Estilos globais
│   └── main.jsx                  # Entrada React (não mexer)
│
├── public/                       # 📁 Estáticos (favicon, imagens)
│
├── tailwind.config.js            # 🎨 Configuração Tailwind
├── postcss.config.js             # Config PostCSS (não mexer)
├── vite.config.js                # Config Vite (não mexer)
├── package.json                  # Dependências (não mexer)
│
├── CUSTOMIZACAO.md               # 📖 Guia de customização
├── COMPONENTES.md                # 📖 Detalhes técnicos
├── SCRIPTS.md                    # 📖 Comandos úteis
└── README.md                     # 📖 Documentação principal
```

---

## 🚀 Passo a Passo Para Customizar

### 1️⃣ **Adicionar Seu Nome e Título**
```
Arquivo: src/components/Hero.jsx
Linhas: ~11-23
```

### 2️⃣ **Escrever Sobre Você**
```
Arquivo: src/components/About.jsx
Linhas: ~19-25
```

### 3️⃣ **Adicionar Seus Projetos**
```
Arquivo: src/components/Projects.jsx
Linhas: ~5-30
```

### 4️⃣ **Redes Sociais**
```
Arquivo: src/components/Contact.jsx
Linhas: ~36-41
```

### 5️⃣ **Configurar Email**
```
Arquivo: src/components/Contact.jsx
Linhas: ~48-68
Ver guia CUSTOMIZACAO.md
```

---

## 💡 Dicas Rápidas

### Para **editar dados pessoais:**
1. Abra o arquivo em `src/components/`
2. Procure pelo texto antigo (ex: "Alessandro")
3. Substitua pelo seu texto
4. Salve (Ctrl+S)
5. Veja as mudanças em tempo real!

### Para **adicionar projetos:**
1. Abra `src/components/Projects.jsx`
2. Copie um projeto inteiro
3. Cole depois do último projeto
4. Mude os dados:
   - `title`: Nome do projeto
   - `description`: O que faz
   - `tech`: Tecnologias [aqui, dentro, array]
   - `link`: URL do GitHub/Deploy

### Para **mudar cores:**
1. Abra `tailwind.config.js`
2. Mude cores na seção `colors`
3. Reinicie o servidor (`npm run dev`)

---

## 🔧 Comandos Importantes

```bash
# Iniciar servidor (com reload automático)
npm run dev

# Fazer build para produção
npm run build

# Verificar erros de código
npm run lint
```

---

## 📚 Arquivos de Documentação (Dentro do Projeto)

```
├── CUSTOMIZACAO.md    ← Guia completo como customizar
├── COMPONENTES.md     ← Detalhes técnicos dos componentes
├── SCRIPTS.md         ← Comandos e troubleshooting
└── README.md          ← Documentação geral
```

---

## 🎯 Checklist Antes de Deploy

- [ ] Nome e bio personalizados (Hero.jsx)
- [ ] Sobre mim completo (About.jsx)
- [ ] Seus projetos adicionados (Projects.jsx)
- [ ] Redes sociais configuradas (Contact.jsx)
- [ ] Email funcionando (Contact.jsx + EmailJS)
- [ ] Cores customizadas (tailwind.config.js)
- [ ] Sem erros no console
- [ ] Responsivo em mobile (F12)
- [ ] `npm run build` sem erros
- [ ] Pronto para fazer deploy no Vercel

---

## 🆘 Ficou com Dúvidas?

1. **Como adicionar campo X?** → Leia `CUSTOMIZACAO.md`
2. **Qual código mudar?** → Veja `COMPONENTES.md`
3. **Como rodar/fazer build?** → Veja `SCRIPTS.md`
4. **Erro no console?** → Procure em `SCRIPTS.md` (Troubleshooting)

---

## 📱 Estrutura de Pasta Mais Simples

Se quer só saber **ONDE EDITAR**:

```
VER ESSES 4 ARQUIVOS:

1. src/components/Hero.jsx       ← Seu nome/título
2. src/components/About.jsx      ← Sua bio/skills  
3. src/components/Projects.jsx   ← Seus projetos
4. src/components/Contact.jsx    ← Contato/redes
```

**Pronto! É basicamente isso! 🎉**

---

**Dúvidas?** Cada arquivo tem comentários internos explicando! 💬

**Quer mais ajuda com algum arquivo específico?** Chama! 🚀
