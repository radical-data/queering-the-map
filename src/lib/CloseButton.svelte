<script lang="ts">
	import closeButton from '$lib/assets/close.svg';
	import closeButtonHover from '$lib/assets/close-hover.svg';
	export let functionOnClick: any;
	export let position: 'right' | 'left' = 'left';
	let closeButtonButton = closeButton;
</script>

<button
	on:click={functionOnClick}
	class="close-btn"
	aria-label="close overlay"
	style={position === 'right' ? 'right: 0' : ''}
>
	<span class="close-btn__text">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<img src={closeButtonButton} on:mouseover={()=>{
			closeButtonButton = closeButtonHover;
		}} on:mouseleave={()=>{
			closeButtonButton = closeButton;
		}} alt="close" />
	</span>
</button>

<style>
	button {
		z-index: 999;
	}

	.close-btn img {
		width: 45px;
		border-bottom: 1px solid black;
		margin-bottom: -1px;
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
