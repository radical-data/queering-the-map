import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { fetchAndWriteData } from './src/lib/scripts/fetchData';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			plugins: [
				{
					name: 'fetch-data',
					async buildStart() {
						console.log('fetching data from supabase');
						await fetchAndWriteData();
					},
				},
			],
		},
	}
});
