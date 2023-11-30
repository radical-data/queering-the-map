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
	<span class="close-btn__inner"></span>
	<span class="close-btn__text"><slot /></span>
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
		padding: 5px;
	}

	.close-btn:hover {
		cursor: pointer;
	}

	.close-btn__inner {
		position: relative;
		width: 24px;
		height: 24px;
		display: block;
	}

	.close-btn__inner:before,
	.close-btn__inner:after {
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background-color: var(--color-dark);
		position: absolute;
		top: 50%;
		left: 50%;
		transform-origin: center center;
	}

	.close-btn__inner:before {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.close-btn__inner:after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	.close-btn__text {
		visibility: hidden;
		width: 0;
		height: 0;
		display: inline-block;
		overflow: hidden;
	}
</style>
