<script lang="ts">
	import AddOverlay from '$lib/AddOverlay.svelte';
	import InfoOverlay from '$lib/InfoOverlay.svelte';
	import Map from '$lib/Map.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import { addOverlayVisible, infoOverlayVisible } from '../stores';
</script>

<NavBar></NavBar>
{#if $infoOverlayVisible}
	<InfoOverlay></InfoOverlay>
{/if}
{#if $addOverlayVisible}
	<AddOverlay></AddOverlay>
{/if}
<Map></Map>

<style>
	@import '$lib/style.css';
</style>
