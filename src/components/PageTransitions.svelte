<script>
	import { fly } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div in:fly={{ y: -150, duration: 650, delay: 500 }} out:fly={{ y: -150, duration: 450 }}>
		<slot />
	</div>
{/key}
