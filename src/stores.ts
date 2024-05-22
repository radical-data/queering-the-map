import { writable } from "svelte/store";

export const infoOverlayVisible = writable(false);
export const addOverlayVisible = writable(false);
export const activeMarkerCoords = writable<[number, number] | null>(null);