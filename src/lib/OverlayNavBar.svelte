<script lang="ts">
	import type { PageBarOption } from './types'

	export let options: PageBarOption[];
	export let selectedOptionId: String;
	export let onOptionSelected: (option: string) => void;

	export let onCloseButtonClick: () => void;
	
	import PageBar from "./PageBar.svelte";
	import CloseButton from "./CloseButton.svelte";
</script>

<div class="overlay-nav-bar">
	<CloseButton functionOnClick={onCloseButtonClick}>close info overlay</CloseButton>
	<div class="overlay-page-bar-wrapper">
		<PageBar
			options={options}
			selectedOptionId={selectedOptionId}
			onOptionSelected={onOptionSelected}
		/>
	</div>
</div>

<style scoped>
	div.overlay-nav-bar {
		display: flex;
		height: calc(45px - .5px);
	}

	div.overlay-page-bar-wrapper {
		flex-grow: 1;
	}
</style>
