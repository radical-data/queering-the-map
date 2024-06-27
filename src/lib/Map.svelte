<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { GeoJSONSource, Map, NavigationControl, Popup, type LngLatLike } from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';
	import markerImage from '$lib/assets/marker.png';
	import markerHoveredImage from '$lib/assets/marker-hovered.png';
	import style from '$lib/data/pmtiles/style.json';
	import addMarkerImage from '$lib/assets/add-marker.png';
	import { activeMarkerCoords, addOverlayVisible } from '../stores';
	import type { FeatureCollection, Point, GeoJsonProperties } from 'geojson';

	let map: Map;
	let mapContainer: HTMLDivElement;
	let isMomentLayerClicked = false;

	const initialState = { lng: -73.567256, lat: 45.501689, zoom: 12.5 };

	const markerHeight = 39;
	const markerWidth = 10;
	const markerCenter = 28;
	const markerId = 'moments';
	const markerLayerId = 'moments-layer';
	const markerHoveredLayerId = 'moments-hovered-layer';
	const activeMarkerSourceId = 'active-marker-source';
	const activeMarkerLayerId = 'active-marker-layer';

	const activeMarkerGeoJSON: FeatureCollection<Point, GeoJsonProperties> = {
		type: 'FeatureCollection',
		features: []
	};

	async function getMoment(id?: number | string) {
		try {
			const response = await fetch(`/moment/${id}`);
			const moment = await response.json();
			return moment.description;
		} catch (error) {
			console.error('Error fetching moment:', error);
			return '';
		}
	}

	async function loadImageAndAddToMap(map: Map, imageUrl: string, imageId: string) {
		try {
			const image = await map.loadImage(imageUrl);
			map.addImage(imageId, image.data);
		} catch (error) {
			console.error(`Error loading image (${imageUrl}):`, error);
		}
	}

	function addPinLayer(
		map: Map,
		layerId: string,
		sourceId: string,
		iconImage: string,
		paint: object = {}
	) {
		map.addLayer({
			id: layerId,
			type: 'symbol',
			source: sourceId,
			layout: {
				'icon-allow-overlap': true,
				'icon-image': iconImage,
				'icon-size': 0.5,
				'icon-anchor': 'bottom'
			},
			paint: paint
		});
	}

	onMount(() => {
		map = new Map({
			container: mapContainer,
			style: style,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom,
			minZoom: 2,
			maxZoom: 18
		});
		map.addControl(new NavigationControl({ showCompass: false }), 'bottom-right');
		map.keyboard.enable();

		map.on('load', async () => {
			map.addSource(markerId, {
				type: 'geojson',
				data: 'data/moments.json'
			});

			try {
				await loadImageAndAddToMap(map, markerImage, 'marker');
				await loadImageAndAddToMap(map, markerHoveredImage, 'marker-hovered');
				await loadImageAndAddToMap(map, addMarkerImage, 'add-marker');
			} catch (error) {
				console.error('Error loading marker images:', error);
			}

			addPinLayer(map, markerLayerId, markerId, 'marker');
			addPinLayer(map, markerHoveredLayerId, markerId, 'marker-hovered', {
				'icon-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0]
			});

			map.addSource(activeMarkerSourceId, {
				type: 'geojson',
				data: activeMarkerGeoJSON
			});
			addPinLayer(map, activeMarkerLayerId, activeMarkerSourceId, 'add-marker');

			map.on('click', markerLayerId, function (e) {
				isMomentLayerClicked = true;
				if (!e.features || e.features.length === 0) {
					return;
				}

				const feature = e.features[0];
				if (feature.geometry.type !== 'Point') {
					return;
				}

				const coordinates = (feature.geometry as Point).coordinates;
				if (typeof feature.id !== 'number') {
					console.error('Invalid feature id:', feature.id);
					return;
				}

				getMoment(feature.id)
					.then((text) => {
						const description = text;
						if (coordinates.length === 2) {
							new Popup({
								offset: {
									bottom: [0, -markerHeight],
									'bottom-left': [0, -markerHeight],
									'bottom-right': [0, -markerHeight],
									right: [-markerWidth, -markerCenter],
									left: [markerWidth, -markerCenter]
								},
								maxWidth: 'none'
							})
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

			let hoveredFeatureId: number | null = null;

			const pointerHoverHandler = (e) => {
				map.getCanvas().style.cursor = 'pointer';
				if (e.features && e.features.length > 0) {
					const newHoveredFeatureId = e.features[0].id as number;
					if (hoveredFeatureId !== null && hoveredFeatureId !== newHoveredFeatureId) {
						map.setFeatureState({ source: markerId, id: hoveredFeatureId }, { hover: false });
					}
					hoveredFeatureId = newHoveredFeatureId;
					map.setFeatureState({ source: markerId, id: hoveredFeatureId }, { hover: true });
				}
			};
			map.on('mouseenter', markerLayerId, pointerHoverHandler);
			map.on('mousemove', markerLayerId, pointerHoverHandler);

			map.on('mouseleave', markerLayerId, function () {
				map.getCanvas().style.cursor = '';
				if (hoveredFeatureId !== null) {
					map.setFeatureState({ source: markerId, id: hoveredFeatureId }, { hover: false });
					hoveredFeatureId = null;
				}
			});

			map.on('click', (e) => {
				if (isMomentLayerClicked) {
					isMomentLayerClicked = false;
					return;
				}

				const { lng, lat } = e.lngLat;
				activeMarkerCoords.set({ lng, lat });
				addOverlayVisible.set(true);
			});
		});
	});

	$: {
		if ($activeMarkerCoords) {
			activeMarkerGeoJSON.features = [
				{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: [$activeMarkerCoords.lng, $activeMarkerCoords.lat]
					},
					properties: {}
				}
			];

			const source = map?.getSource(activeMarkerSourceId) as GeoJSONSource;
			if (source) {
				source.setData(activeMarkerGeoJSON);
			}
		}
	}

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
