<script lang="ts">
  import { writable } from 'svelte/store';
  import './toast.css'; 

  const showToast = writable(true);

  const closeToast = () => {
    showToast.set(false);
  };
</script>

{#if $showToast}
  <div class="toast-container">
    <div class="toast">
      <div class="toast-message">
        <a
          href="https://www.patreon.com/queeringthemap"
          rel="noopener"
          target="_blank"
        >
          <span>DONATE</span> to Queering the Map to help us stay online.
        </a>
      </div>
      <button class="toast-close" on:click={closeToast} aria-label="Close"
      ></button>
    </div>
  </div>
{/if}