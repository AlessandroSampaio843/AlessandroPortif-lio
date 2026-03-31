# 📦 Scripts e Comandos Úteis

## 🚀 Comandos Principais

### Desenvolvimento
```bash
npm run dev
```
- Inicia o servidor de desenvolvimento com hot reload
- Acesse: `http://localhost:5174`

### Build para Produção
```bash
npm run build
```
- Cria versão otimizada para produção na pasta `dist/`
- Arquivo único, minificado e comprimido

### Preview do Build
```bash
npm run preview
```
- Testa a build de produção localmente
- Útil para verificar se tudo funciona antes de fazer deploy

### Linting
```bash
npm run lint
```
- Verifica qualidade do código
- Encontra problemas de formatação

---

## 📋 Scripts Adicionais (Para Adicionar)

### Adicione ao `package.json` se necessário:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "format": "prettier --write 'src/**/*.{jsx,js,css}'",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 🔄 Workflow Típico

1. **Faça alterações localmente:**
   ```bash
   npm run dev
   ```

2. **Quando pronto para deploy:**
   ```bash
   npm run build
   npm run preview  # teste
   ```

3. **Se tudo OK, envie para produção:**
   ```bash
   git add .
   git commit -m "Deploy versão final"
   git push origin main
   # Vercel fará o deploy automaticamente
   ```

---

## 🛠️ Troubleshooting

### Porta já em uso?
```bash
# Windows
netstat -ano | findstr :5174
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5174
kill -9 <PID>
```

### Cache do Vite?
```bash
rm -rf node_modules/.vite
npm run dev
```

### Limpar tudo e reinstalar:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de dependências?
```bash
npm install --legacy-peer-deps
```

---

## 📊 Verificando Performance

### Com Lighthouse (Chrome DevTools)
1. Abra DevTools (F12)
2. Vá para "Lighthouse"
3. Clique em "Generate Report"

### Ideal alcançar:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🔗 Links Úteis

- **Documentação Vite:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Vercel Deploy:** https://vercel.com/docs
- **EmailJS:** https://www.emailjs.com/docs/

---

## 💡 Dicas Extras

### Criar arquivo .gitignore
```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
```

### GitHub Actions (Deploy automático)
Crie `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
```

---

**Happy coding! 🎉**
