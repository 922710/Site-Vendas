# Mariana Viana — Site de Serviços

Site pessoal de apresentação de serviços de desenvolvimento web, feito com **React + Vite**.

## Como rodar

### Pré-requisitos
- Node.js 18+ instalado ([nodejs.org](https://nodejs.org))

### Passo a passo

```bash
# 1. Entre na pasta do projeto
cd mariana-servicos

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
npm run preview
```

---

## Estrutura do projeto

```
mariana-servicos/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Process.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useVisible.js      ← hook de animação por scroll
│   ├── styles/
│   │   └── global.js          ← CSS global e animações
│   ├── data.js                ← projetos, serviços, FAQ, processo
│   ├── tokens.js              ← design tokens (cores)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Personalizar conteúdo

- **Projetos, serviços e FAQ** → edite `src/data.js`
- **Cores** → edite `src/tokens.js`
- **Número do WhatsApp** → busque `5561992271063` e substitua em todos os arquivos
