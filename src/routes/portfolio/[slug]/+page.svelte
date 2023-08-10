<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
</script>

<div
	class="flex h-screen flex-col justify-center overflow-hidden pb-8"
	in:fade={{ delay: 500, duration: 1000 }}
	out:fade={{ delay: 100, duration: 500, easing: quadOut }}
>
	<h1>Hello Portfolio Screen</h1>
</div>
