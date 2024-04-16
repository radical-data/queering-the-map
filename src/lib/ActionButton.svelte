<script lang="ts">
export let link: string;
</script>
<div class="button-wrapper">
	<a href={link} class="button" target="_blank" rel="noopener"
		><slot></slot></a
	>
</div>

<style>
	.button {
		display: inline-block;
		border: 2px solid var(--color-dark);
		background: var(--color-pink);
		color: var(--color-dark);
		box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
		cursor: pointer;
		padding: 10px 0px;
		text-align: center;
		font-size: 30px;
		text-transform: uppercase;
		text-decoration: none;
		transition-property: color, border-color, background-color;
		transition-duration: 300ms;
		transition-timing-function: ease;
		width: 100%;
		font-size: 30px;
	}

	/* .button:hover, .button:focus {
		color: var(--color-pink-bright);
		border: 2px solid var(--color-pink-bright);
		background: var(--color-dark);
		text-decoration: none;
	} */

	.button-wrapper {
		text-align: center;
		margin-top: 1rem;
	}
</style>
