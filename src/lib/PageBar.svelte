<script lang="ts">
	import type { PageBarOption } from './types'
	import { chunkArray } from './utils';

	export let options: PageBarOption[];
	export let selectedOptionId: string;
	export let onOptionSelected: (option: string) => void;

	export let isBottom: boolean;
</script>

<div class="overlay-pages">
	{#each chunkArray(options, 2) as childOptions}
		<div class="overlay-page-row">
			{#each childOptions as option}
				<button class="overlay-page" class:is-bottom={isBottom} class:selected={option.id === selectedOptionId} on:click={() => onOptionSelected(option.id)}>
					<p>{option.title}</p>
				</button>
			{/each}
		</div>
	{/each}
</div>

<style>
	.overlay-pages {
		display: flex;
		flex-direction: column;
		height: 45px;
	}

	.overlay-page-row {
		display: flex;
		flex-grow: 1;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.overlay-page {
		display: flex;
		width: 50%;
		height: 100%;
		align-items: center;
		justify-content: center;
		border: 0;
		background: 0;
	}

	.overlay-page.is-bottom {
		border-top: 1px #000000 solid;
	}

	.overlay-page:not(.is-bottom) {
		border-bottom: 1px #000000 solid;
	}

	.overlay-page.selected {
		color: #FEC3E0;
		background-color: #231F20;
	}

	.overlay-page:first-child {
		border-right: 1px #000000 solid;
	}

	.overlay-page p {
		margin: 0;
	}

	span.overlay-page-button {
		background-color: green;
	}
</style>
