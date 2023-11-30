<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';

	import moments from '$lib/data/filtered_data.json';

	let map: Map | undefined;
	let mapContainer: HTMLDivElement;

	const maptilerApiKey = 'SRfJh1CuGiISgDoqUg55';
	const maptilerMapReference = 'd27741ff-e220-4106-a5a1-aedace679204';
	const initialState = { lng: -73.567256, lat: 45.501689, zoom: 12.5 };

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

		map.on('load', () => {
			if (map) {
				map.addSource('moments', {
					type: 'geojson',
					data: moments
				});

				map.addLayer({
					id: 'moments-layer',
					type: 'circle',
					source: 'moments',
					paint: {
						'circle-radius': 8,
						'circle-color': 'black'
					}
				});
			}
		});
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
	#map {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
