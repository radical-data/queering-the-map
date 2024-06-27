<script lang="ts">
  import '$lib/style.css';
  import '$lib/maplibre_style.css';
  import '$lib/navbar_buttons.css';
  import AddOverlay from '$lib/AddOverlay.svelte';
  import InfoOverlay from '$lib/InfoOverlay.svelte';
  import Map from '$lib/Map.svelte';
  import NavBar from '$lib/NavBar.svelte';
  import { addOverlayVisible, infoOverlayVisible } from '../stores';
  import qtm_sharing_image from '$lib/assets/qtm_sharing_image.jpg';
  import DonatePopup from '$lib/DonatePopup.svelte';
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
  <meta
    name="google-site-verification"
    content="J-oUgPBYWRXkPhvqF8XBrDtrA-qu8pXiMiYPd3QrfhE"
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Queering The Map" />
  <meta
    name="twitter:description"
    content="Queering the Map is a community generated counter-mapping platform for digitally archiving LGBTQ2IA+ experience in relation to physical space."
  />
  <meta name="twitter:image" content={qtm_sharing_image} />
</svelte:head>

<NavBar></NavBar>
{#if $infoOverlayVisible}
  <InfoOverlay></InfoOverlay>
{/if}
{#if $addOverlayVisible}
  <AddOverlay></AddOverlay>
{/if}
<Map></Map>
<DonatePopup></DonatePopup>
