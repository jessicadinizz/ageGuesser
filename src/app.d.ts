// src/app.d.ts

// Este arquivo fornece tipos globais para o projeto SvelteKit com TypeScript

/// <reference types="@sveltejs/kit" />
// Importa os tipos do SvelteKit automaticamente (rotas, stores, etc).

// Declaração de módulo para arquivos .svelte:
// Garante que o TypeScript reconheça e tipifique corretamente os componentes Svelte
declare module '*.svelte' {
	// SvelteComponentTyped é a classe base para componentes Svelte tipados
	export { SvelteComponentTyped as default } from 'svelte';
}
