<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, Marker, Popup, type LngLatLike } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import markerImage from '$lib/assets/marker.png';
	import addMarkerImage from '$lib/assets/add-marker.png';
	import { activeMarkerCoords } from '../stores';

	let map: Map;
	let mapContainer: HTMLDivElement;
	let activeMarker: Marker | null = null;
	let isMomentLayerClicked = false;

	const maptilerApiKey = 'SRfJh1CuGiISgDoqUg55';
	const maptilerMapReference = 'd27741ff-e220-4106-a5a1-aedace679204';
	const initialState = { lng: -73.567256, lat: 45.501689, zoom: 12.5 };

	async function getMoment(id?: number) {
		try {
			const response = await fetch(`/moment/${id}`);
			const moment = await response.json();
			return moment.description;
		} catch (error) {
			console.error('Error fetching moment:', error);
			return '';
		}
	}

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
			map.addSource('moments', {
				type: 'geojson',
				data: '/moments'
			});

			map.loadImage(markerImage, (error, image) => {
				if (error) throw error;
				map.addImage('marker', image);
			});

			map.addLayer({
				id: 'moments-layer',
				type: 'symbol',
				source: 'moments',
				layout: {
					'icon-allow-overlap': true,
					'icon-image': 'marker',
					'icon-size': 0.5,
					'icon-anchor': 'bottom'
				},
				paint: {}
			});

			map.on('click', 'moments-layer', function (e) {
				isMomentLayerClicked = true;
				if (!e.features || e.features.length === 0) {
					return;
				}

				const feature = e.features[0];
				if (feature.geometry.type !== 'Point') {
					return;
				}

				const coordinates = (feature.geometry as GeoJSON.Point).coordinates;
				if (typeof feature.id !== 'number') {
					console.error('Invalid feature id:', feature.id);
					return;
				}
				getMoment(feature.id)
					.then((text) => {
						const description = text;
						if (coordinates.length === 2) {
							new Popup({ offset: 40 })
								.setLngLat(coordinates as LngLatLike)
								.setHTML(description)
								.addTo(map);
						} else {
							console.error('Invalid coordinates format');
						}
					})
					.catch((error) => {
						console.error('Error fetching moment:', error);
					});
			});

			// Change the cursor to a pointer when the mouse is over the moments layer
			map.on('mouseenter', 'moments-layer', function () {
				map.getCanvas().style.cursor = 'pointer';
			});

			// Change it back to default when it leaves
			map.on('mouseleave', 'moments-layer', function () {
				map.getCanvas().style.cursor = '';
			});

			map.on('click', (e) => {
				if (isMomentLayerClicked) {
					isMomentLayerClicked = false;
					return;
				}

				const { lng, lat } = e.lngLat;

				if (activeMarker === null) {
					const img = document.createElement('img');
					img.src = addMarkerImage;
					img.alt = 'Add Marker';
					img.style.height = '38.5px';

					activeMarker = new Marker({ draggable: true, element: img })
						.setLngLat([lng, lat])
						.addTo(map);
				} else {
					activeMarker.setLngLat([lng, lat]);
				}

				activeMarkerCoords.set([lng, lat]);
			});
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
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
