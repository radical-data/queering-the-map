<script lang="ts">
	import { infoOverlayVisible } from '../stores';

	import PageBar from "./PageBar.svelte";
	import ActionButton from './ActionButton.svelte';
	import OverlayNavBar from './OverlayNavBar.svelte';

	import InfoAbout from './info-copy/InfoAbout.svelte';
	import InfoSupportUs from './info-copy/InfoSupportUs.svelte';
	import InfoModeration from './info-copy/InfoModeration.svelte';
	import InfoPress from './info-copy/InfoPress.svelte';

	import InfoFAQs from './info-copy/InfoFAQs.svelte';
	import InfoTermsOfUse from './info-copy/InfoTermsOfUse.svelte';
	import InfoPrivacyPolicy from './info-copy/InfoPrivacyPolicy.svelte';
	import InfoContact from './info-copy/InfoContact.svelte';

	const options = {
		about: InfoAbout,
		support: InfoSupportUs,
		moderation: InfoModeration,
		press: InfoPress,
		faqs: InfoFAQs,
		terms: InfoTermsOfUse,
		privacy: InfoPrivacyPolicy,
		contact: InfoContact,
	}

	let selectedOptionId = "about"

	function closeInfoOverlay() {
		infoOverlayVisible.update(() => false);
	}
</script>

<aside class="overlay overlay--info">
	<OverlayNavBar
		options={[{
			id: 'about',
			title: 'About'
		}, {
			id: 'support',
			title: 'Support Us'
		}, {
			id: 'moderation',
			title: 'Moderation'
		}, {
			id: 'press',
			title: 'Press'
		}]}
		selectedOptionId={selectedOptionId}
		onOptionSelected={optionId => selectedOptionId = optionId}

		onCloseButtonClick={closeInfoOverlay}
	/>
	<div class="overlay__outer">
		<svelte:component this={options[selectedOptionId]} />
	</div>
	<PageBar
		options={[{
			id: 'faqs',
			title: 'FAQs'
		}, {
			id: 'terms',
			title: 'Terms of Use'
		}, {
			id: 'privacy',
			title: 'Privacy Policy'
		}, {
			id: 'contact',
			title: 'Contact'
		}]}
		selectedOptionId={selectedOptionId}
		onOptionSelected={optionId => selectedOptionId = optionId}
		
		isBottom={true}
	/>
</aside>

<style>
	.overlay {
		height: calc(100% - 9px - 9px);
		position: fixed;
		z-index: var(--overlay-z-index);
		top: 0;
		background-color: var(--color-pink);
		overflow-x: hidden;
		margin: 9px;
		display: flex;
		flex-direction: column;
	}

	.overlay__outer {
		width: 0;
		padding: 1em 8px;
		flex-grow: 1;
	}

	section {
		margin-top: 2em;
	}

	section:first-child {
		margin-top: -1.2em;
	}

	h2 {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--color-dark);
		display: block;
		font-weight: bold;
		text-transform: uppercase;
		padding-bottom: 4px;
		border-bottom: 2px solid var(--color-dark);
	}

	@media (min-width: 800px) {
		h2 {
			font-size: 1.4rem;
		}
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

	a:not(.closebtn):hover,
	a:not(.closebtn):focus {
		color: var(--color-pink-bright);
	}

	.overlay--info {
		left: 0;
	}

	@media (min-width: 800px) {
		.overlay__outer {
			width: calc(40vw - 2px);
		}

		.overlay--info {
			border: var(--color-dark) solid 1px;
		}

		.overlay__content {
			margin: 0;
			height: 125%;
		}
	}
</style>
