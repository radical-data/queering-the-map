<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl } from 'maplibre-gl';

	let map: Map | undefined;
	let mapContainer: HTMLDivElement;

	const maptilerApiKey = 'SRfJh1CuGiISgDoqUg55';
	const maptilerMapReference = 'd27741ff-e220-4106-a5a1-aedace679204';
	const initialState = { lng: -73.567256, lat: 45.501689, zoom: 13 };

	onMount(() => {
		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/${maptilerMapReference}/style.json?key=${maptilerApiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom,
			minZoom: 2,
			maxZoom: 18
		});
		map.addControl(new NavigationControl({ showCompass: false }), 'bottom-right');
		map.keyboard.enable();
	});

	onDestroy(() => {
		if (map) {
			map.remove();
			map = undefined;
		}
	});
</script>

<div id="map" bind:this={mapContainer}></div>

<style>
	@import 'maplibre-gl/dist/maplibre-gl.css';

	#map {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
