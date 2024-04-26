<script lang="ts">
	import { addOverlayVisible,  infoOverlayVisible, infoOverlayActiveTab} from '../stores';
	import CloseButton from './CloseButton.svelte';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import { onMount } from 'svelte';

	

	const app = new SvelteToast({
		// Set where the toast container should be appended into
		target: document.body,
		props: {
			options: {
				// Optionally set default options here
			}
		}
	});
	function openInfoOverlay(tabActive: number) {
		infoOverlayVisible.update(() => true);
		infoOverlayActiveTab(tabActive);
	
	}

	function closeAddOverlay() {
		addOverlayVisible.update(() => false);
	}

	function retrieveLongLat() {
		let longLat = localStorage.getItem('addCurrentLongLat');
		// if (removeLongLat) {
		// 	localStorage.setItem('addCurrentLongLat', '');
		// }
		return longLat;
	}

	async function submitAndShowToastAdd(event: { currentTarget: HTMLFormElement | undefined }) {
		if (retrieveLongLat() == '' || retrieveLongLat() == null) {
			toast.push('Please click on the map to select a location for your story.', {
				// initial: 0,
				theme: {
					'--toastBarHeight': 0
				}
			});
		} else {
			const dataX = new FormData(event.currentTarget);
			const response = await fetch((event.currentTarget as HTMLFormElement).action, {
				method: 'POST',
				body: dataX
			});

			await response.text();

			toast.push(
				'Your story was successfully submitted. It will appear publicly on the map once it has been approved by our moderators.',
				{
					// initial: 0,
					theme: {
						'--toastBarHeight': 0
					}
				}
			);
			
			closeAddOverlay();
		}
	}
</script>

<aside class="overlay overlay--add">
	
	<div class="action-button-container">
		<div>
			<div class="bordered"></div>
			<div class="bordered"></div>
		</div>
		<div>
			<div class="bordered" style="border-right: 0px;"></div>
			<div class="bordered" style="border-right: 0px;"></div>
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

					<form
						action="https://bapol.com.br/queeringthemap/email.php"
						method="POST"
						on:submit|preventDefault={submitAndShowToastAdd}
					>
						<textarea required id="txt_contents" name="txt_contents" class="subform"></textarea>

						<!-- This hidden input sends the current long/lat to the server: -->
						<input required type="hidden" name="addCurrentLongLat" value={retrieveLongLat()} />

						<div class="recaptcha-text">
							By submitting I agree to the <a href="/" on:click|preventDefault={() => openInfoOverlay(6)} target="_blank" rel="noopener"
								>Terms of Use</a
							> and <a href="/" on:click|preventDefault={() => openInfoOverlay(7)} target="_blank" rel="noopener"
								>Privacy Policy</a
							>
						</div>
						<input class="submit_button" type="submit" value="ADD" />
					</form>
				</div>
			</section>
		</div>
	</div>
</aside>

<style>
	.submit_button {
		display: inline-block;
		border: 1.01px solid var(--color-dark);
		background: var(--color-pink);
		color: var(--color-dark);
		cursor: pointer;
		padding: 10px 0px;
		text-align: center;
		text-transform: uppercase;
		text-decoration: none;
		box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
		transition-property: color, border-color, background-color;
		transition-duration: 300ms;
		transition-timing-function: ease;
		width: 100%;
		text-transform: uppercase;
		font-size: 20px;
		margin-top: 1rem;
	}

	.submit_button:hover {
		background-color: black;
		color: var(--color-pink);
	}

	.partial_div-numbered span {
		border: 1.01px solid var(--color-dark);
		border-radius: 50%;
		min-width: 22px;
		height: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 5px;
		margin-top: 5px;
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
		width: calc(40vw);
		padding: 0.8em;
	}

	.overlay__section-title {
		text-decoration: none;
		font-size: 15px;
		color: var(--color-dark);
		display: block;
		font-weight: 500;
		padding-bottom: 4px;
		padding-top: 1em;
		padding-left: 2.05rem;
		font-weight: bold;
	}

	.overlay__section-text {
		text-decoration: none;
		color: var(--color-dark);
		display: block;
		margin-top: 1em;
		font-size: 15px;
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
	}
	
	@media (max-width: 800px) {
		.overlay__section-title {
		padding-left: 1.05rem;
	}
	
	.partial_div-numbered {
		padding-left: 0.5em;
	}
		.overlay--add,
		.overlay__outer {
			width: 100%;
		}
		.overlay__outer {
			max-width: 100% !important;
			padding-top: 0px;
        padding-bottom: 0px;
		box-sizing: border-box;

		}
		.overlay__content {
			max-width: 100%;
		}
		.overlay--add textarea {
		padding: 10px;
			width: 99%;
			height: 135px;
		}
		.overlay--add {
			border: 1.01px solid var(--color-dark);
        height: 50vh;
        position: fixed;
        top: unset;
        width: calc(100vw - 18px);
        left: 50%;
        bottom: 1%;
        transform: translateX(-50%);
        min-height: 439px;
		max-height: 439px;
		z-index: 999999;
		}
	}
	@media (min-width: 800px) and (max-width: 930px){
		.overlay--add {
		 min-height: 520px;
		max-height: 520px;
		}
	}
	@media (min-width: 800px) {
		.overlay__outer {
			width: calc(40vw);
			padding: 0em;
		}
		.overlay__outer form {
			padding: 0.8em;
		}
	
		.overlay--add {
			border-top: none;
			border-left: var(--color-dark) solid 1px;
			height: 100%;
			box-shadow: -4px 0px 6px 0px rgba(0, 0, 0, 0.5);
			top: 9px;
        right: 9px !important;
			border: 1.01px solid;
			height: 519px;
			z-index: 199;
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
		border: 1.01px solid var(--color-dark);
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
		border-right: 1.01px solid var(--color-dark);
		border-bottom: 1.01px solid var(--color-dark);
		height: 21.0px;
	}
	.overlay--add textarea {
		box-sizing: border-box !important;
		padding: 10px !important;
	}
</style>
