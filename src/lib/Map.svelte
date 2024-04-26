<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Map, NavigationControl, Popup, type LngLatLike } from 'maplibre-gl';
	import { getMomentText } from '$lib/getMomentText';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { addOverlayVisible } from '../stores';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import markerImage from '$lib/assets/marker.png';

	import moments from '$lib/data/filtered_data_id_only.json';

	let map: Map;
	let mapContainer: HTMLDivElement;
	let openPopup = false;

	const maptilerApiKey = 'SRfJh1CuGiISgDoqUg55';
	const maptilerMapReference = 'd27741ff-e220-4106-a5a1-aedace679204';
	const initialState = { lng: -73.567256, lat: 45.501689, zoom: 12.5 };

	

	async function getMoment(id: number) {
		try {
			const response = await fetch(`/moment/${id}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error fetching moment:', error);
			return '';
		}
	}

	function openAddOverlay(e: any) {
		if(openPopup == true) {
			localStorage.setItem('addCurrentLongLat', JSON.stringify({ lng: e.lngLat.lng, lat: e.lngLat.lat }));
			map.getCanvas().style.cursor = 'pointer';
			addOverlayVisible.update(() => true);
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
				data: moments
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
					"icon-anchor": "bottom"
				},
				paint: {}
			});


			map.on('click', function (e) {
				openAddOverlay(e);
			});

			map.on('click', 'moments-layer', function (e) {


				if (e.features && e.features.length > 0) {
					const feature = e.features[0];

					if (feature.geometry.type === 'Point') {
						const coordinates = (feature.geometry as GeoJSON.Point).coordinates;


						getMoment(feature.properties.id)
							.then((text) => {
								const description = text;
								if (coordinates.length === 2) {
									new Popup({offset: 40})
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
					}
				}
			});

			// Change the cursor to a pointer when the mouse is over the moments layer.
			map.on('mouseenter', 'moments-layer', function () {
				map.getCanvas().style.cursor = 'pointer';
			
				openPopup = false;
			});
			
			// Change it back to a pointer when it leaves.
			map.on('mouseleave', 'moments-layer', function () {
				map.getCanvas().style.cursor = '';
				openPopup = true;
			});
		});

		const app = new SvelteToast({
		// Set where the toast container should be appended into
		target: document.body,
		props: {
			options: {
				// Optionally set default options here
			}
		}
	});
	
	toast.push(
			// 'Your story was successfully submitted. It will appear publicly on the map once it has been approved by our moderators.',
			'<a style="color:var(--color-pink);text-decoration:unset;" href="https://www.patreon.com/queeringthemap" rel="noopener" target="_blank"><span style="color:var(--color-pink);text-decoration:underline;">DONATE</span> <span style="color:var(--color-pink);">to Queering the Map to help us stay online.</span></a> ',
			{
				target: 'new',
				classes: ['toastlinkDonate'],
				initial: 0,
				theme: {
					'--toastBarHeight': 0
				}
			}
		);
	});

	function handleClick() {
		document.addEventListener('click', (e) => {
			if(e){
			if(e.target.className) {
				if (e.target.className.includes('_toastMsg')&& (e.target.querySelector('a'))) {
					e.target.querySelector('a').click();
				}
			}
		}
		});
	}

	onMount(() => {
		handleClick();
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});
</script>

<div id="map" bind:this={mapContainer}></div>
<div class="wrap">
	<SvelteToast target="new" options={{ initial: 0, intro: { y: -64 } }} />
  </div>

<style>

	#map {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
