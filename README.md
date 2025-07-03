# 🧠 AgeGuesser

> Descubra a idade estimada de uma pessoa com base no nome, usando uma interface simples e intuitiva feita com **SvelteKit + TypeScript**.
@@ -11,8 +7,6 @@ Claro! Aqui está um `README.md` completo e bem organizado para seu projeto **Ag

O **AgeGuesser** é um projeto de front-end desenvolvido com **SvelteKit** que consome a API [Agify.io](https://agify.io) para prever a idade de uma pessoa com base no nome fornecido. O objetivo é demonstrar domínio técnico, organização de código, boas práticas com TypeScript e foco na experiência do usuário.



## 🚀 Funcionalidades

### 🎯 Funcionalidade Principal
@@ -21,7 +15,7 @@ O **AgeGuesser** é um projeto de front-end desenvolvido com **SvelteKit** que c
### 🧠 Melhorias Técnicas
- ✅ Projeto migrado para **TypeScript** (`.ts`, `.svelte` com `lang="ts"`).
- ✅ Tipagem estática de dados (`PageData`, `PageLoad`, etc.).
- ✅ Uso de debounce para evitar múltiplas chamadas desnecessárias à API.
- ✅ Utilização de `derived stores` com reatividade do Svelte.

### 🎨 Melhorias Visuais
@@ -32,8 +26,6 @@ O **AgeGuesser** é um projeto de front-end desenvolvido com **SvelteKit** que c
- ✅ `aria-label` e `sr-only` para melhor leitura em leitores de tela.
- ✅ Navegação com teclado garantida.



## 📁 Estrutura de Pastas

```
@@ -58,15 +50,13 @@ src/

````



## 🧪 Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/jessicadinizz/ageGuesser.git
cd ageGuesser
````

### 2. Instale as dependências
@@ -83,29 +73,19 @@ npm run dev

> Acesse em: [http://localhost:5173/](http://localhost:5173/)



## 🧰 Tecnologias Utilizadas

* [SvelteKit](https://kit.svelte.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Agify API](https://agify.io)
* HTML5, CSS3, A11y



## 🧑‍💻 Autor

Desenvolvido por [Jessica Diniz](https://github.com/jessicadinizz) para fins de aprendizado e demonstração técnica.



## 📄 Licença

Este projeto está sob a licença MIT.


