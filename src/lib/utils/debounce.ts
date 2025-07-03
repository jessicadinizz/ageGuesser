// src/lib/utils/debounce.ts

/**
 * Função utilitária debounce
 * 
 * Retorna uma versão "debounced" (com atraso) da função passada,
 * garantindo que ela só será executada após um determinado tempo
 * sem novas chamadas. Isso é útil para evitar múltiplas execuções
 * consecutivas, como em campos de busca.
 * 
 * @param fn - A função que será "atrasada"
 * @param delay - Tempo de espera (em ms) antes de executar (padrão: 500ms)
 * @returns Uma nova função que aplica o debounce
 */
export function debounce<T extends (...args: any[]) => void>(
	fn: T,
	delay = 500
): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>): void => {
		// Limpa o timeout anterior
		clearTimeout(timeout);

		// Inicia novo timeout
		timeout = setTimeout(() => {
			// Verifica se está no ambiente do navegador
			if (typeof window !== 'undefined') {
				fn(...args);
			}
		}, delay);
	};
}
