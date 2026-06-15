
# 🌱 Agrinho 2026 - Agro Forte, Futuro Sustentável

**Projeto de Front-End para o Concurso Agrinho 2026**  
Categoria: Desenvolvimento Front-End  
Tema: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"

---

## 📋 Sobre o Projeto

Este projeto é uma solução web educativa e interativa que aborda o tema central do Concurso Agrinho 2026: o equilíbrio entre a produção agropecuária e a preservação do meio ambiente. O site promove práticas sustentáveis no agro através de conteúdo informativo, visualizações de impacto e um quiz educativo.

### 🎯 Objetivos

- ✅ Demonstrar o equilíbrio entre produção agrícola e sustentabilidade ambiental
- ✅ Educar sobre práticas sustentáveis no agro
- ✅ Engajar usuários através de conteúdo interativo
- ✅ Promover consciência sobre sustentabilidade
- ✅ Implementar código HTML, CSS e JavaScript limpo e profissional
- ✅ Garantir acessibilidade e responsividade

---

## 🏗️ Estrutura do Projeto

```
agrinho-2026/
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

### Arquivos

| Arquivo | Descrição |
|---------|-----------|
| **index.html** | Estrutura HTML semântica com todas as seções do site |
| **style.css** | Estilos responsivos com variáveis CSS e design mobile-first |
| **script.js** | Funcionalidades interativas: abas dinâmicas e quiz |
| **README.md** | Documentação completa do projeto |

---

## ✨ Características Principais

### 1. **Design Profissional**
- Paleta de cores verde sustentável (#1d7a3c)
- Tipografia elegante (Merriweather + Poppins)
- Layout responsivo e moderno
- Gradientes e sombras sofisticadas

### 2. **Conteúdo Estruturado**
- **Hero Section**: Introdução impactante com call-to-action
- **Três Pilares**: Produção Responsável, Gestão da Água, Redução de Emissões
- **Práticas Sustentáveis**: Seção interativa com abas dinâmicas
- **Impacto Mensurável**: Estatísticas sobre benefícios das práticas
- **Quiz Educativo**: 5 questões sobre sustentabilidade agrícola
- **Call-to-Action**: Engajamento do usuário
- **Footer**: Informações e links rápidos

### 3. **Funcionalidades Interativas**
- ✅ **Abas Dinâmicas**: Mude entre Equilíbrio, Produção e Ambiente
- ✅ **Quiz com Feedback**: 5 questões com explicações detalhadas
- ✅ **Navegação Suave**: Scroll automático entre seções
- ✅ **Progresso Visual**: Barra de progresso do quiz
- ✅ **Resultados Personalizados**: Mensagens baseadas na pontuação

### 4. **Acessibilidade (WCAG 2.1 AA)**
- ✅ Contraste de cores adequado (4.5:1)
- ✅ Navegação por teclado completa
- ✅ Atributos ARIA semânticos
- ✅ Estrutura HTML semântica
- ✅ Textos alternativos descritivos
- ✅ Foco visível em elementos interativos

### 5. **Responsividade**
- ✅ Mobile-first design
- ✅ Breakpoints: 480px, 640px, 768px
- ✅ Funciona perfeitamente em smartphones, tablets e desktops
- ✅ Imagens e ícones escaláveis

---

## 🚀 Como Usar

### 1. Abrir Localmente
```bash
# Opção 1: Clique duplo no arquivo
index.html

# Opção 2: Use um servidor local (Python)
python -m http.server 8000
# Acesse: http://localhost:8000

