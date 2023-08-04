<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	class="flex h-screen flex-col justify-center text-center"
	in:fade={{ delay: 1000, duration: 1000 }}
>
	<h1>Portfolio</h1>
</div>
