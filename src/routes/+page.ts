// src/routes/+page.ts

// Importa o tipo PageLoad gerado automaticamente pelo SvelteKit para tipar a função de carregamento
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	// Extrai o parâmetro 'name' da URL (ex: /?name=joao)
	const name = url.searchParams.get('name');

	// Se não houver nome, retorna um objeto padrão com valores nulos
	if (!name) {
		return { name: '', age: null, count: 0 };
	}

	// Faz a requisição para a API pública 'agify.io', que estima a idade com base no nome
	const res = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`);

	// Caso ocorra erro na requisição, retorna dados com idade nula
	if (!res.ok) {
		return { name, age: null, count: 0 };
	}

	// Define o tipo esperado da resposta da API
	const data: {
		name: string;
		age: number | null;
		count: number;
	} = await res.json();

	// Retorna os dados obtidos da API para uso na página
	return data;
};
