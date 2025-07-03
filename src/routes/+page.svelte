<!-- src/routes/+page.svelte -->

<script lang="ts">
	// Importações SvelteKit e utilitários
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { fade } from 'svelte/transition';

	// Utilitário de debounce para evitar chamadas excessivas ao alterar o nome
	import { debounce } from '$lib/utils/debounce';

	// Componentes da interface
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Estilos globais
	import '../styles/global.css';

	// Tipo de dado fornecido pela função `load` da página
	import type { PageData } from './$types';

	// Dados recebidos do backend (carregados via load function)
	export let data: PageData;

	// Estado local para o nome digitado no input
	let nome = '';

	// Store derivada que extrai o parâmetro 'name' da URL
	const nomeDaURLStore = derived(page, ($page) => $page.url.searchParams.get('name') || '');

	// Atualiza o valor do input com o valor do parâmetro da URL ao montar o componente
	onMount(() => {
		const unsubscribe = nomeDaURLStore.subscribe((value) => {
			nome = value;
		});
		return unsubscribe;
	});

	// Função que atualiza a URL com debounce ao digitar o nome
	const atualizarURL = debounce((nome: string) => {
		if (nome) {
			goto(`/?name=${encodeURIComponent(nome)}`, { replaceState: true });
		} else {
			goto('/', { replaceState: true });
		}
	}, 700);

	// Sempre que o nome mudar, atualiza a URL após o debounce
	$: atualizarURL(nome.trim());
</script>

<!-- Estrutura principal da aplicação -->
<div class="app">
	<div class="layout">
		<Header />

		<main class="main">
			<h2 class="title">Estime a idade pelo nome</h2>

			<!-- Campo de input com bind para o nome -->
			<div class="input-wrapper">
				<label for="nome" class="sr-only">Digite um nome</label>
				<input
					id="nome"
					placeholder="Digite um nome"
					aria-label="Digite um nome para estimar a idade"
					bind:value={nome}
					on:input={() => {}}
				/>
			</div>

			<!-- Exibe os resultados se a idade foi retornada -->
			{#if data?.age}
				<div class="button-back" in:fade>
					<button on:click={() => {
						nome = '';
						goto('/');
					}}>
						Voltar para o início
					</button>
				</div>

				<h2 class="results-title" in:fade>Resultados</h2>
				<p class="result" in:fade>Nome: {data.name}</p>
				<p class="result" in:fade>Idade estimada: {data.age}</p>
				<p class="result" in:fade>Com base em: {data.count} registros</p>

			<!-- Se houve busca, mas sem resultado -->
			{:else if $page.url.searchParams.get('name')}
				<p class="result" in:fade>Nenhum resultado encontrado para esse nome.</p>
			{/if}
		</main>

		<Footer />
	</div>
</div>
