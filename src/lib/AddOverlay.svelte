<script lang="ts">
	import { addOverlayVisible } from '../stores';
	import ActionButton from './ActionButton.svelte';
	import CloseButton from './CloseButton.svelte';

	function closeAddOverlay() {
		addOverlayVisible.update(() => false);
	}
</script>

<aside class="overlay overlay--add">
	<div class="action-button-container">
		<CloseButton functionOnClick={closeAddOverlay} position="right">close add overlay</CloseButton>
	</div>
	<div class="overlay__outer">
		<div class="overlay__content">
			<section>
				<div class="overlay__section-title">How to add to the map</div>

				<div class="overlay__section-text">
					<ol>
						<li>Click on the location of your story.</li>
						<li>Share your story in the the text box below.</li>
						<li>Click the 'ADD' button.</li>
					</ol>
					<br />
					<textarea id="txt_contents" class="subform"></textarea>
					<div class="recaptcha-text">
						This site is protected by reCAPTCHA and the Google
						<a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
							>Privacy Policy</a
						>
						and
						<a href="https://policies.google.com/terms" target="_blank" rel="noopener"
							>Terms of Service</a
						> apply.
					</div>
					<ActionButton link="">Add</ActionButton>
				</div>
			</section>
		</div>
	</div>
</aside>

<style>
	.overlay {
		height: 100%;
		position: fixed;
		z-index: var(--overlay-z-index);
		top: 0;
		background-color: var(--color-pink);
		overflow-x: hidden;
	}

	.overlay__outer {
		width: calc(40vw - 2px);
		padding: 8px;
	}

	.overlay__section-title {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--color-dark);
		display: block;
		font-weight: bold;
		text-transform: uppercase;
		padding-bottom: 4px;
		border-bottom: 2px solid var(--color-dark);
	}

	.overlay__section-text {
		text-decoration: none;
		color: var(--color-dark);
		display: block;
		margin-top: 1em;
		font-size: 1.1rem;
	}

	.overlay__section-text > *:first-child {
		margin-top: 0;
	}

	.overlay__section-text > *:last-child {
		margin-bottom: 0;
	}

	a {
		text-decoration: underline;
		text-decoration-color: var(--color-pink-bright);
		color: var(--color-dark);
	}

	@media (min-width: 800px) {
		.overlay__outer {
			width: calc(40vw - 2px);
		}

		.overlay--add {
			top: 0;
			right: -2px;
			border-top: none;
			border-left: var(--color-dark) solid 2px;
			height: 100%;
			box-shadow: -4px 0px 6px 0px rgba(0, 0, 0, 0.5);
		}

		.overlay__content {
			margin: 0;
			height: 125%;
		}
	}

	.recaptcha-text {
		margin-top: 0.5em;
		font-size: 0.75em;
	}

	.subform {
		margin: auto;
		text-align: left;
		padding-left: 0;
		padding-top: 0;
		padding-bottom: 0.4em;
		padding-right: 0.4em;
		width: 100%;
		height: 18em;
		font-size: 12pt;
		background-color: #f0cbdd;
		border: 2px solid var(--color-dark);
	}

	ol {
		text-align: left;
		padding-left: 1em;
	}

	ol li:not(:first-child) {
		margin-top: 0.5em;
	}

	textarea {
		font-family: 'Apfel Grotezk', sans-serif;
	}

	.action-button-container {
		right: 0;
	}
</style>
