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
		<div>
			<div class="bordered">aaaaaaaaaa</div>
			<div class="bordered">aaaaaaaaaa</div>
		</div>
		<div>
			<div class="bordered">aaaaaaaaaa</div>
			<div class="bordered">aaaaaaaaaa</div>
		</div>
			
		<CloseButton functionOnClick={closeAddOverlay} position="right">close add overlay</CloseButton>
	</div>
	<div class="overlay__outer">
		<div class="overlay__content">
			<section>
				<div class="overlay__section-title">Add Your Story</div>

				<div class="overlay__section-text">
					<div class="partial_div-numbered">
						<span>1</span>Click on the location of your story on the map.
					</div>
					<div class="partial_div-numbered">
						<span>2</span>Share your story in the the text box below.
					</div>
					<div class="partial_div-numbered"><span>3</span>Click the Add button.</div>
					<br />
					<textarea id="txt_contents" class="subform"></textarea>
					<div class="recaptcha-text">
						By submitting I agree to
						<a href="https://policies.google.com/terms" target="_blank" rel="noopener"
							>Terms of Use</a
						>

						and
						<a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
							>Privacy Policy</a
						>
					</div>
					<ActionButton link="">ADD</ActionButton>
				</div>
			</section>
		</div>
	</div>
</aside>

<style>
	.partial_div-numbered span {
		border: 1px solid var(--color-dark);
		border-radius: 50%;
		min-width: 22px;
		height: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
		margin-top: 10px;
		margin-right: 10px;
	}
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
		padding: 0.8em;
	}

	.overlay__section-title {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--color-dark);
		display: block;
		font-weight: 500;
		padding-bottom: 4px;
		border-top: 2px solid var(--color-dark);
		padding-top: 10px;
	}

	.overlay__section-text {
		text-decoration: none;
		color: var(--color-dark);
		display: block;
		margin-top: 1em;
		font-size: 1.1rem;
	}
	.overlay__section-text > div {
		display: flex;
		align-items: center;
	}
	.overlay__section-text > *:first-child {
		margin-top: 0;
	}

	.overlay__section-text > *:last-child {
		margin-bottom: 0;
	}

	a {
		text-decoration: underline;
		text-decoration-color: var(--color-dark);
		color: var(--color-dark);
		margin-left: 3px;
		margin-right: 3px;
	}

	@media (min-width: 800px) {
		.overlay__outer {
			width: calc(40vw - 2px);
		}

		.overlay--add {
			border-top: none;
			border-left: var(--color-dark) solid 2px;
			height: 100%;
			box-shadow: -4px 0px 6px 0px rgba(0, 0, 0, 0.5);
			top: 0.8em;
			right: 0.8em !important;
			border: 1px solid;
			height: 62vh;
		}

		.overlay__content {
			margin: 0;
			height: 125%;
			left: 9px;
			top: 9px;
			max-height: 97vh;
			height: unset;
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
		height: 12.7em;
		font-size: 12pt;
		background-color: #f4b9d6;
		border: 2px solid var(--color-dark);
	}

	textarea {
		font-family: 'Apfel Grotezk', sans-serif;
	}

	.action-button-container {
	    display: flex;
    flex-direction: row;
    justify-content: space-around;
	}
	.action-button-container > div {
		width: 50%;
	}
	.action-button-container .bordered {
		border: 1px solid var(--color-dark);
		height: 20px;
	}
</style>
