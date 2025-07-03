<!-- src/lib/components/Header.svelte -->

<!--
  Componente de cabeçalho principal da aplicação.
  Contém o logotipo (SVG + nome do app) e navegação simples.
-->

<header class="header">
	<!-- Logotipo com SVG e nome do app -->
	<div class="logo">
		<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
		</svg>
		<h2>AgeGuesser</h2>
	</div>

	<!-- Navegação principal -->
	<nav class="nav">
		<!-- Botão de navegação para o início -->
		<a href="/">Início</a>

		<!-- Link externo para a Voltera, abre em nova aba -->
		<a
			href="https://voltera.com.br/"
			target="_blank"
			rel="noopener noreferrer"
			class="nav-button"
		>
			Sobre
		</a>
	</nav>
</header>
