Claro! Aqui está um `README.md` completo e bem organizado para seu projeto **AgeGuesser**, com descrição, funcionalidades, instruções de uso e informações técnicas:

---

```markdown
# 🧠 AgeGuesser

> Descubra a idade estimada de uma pessoa com base no nome, usando uma interface simples e intuitiva feita com **SvelteKit + TypeScript**.

## 📸 Visão Geral

O **AgeGuesser** é um projeto de front-end desenvolvido com **SvelteKit** que consome a API [Agify.io](https://agify.io) para prever a idade de uma pessoa com base no nome fornecido. O objetivo é demonstrar domínio técnico, organização de código, boas práticas com TypeScript e foco na experiência do usuário.

---

## 🚀 Funcionalidades

### 🎯 Funcionalidade Principal
- 🔎 Estimar a idade com base no nome digitado (usando [agify.io](https://agify.io)).

### 🧠 Melhorias Técnicas
- ✅ Projeto migrado para **TypeScript** (`.ts`, `.svelte` com `lang="ts"`).
- ✅ Tipagem estática de dados (`PageData`, `PageLoad`, etc.).
- ✅ Uso de debounce para evitar múltimas chamadas desnecessárias à API.
- ✅ Utilização de `derived stores` com reatividade do Svelte.

### 🎨 Melhorias Visuais
- ✅ Animações de `fade-in` ao exibir os resultados (suave e acessível).
- ✅ Layout limpo com organização de estilos via `global.css`.

### ♿ Acessibilidade
- ✅ `aria-label` e `sr-only` para melhor leitura em leitores de tela.
- ✅ Navegação com teclado garantida.

---

## 📁 Estrutura de Pastas

```

src/
│
├── lib/
│   ├── components/
│   │   ├── Header.svelte
│   │   └── Footer.svelte
│   └── utils/
│       └── debounce.ts
│
├── routes/
│   ├── +page.svelte        ← Página principal
│   └── +page.ts            ← Função load com fetch da API
│
├── styles/
│   └── global.css
│
└── app.d.ts                ← Tipagens globais Svelte

````

---

## 🧪 Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/ageguesser.git
cd ageguesser
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o projeto localmente

```bash
npm run dev
```

> Acesse em: [http://localhost:5173/](http://localhost:5173/)

---

## 🧰 Tecnologias Utilizadas

* [SvelteKit](https://kit.svelte.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Agify API](https://agify.io)
* HTML5, CSS3, A11y

--- 

## 🧑‍💻 Autor

Desenvolvido por [Jessica Diniz](https://github.com/jessicadinizz) para fins de aprendizado e demonstração técnica.

---

## 📄 Licença

Este projeto está sob a licença MIT.

```

---

```
