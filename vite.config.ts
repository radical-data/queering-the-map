import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					initialDataChunk: [
						path.resolve(__dirname, 'src/lib/data/filtered_data_id_only.json'),
					],
				}
			}
		}
	}
});
