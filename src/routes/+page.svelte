<script lang="ts">
	import { onMount } from 'svelte';
	import { addOverlayVisible, infoOverlayVisible } from '../stores';
	import qtm_sharing_image from '$lib/assets/qtm_sharing_image.jpg';

	let AddOverlay, InfoOverlay, Map, NavBar, DonatePopup;

	onMount(async () => {
		await Promise.all([
			import('$lib/style.css'),
			import('$lib/maplibre_style.css'),
			import('$lib/navbar_buttons.css')
		]);

		const AddOverlayModule = await import('$lib/AddOverlay.svelte');
		AddOverlay = AddOverlayModule.default;

		const InfoOverlayModule = await import('$lib/InfoOverlay.svelte');
		InfoOverlay = InfoOverlayModule.default;

		const MapModule = await import('$lib/Map.svelte');
		Map = MapModule.default;

		const NavBarModule = await import('$lib/NavBar.svelte');
		NavBar = NavBarModule.default;

		const DonatePopupModule = await import('$lib/DonatePopup.svelte');
		DonatePopup = DonatePopupModule.default;
	});
</script>

<svelte:head>
	<title>QUEERING THE MAP</title>
	<meta
		name="description"
		content="Queering the Map is a community generated counter-mapping platform for digitally archiving LGBTQ2IA+ experience in relation to physical space."
	/>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.queeringthemap.com/" />
	<meta property="og:title" content="Queering The Map" />
	<meta property="og:image" content={qtm_sharing_image} />
	<meta
		property="og:description"
		content="Queering the Map is a community generated counter-mapping platform for digitally archiving LGBTQ2IA+ experience in relation to physical space."
	/>
	<meta property="og:site_name" content="Queering The Map" />
	<meta property="og:locale" content="en_US" />
	<meta name="google-site-verification" content="J-oUgPBYWRXkPhvqF8XBrDtrA-qu8pXiMiYPd3QrfhE" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Queering The Map" />
	<meta
		name="twitter:description"
		content="Queering the Map is a community generated counter-mapping platform for digitally archiving LGBTQ2IA+ experience in relation to physical space."
	/>
	<meta name="twitter:image" content={qtm_sharing_image} />
</svelte:head>

{#if NavBar}
	<svelte:component this={NavBar} />
{/if}
{#if $infoOverlayVisible && InfoOverlay}
	<svelte:component this={InfoOverlay} />
{/if}
{#if $addOverlayVisible && AddOverlay}
	<svelte:component this={AddOverlay} />
{/if}
{#if Map}
	<svelte:component this={Map} />
{/if}
{#if DonatePopup}
	<svelte:component this={DonatePopup} />
{/if}
