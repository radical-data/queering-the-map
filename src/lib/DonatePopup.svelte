<script lang="ts">
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	// TODO: Fix bug with multiple toasts appearing on reload if we don't pop.
	toast.pop({ target: 'donate' });
	// TODO: Passing in HTML like this is a bit ugly. Can we do that differently?
	toast.push(
		'<a style="color:var(--color-pink);text-decoration:unset;" href="https://www.patreon.com/queeringthemap" rel="noopener" target="_blank"><span style="color:var(--color-pink);text-decoration:underline;">DONATE</span> <span style="color:var(--color-pink);">to Queering the Map to help us stay online.</span></a> ',
		{
			target: 'donate',
			initial: 0,
			theme: {
				'--toastBarHeight': 0
			}
		}
	);
</script>

<div class="wrap">
	<SvelteToast target="donate" />
</div>
