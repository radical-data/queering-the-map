<script>
	import logo from '$lib/assets/queering-the-map-logo.webp';
	import infoButton from '$lib/assets/info.svg';
	import addButton from '$lib/assets/add.svg';
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
			on:click={openInfoOverlay}
			class="overlay-trigger overlay-trigger--info"
			id="info"
			aria-label="open info overlay"
		>
			<span class="overlay-trigger__title">Info</span>
			<img class="overlay-trigger__icon" src={infoButton} alt="info" />
		</button>
	{/if}

	<div id="logo">
		<img src={logo} alt="" />
	</div>

	{#if !$addOverlayVisible}
		<button
			on:click={openAddOverlay}
			class="overlay-trigger overlay-trigger--add"
			id="add"
			aria-label="open add overlay"
		>
			<img class="overlay-trigger__icon" src={addButton} alt="add" />
		</button>
	{/if}
</nav>

<style>
	#logo {
		display: inline-block;
		position: absolute;
		text-align: center;
		top: 1em;
		width: 100%;
		margin: 0 auto;
		pointer-events: none;
		z-index: var(--logo-z-index);
	}

	#logo img {
		width: 100px;
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

	.overlay-trigger .overlay-trigger__icon {
		display: block;
		width: 40px;
		height: auto;
	}

	@media (min-width: 800px) {
		.overlay-trigger .overlay-trigger__icon {
			top: 0.25em;
			width: 50px;
		}
	}

	.overlay-trigger.overlay-trigger--info {
		left: 0.25em;
		top: 0.25em;
		text-shadow: 0px 0px 3px white;
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--info {
			left: 0.5em;
		}
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--info .overlay-trigger__icon {
			display: none;
		}
	}

	.overlay-trigger.overlay-trigger--info .overlay-trigger__title {
		display: none;
		text-transform: uppercase;
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--info .overlay-trigger__title {
			display: initial;
		}
	}

	.overlay-trigger.overlay-trigger--add {
		right: 0.25em;
		top: 0.25em;
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--add {
			right: 0.5em;
		}
	}
</style>
