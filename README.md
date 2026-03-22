# 🎨 My Portfolio V3

Uma aplicação web moderna e responsiva construída com **React** e **Vite**, apresentando informações profissionais, projetos desenvolvidos e experiência profissional. A aplicação oferece suporte a múltiplos idiomas e temas (claro/escuro) para uma melhor experiência do usuário.

---

## 🚀 Funcionalidades Principais

- ✨ **Design Responsivo**: Interface completamente otimizada para dispositivos móveis e desktop
- 🌍 **Suporte Multilíngue**: Contexto de linguagem para fácil internacionalização
- 🎭 **Temas Claro/Escuro**: Alternância dinâmica entre temas usando Context API
- ⚡ **Performance Otimizada**: Build rápido com Vite e Fast Refresh
- 📱 **Componentes Adaptativos**: Componentes específicos para mobile e desktop
- 🎯 **Navegação Intuitiva**: Sistema de abas para navegação em dispositivos móveis
- 🏆 **Portfólio Profissional**: Seções para informações pessoais, projetos e experiência

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.1.0 | Framework JavaScript |
| **Vite** | 7.0.4 | Build tool e dev server |
| **Tailwind CSS** | 4.1.11 | Framework CSS utilitário |
| **FontAwesome** | 6.5.2 | Biblioteca de ícones |
| **ESLint** | 9.30.1 | Linting e code quality |

---

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes React reutilizáveis
│   ├── MyInfo.jsx          # Informações pessoais (Desktop)
│   ├── MobileMyInfo.jsx    # Informações pessoais (Mobile)
│   ├── Projects.jsx        # Seção de projetos (Desktop)
│   ├── MobileProjects.jsx  # Seção de projetos (Mobile)
│   ├── Experience.jsx      # Experiência profissional (Desktop)
│   ├── MobileExperience.jsx # Experiência profissional (Mobile)
│   ├── NavScreen.jsx       # Navegação Desktop
│   ├── MobileNav.jsx       # Navegação Mobile
│   └── ProjectModal.jsx    # Modal para detalhes de projetos
├── contexts/               # Context API
│   └── LanguageContext.jsx # Gerenciamento de idioma e tema
├── hooks/                  # Hooks customizados
│   └── useIsMobile.jsx    # Hook para detectar dispositivo
├── lists/                  # Dados e listas
│   └── MyProjects.jsx     # Array de projetos
├── pages/
│   └── App.jsx            # Componente raiz
├── index.css              # Estilos globais
└── main.jsx               # Entrada da aplicação
```

---

## 🚀 Como Começar

### Pré-requisitos
- **Node.js** 16+ instalado
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd myportfoliov3
```

2. Instale as dependências:
```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento com Hot Module Replacement:
```bash
npm run dev
```

A aplicação será aberta em `http://localhost:5173`

### Build para Produção

Gere uma build otimizada:
```bash
npm run build
```

Os arquivos compilados estarão no diretório `dist/`

### Visualizar Build

Para visualizar a versão de produção localmente:
```bash
npm run preview
```

### Linting

Verificar e manter a qualidade do código:
```bash
npm run lint
```

---

## 📱 Responsividade

A aplicação utiliza o hook customizado `useIsMobile()` para detectar dinamicamente o tipo de dispositivo e renderizar componentes otimizados:

- **Desktop**: Layout em coluna com navegação lateral
- **Mobile**: Layout em abas com navegação inferior

---

## 🎨 Tema e Idioma

Gerenciados pela `LanguageContext`:
- **Temas**: `light` / `dark`
- **Idiomas**: Suporte integrado para múltiplas línguas
- **Persistência**: Configurações salvos automaticamente

---

## 📦 Dependências Principais

- **React 19**: Framework JavaScript moderno
- **Vite 7**: Build tool ultra-rápido com suporte HMR
- **Tailwind CSS 4**: Utility-first CSS framework
- **FontAwesome React**: Integração de ícones SVG
- **React Hooks**: Gerenciamento de estado com Context API

---

## 🔧 Ferramentas de Desenvolvimento

- **ESLint 9**: Análise estática de código
- **Vite Plugin React**: Suporte otimizado para React no Vite
- **Tailwind CSS Vite**: Integração do Tailwind com Vite

---

## 📈 Melhorias Futuras

- [ ] Adicionar animações e transições sofisticadas
- [ ] Implementar sistema de filtros para projetos
- [ ] Adicionar formulário de contato funcional
- [ ] Implementar dark mode com persistência
- [ ] Otimizar imagens com lazy loading
- [ ] Adicionar testes automatizados (Jest/Vitest)

---

## 💡 Destaques do Código

### Responsividade Dinâmica
O projeto utiliza um hook customizado para detectar automaticamente o tamanho da tela e renderizar componentes apropriados.

### Context API
Gerenciamento eficiente de estado global para tema e idioma sem necessidade de bibliotecas externas.

### Styled com Tailwind
Toda a estilização utiliza Tailwind CSS, garantindo consistência visual e performance.

---

## 📄 Licença

Este projeto está disponível sob a licença MIT.

---

## 👤 Autor

**Gabriel**

Para mais informações, visite o portfólio live ou entre em contato através das redes sociais.

---

**Última atualização**: Março de 2026
