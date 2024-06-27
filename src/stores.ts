import { writable } from 'svelte/store';

interface MarkerCoords {
  lng: number;
  lat: number;
}

export const infoOverlayVisible = writable(false);
export const addOverlayVisible = writable(false);

export const infoOverlayActiveTab = (active_tab: number) => {
  if (typeof active_tab === 'number') {
    localStorage.setItem('active_tab', active_tab.toString());
    const root = document;
    (
      root.querySelectorAll('.info__tabs button')[
        active_tab - 1
      ] as HTMLButtonElement
    ).click();
  }
};

export const activeMarkerCoords = writable<MarkerCoords | null>(null);
