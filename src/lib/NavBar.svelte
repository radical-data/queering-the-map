<script>
	import logo from '$lib/assets/queering-the-map-logo.svg';
	import { infoOverlayVisible, addOverlayVisible } from '../stores';

	function openInfoOverlay() {
		infoOverlayVisible.update(() => true);
	}
	function openAddOverlay() {
		addOverlayVisible.update(() => true);
	}
</script>

<nav>
	{#if !$infoOverlayVisible}
		<button
			on:click={() => openInfoOverlay()}
			class="overlay-trigger overlay-trigger--info"
			id="info"
			aria-label="open info overlay"
		>
			<span class="overlay-trigger__title">
			<svg class="general_button__fadein" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="4 0 45 45"><g filter="url(#filter0_d_0_1)"><rect x="4" width="45" height="45" fill="#FEC3E0"></rect><rect x="4.5" y="0.5" width="44" height="44" stroke="black"></rect></g><g filter="url(#filter1_d_0_1)"><line x1="15" y1="22.5" x2="38" y2="22.5" stroke="black"></line></g><g filter="url(#filter2_d_0_1)"><line x1="15" y1="14.5" x2="38" y2="14.5" stroke="black"></line></g><g filter="url(#filter3_d_0_1)"><line x1="15" y1="30.5" x2="38" y2="30.5" stroke="black"></line></g><defs><filter id="filter0_d_0_1" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend></filter><filter id="filter1_d_0_1" x="11" y="22" width="31" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend></filter><filter id="filter2_d_0_1" x="11" y="14" width="31" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend></filter><filter id="filter3_d_0_1" x="11" y="30" width="31" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend></filter></defs></svg>
			</span>
		</button>
	{/if}

	<div id="logo">
		<img src={logo} alt="" />
	</div>

		<button
			on:click={openAddOverlay}
			class="overlay-trigger overlay-trigger--add"
			id="add"
			aria-label="open add overlay"
		>
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<svg class="general_button__fadein" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="4 4 45 45"><g filter="url(#filter0_d_0_1)"><rect x="4" y="4" width="45" height="45" fill="#FEC3E0"></rect><rect x="4.5" y="4.5" width="44" height="44" stroke="black"></rect></g><g filter="url(#filter1_d_0_1)"><rect x="4" y="4" width="45" height="45" fill="#FEC3E0"></rect><rect x="4.5" y="4.5" width="44" height="44" stroke="black"></rect></g><circle cx="26.5" cy="26.5" r="17" stroke="black"></circle><line x1="15" y1="26.5" x2="38" y2="26.5" stroke="black"></line><line x1="26.5" y1="15" x2="26.5" y2="38" stroke="black"></line><defs><filter id="filter0_d_0_1" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend></filter><filter id="filter1_d_0_1" x="0" y="0" width="53" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"></feBlend></filter></defs></svg>
		</button>
</nav>

<style>
	#logo {
		display: inline-block;
		position: absolute;
		text-align: center;
		top: 6px;
		width: 100%;
		margin: 0 auto;
		pointer-events: none;
		z-index: var(--logo-z-index);
	}
	@media (max-width: 800px) {
	#logo img {
height: 54px;		
	}
	}

	@media (min-width: 800px) {
		#logo img {
			width: 200px;

		}
	}

	.overlay-trigger {
		border: none;
		background-color: transparent;
		padding: 0;
		top: 0;
		font-size: 2.4em;
		cursor: pointer;
		font-weight: bold;
		position: fixed;
		z-index: var(--overlay-trigger-z-index);
		color: var(--color-dark);
	}

	
	@media (min-width: 800px) {
		.overlay-trigger {
			top: 0.5em;
		}
	}


	.overlay-trigger.overlay-trigger--info {
		left: 9px;
		top: 9px;
		text-shadow: 0px 0px 3px white;
		width: 45px;
	}

	


	
	.overlay-trigger.overlay-trigger--info .overlay-trigger__title {
		text-transform: uppercase;
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--info .overlay-trigger__title {
			display: initial;
		}
	}

	.overlay-trigger.overlay-trigger--add {
		right: 9px;
		top:   9px;
		width: 45px;
	}

	
</style>
