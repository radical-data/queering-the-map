<script lang="ts">
  export let isDisabled: boolean;
  export let functionOnClick: () => void;
  export let functionHover: () => void;
</script>

<div class="button-wrapper">
  <button
    class="button {isDisabled ? 'button-disabled' : 'button-enabled'}"
    on:click={functionOnClick}
    on:mouseenter={functionHover}
    disabled={isDisabled}><slot /></button
  >
</div>

<style>
  .button {
    display: inline-block;
    border: 1.01px solid var(--color-dark);
    background: var(--color-pink);
    color: var(--color-dark);
    cursor: pointer;
    padding: 10px 0px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
    transition-property: color, border-color, background-color;
    transition-duration: 300ms;
    transition-timing-function: ease;
    width: 100%;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 1rem;
  }

  .button-enabled:hover {
    background-color: black;
    color: var(--color-pink);
  }

  .button:disabled {
    cursor: not-allowed;
  }
</style>
