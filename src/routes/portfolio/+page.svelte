<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<div
	class="flex h-screen flex-col justify-center text-center"
	in:fade={{ delay: 500, duration: 1000 }}
	out:fade={{ delay: 100, duration: 500, easing: quadOut }}
>
	<a href="/" class="absolute top-4 left-4 hover:opacity-50"><p>Home</p></a>
	<h1>Portfolio</h1>
</div>