# Opção 3: Use Live Server (VS Code)
# Instale a extensão "Live Server"
# Clique direito em index.html > "Open with Live Server"
```

### 2. Estrutura de Navegação
- **Header Sticky**: Menu de navegação sempre visível
- **Links de Âncora**: Clique em qualquer seção para navegar
- **Botões**: Navegação rápida entre seções principais
- **Scroll Suave**: Transição animada entre seções

### 3. Interagir com o Quiz
1. Clique em "Quiz" no menu ou role até a seção
2. Leia a questão e selecione uma resposta
3. Veja a explicação da resposta correta
4. Clique "Próxima Questão" para continuar
5. Ao final, veja sua pontuação e feedback personalizado
6. Clique "Fazer Quiz Novamente" para reiniciar

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|---|---|---|
| **HTML5** | - | Estrutura semântica |
| **CSS3** | - | Estilização e layout responsivo |
| **JavaScript (Vanilla)** | ES6+ | Funcionalidades interativas |
| **Google Fonts** | - | Tipografia (Poppins + Merriweather) |

**Sem dependências externas!** O projeto funciona com tecnologias web puras.

---

## 📱 Responsividade

### Breakpoints
```css
Mobile:    < 480px
Tablet:    480px - 768px
Desktop:   > 768px
```

### Testes Recomendados
- Chrome DevTools (F12)
- Firefox Developer Tools
- Safari Developer Tools
- Dispositivos reais (smartphone, tablet)

---

## ♿ Acessibilidade

O projeto segue as diretrizes **WCAG 2.1 AA**:

### Implementações
- ✅ Estrutura HTML semântica (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ✅ Atributos ARIA (`role`, `aria-label`, `aria-pressed`)
- ✅ Navegação por teclado (Tab, Enter, Arrow Keys)
- ✅ Contraste de cores (4.5:1 para texto)
- ✅ Foco visível em elementos interativos
- ✅ Descrições de imagens (alt text)
- ✅ Labels semânticos em formulários

### Como Testar
1. **Navegação por Teclado**: Use Tab para navegar
2. **Leitores de Tela**: Teste com NVDA ou JAWS
3. **Contraste**: Use ferramentas como WebAIM Contrast Checker
4. **Validação**: Use WAVE ou Axe DevTools

---

## 🎨 Customização

### Alterar Cores
Edite as variáveis CSS em `style.css`:

```css
:root {
    --primary-color: #1d7a3c;        /* Cor principal */
    --primary-dark: #0d5a2c;         /* Cor escura */
    --primary-light: #2d9d4f;        /* Cor clara */
    --secondary-color: #f0f9f4;      /* Cor secundária */
    /* ... outras cores ... */
}
```

### Alterar Fontes
Edite o link do Google Fonts em `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=FONTE:wght@400;700&display=swap" rel="stylesheet">
```

### Adicionar Conteúdo
1. Edite o HTML em `index.html`
2. Adicione estilos em `style.css`
3. Implemente funcionalidades em `script.js`

### Adicionar Questões ao Quiz
Edite o array `quizData` em `script.js`:

```javascript
const quizData = [
    {
        question: "Sua pergunta aqui?",
        options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
        correct: 1,  // Índice da resposta correta
        explanation: "Explicação detalhada..."
    },
    // Adicione mais questões...
];
```

---

## 📊 Seções do Site

### 1. Header
- Logo e nome do projeto
- Menu de navegação (desktop)
- Links para todas as seções

### 2. Hero Section
- Título principal
- Descrição do tema
- Botões de call-to-action
- Imagem/ícone ilustrativo

### 3. Sustentabilidade
- Três pilares com ícones e descrições
- Cards interativos com hover effect
- Informações sobre práticas sustentáveis

### 4. Práticas Sustentáveis
- Abas dinâmicas (Equilíbrio, Produção, Ambiente)
- Conteúdo textual detalhado
- Lista de benefícios
- Imagem/ícone representativo

### 5. Impacto
- Estatísticas em grid
- Números destacados
- Fundo verde escuro para contraste
- Dados sobre benefícios mensuráveis

### 6. Quiz
- Questões sobre sustentabilidade
- Opções de resposta interativas
- Explicações das respostas corretas
- Barra de progresso
- Resultados com feedback personalizado

### 7. Call-to-Action
- Mensagem motivadora
- Botão de engajamento
- Design destacado

### 8. Footer
- Informações do programa
- Links rápidos
- Contato
- Copyright

---

## 🔍 Validação e Testes

### Validar HTML
```bash
# Acesse: https://validator.w3.org/
# Carregue o arquivo index.html
```

### Validar CSS
```bash
# Acesse: https://jigsaw.w3.org/css-validator/
# Carregue o arquivo style.css
```

### Testar Acessibilidade
```bash
# Ferramentas recomendadas:
- WAVE (Wave.webaim.org)
- Axe DevTools (Chrome Extension)
- Lighthouse (Chrome DevTools)
- NVDA (Leitor de tela)
```

### Testar Responsividade
```bash
# Chrome DevTools (F12)
# Modo responsivo (Ctrl+Shift+M)
# Teste em diferentes tamanhos de tela
```

---

## 📋 Checklist de Conformidade com Agrinho 2026

- ✅ **Tema**: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"
- ✅ **Categoria**: Desenvolvimento Front-End
- ✅ **HTML5**: Código semântico e válido
- ✅ **CSS3**: Estilização profissional e responsiva
- ✅ **JavaScript**: Funcionalidades interativas sem dependências
- ✅ **Acessibilidade**: WCAG 2.1 AA compliant
- ✅ **Responsividade**: Mobile-first design
- ✅ **Conteúdo**: Educativo e relevante ao tema
- ✅ **Performance**: Carregamento rápido
- ✅ **Documentação**: README completo

---

## 🚀 Publicação

### GitHub Pages
```bash
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá para Settings > Pages
4. Selecione "main" branch
5. Seu site estará em: https://seu-usuario.github.io/seu-repositorio
```

### Vercel
```bash
1. Acesse vercel.com
2. Clique "New Project"
3. Importe seu repositório do GitHub
4. Clique "Deploy"
```

### Netlify
```bash
1. Acesse netlify.com
2. Clique "New site from Git"
3. Conecte seu repositório
4. Configure e deploy
```

---

## 📞 Suporte

### Problemas Comuns

**P: O site não carrega os estilos**
R: Verifique se os arquivos `style.css` e `script.js` estão no mesmo diretório que `index.html`.

**P: O quiz não funciona**
R: Verifique se o JavaScript está habilitado no navegador. Abra o console (F12) para ver erros.

**P: As fontes não aparecem**
R: Verifique sua conexão com a internet. As fontes são carregadas do Google Fonts.

**P: O site não é responsivo**
R: Limpe o cache do navegador (Ctrl+Shift+Delete) e recarregue a página.

---

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Google Fonts](https://fonts.google.com/)
- [Agrinho 2026 Oficial](https://www.sistemafaep.org.br/agrinho/)

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do Concurso Agrinho 2026.

---

## 👨‍💻 Desenvolvimento

**Desenvolvido para**: Concurso Agrinho 2026  
**Categoria**: Desenvolvimento Front-End  
**Tema**: Agro Forte, Futuro Sustentável  
**Data**: 2026

---

## 🙏 Agradecimentos

Agradecemos ao **Sistema FAEP/SENAR-PR** pela oportunidade de participar do Concurso Agrinho 2026 e contribuir para a educação sobre sustentabilidade agrícola.

---

**Desenvolvido com ❤️ para um futuro sustentável.**
