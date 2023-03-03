<script lang="ts">
	import '../app.css';

	const handleClick = () => {
		alert('Hello');
	};
</script>

<h1 class="text-5xl font-bold text-blue-900">Christian Johansen</h1>
<h4 class="text-red">Full Stack Engineer</h4>
<nav>
	<a on:click={handleClick} href="/">Home</a>
	<a href="/about">About</a>
	<a href="/portfolio">Portfolio</a>
</nav>

<slot />
