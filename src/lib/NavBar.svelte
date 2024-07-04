<script>
  import logo from '$lib/assets/QTM_LOGO2024.png';
  import InfoButton from './InfoButton.svelte';
  import AddButton from './AddButton.svelte';
  import { infoOverlayVisible, addOverlayVisible } from '../stores';

  function openInfoOverlay() {
    infoOverlayVisible.update(() => true);
  }
  function openAddOverlay() {
    addOverlayVisible.update(() => true);
  }
</script>

<nav>
  {#if !$infoOverlayVisible}
    <button
      on:click={openInfoOverlay}
      class="overlay-trigger overlay-trigger--info"
      id="info"
      aria-label="open info overlay"
    >
      <InfoButton />
    </button>
  {/if}

  <div id="logo">
    <img src={logo} alt="" />
  </div>

  <button
    on:click={openAddOverlay}
    class="overlay-trigger overlay-trigger--add"
    id="add"
    aria-label="open add overlay"
  >
    <AddButton />
  </button>
</nav>

<style>
  /****************************************************************************/
  /* The logo */
  /****************************************************************************/

  #logo {
    display: inline-block;
    position: absolute;
    text-align: center;
    top: 6px;
    width: 100%;
    margin: 0 auto;
    pointer-events: none;
    z-index: var(--logo-z-index);
  }
  @media (max-width: 800px) {
    #logo img {
      height: 51px;
    }
  }

  @media (min-width: 800px) {
    #logo img {
      width: 200px;
    }
  }

  /****************************************************************************/
  /* The menu buttons (info and add). */
  /****************************************************************************/
  .overlay-trigger {
    border: none;
    background-color: transparent;
    padding: 0;
    top: 0;
    font-size: 2.4em;
    cursor: pointer;
    font-weight: bold;
    position: fixed;
    z-index: var(--overlay-trigger-z-index);
    color: var(--color-dark);
  }

  @media (min-width: 800px) {
    .overlay-trigger {
      top: 0.5em;
    }
  }
  /* Specifically for the info button  */
  .overlay-trigger.overlay-trigger--info {
    left: 9px;
    top: 9px;
  }

  /* Specifically for the add button  */
  .overlay-trigger.overlay-trigger--add {
    right: 9px;
    top: 9px;
  }
</style>
