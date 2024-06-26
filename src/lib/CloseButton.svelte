<script lang="ts">
	export let functionOnClick: any;
	export let position: 'right' | 'left' = 'left';
</script>

<button
	on:click={functionOnClick}
	class="close-btn"
	aria-label="close overlay"
	style={position === 'right' ? 'right: 0' : ''}
>
	<span class="close-btn__text">
		<svg
			class="general_button__fadein"
			xmlns="http://www.w3.org/2000/svg"
			fill="#f4b9d6"
			viewBox="0 0 45 45"
			><rect x="0.5" y="0.5" width="44" height="44" fill="#f4b9d6" stroke="black"></rect><line
				x1="15.3536"
				y1="14.6464"
				x2="31.617"
				y2="30.9099"
				stroke="black"
			></line><line x1="14.6464" y1="30.9099" x2="30.9099" y2="14.6464" stroke="black"></line></svg
		>
	</span>
</button>

<style>
	button {
		z-index: 999;
	}

	.close-btn {
		position: fixed;
		line-height: 1;
		border: none;
		background-color: transparent;
		overflow: hidden;
		padding: 0px;
	}

	.close-btn:hover {
		cursor: pointer;
	}
	.close-btn__text {
		display: inline-block;
		overflow: hidden;
	}
</style>
