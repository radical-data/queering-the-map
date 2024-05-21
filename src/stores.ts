import { writable } from "svelte/store";

interface MarkerCoords {
    lng: number
    lat: number
}

export const infoOverlayVisible = writable(false);
export const addOverlayVisible = writable(false);
export const activeMarkerCoords = writable<MarkerCoords | null>(null);