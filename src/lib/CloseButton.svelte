<script lang="ts">
	export let functionOnClick: any;
	export let position: 'right' | 'left' = 'left';

	import closeButtonIcon from '$lib/assets/close-button.svg';
</script>

<button
	on:click={functionOnClick}
	class="close-btn"
	aria-label="close overlay"
	style={position === 'right' ? 'right: 0' : ''}
>
	<img src={closeButtonIcon} alt="close" />
	<span class="close-btn__text"><slot /></span>
</button>

<style>
	button {
		z-index: 999;
	}

	.close-btn {
		border: 0;
		border-right: #000000 solid 1px;
		border-bottom: #000000 solid 1px;
		background-color: transparent;
		width: 45px;
		height: 45px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.close-btn:hover {
		cursor: pointer;
	}

	.close-btn__text {
		visibility: hidden;
		width: 0;
		height: 0;
		display: inline-block;
		overflow: hidden;
	}
</style>
