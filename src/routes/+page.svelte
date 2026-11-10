<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let ready = false;
	onMount(() => (ready = true));
</script>


{#if ready}
	<div
		class="flex min-h-dvh flex-col justify-center px-4"
		in:fade={{ duration: 1000, easing: cubicIn, delay: 250 }}
		out:slide={{
			duration: 1000,
			delay: 100,
			easing: cubicOut
		}}
	>
		<div class="m-auto text-center" out:fade>
			<h1 class="text-3xl sm:font-medium md:text-4xl lg:text-5xl">
				Christian Johansen
			</h1>
			<h6 class="mt-2 text-xl font-light sm:text-2xl md:text-3xl lg:text-4xl">
				Full Stack Developer
			</h6>
			<div class="mt-8 flex justify-center gap-6 sm:mt-10 sm:gap-8 lg:mt-18">
				<a
					href="https://www.github.com/cjohansen11"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="/icons/icon_github.svg"
						alt="github icon"
						class="m-0 h-6 w-6 lg:h-8 lg:w-8"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/christian-johansen11"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="/icons/icon_linkedin.svg"
						alt="linkedin icon"
						class="m-0 h-6 w-6 lg:h-8 lg:w-8"
					/>
				</a>
				<a href="mailto: cjohansen11@me.com">
					<img
						src="/icons/icon_email.svg"
						alt="email icon"
						class="m-0 h-6 w-6 lg:h-8 lg:w-8"
					/>
				</a>
				<a
					href="/CJohansen_Resume.pdf"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="/icons/icon_download.svg"
						alt="download icon"
						class="m-0 h-6 w-6 lg:h-8 lg:w-8"
					/>
				</a>
			</div>
		</div>
		<!-- <div class="flex justify-center sticky bottom-2" out:fade>
			<a href="/portfolio">
				<img src="/icons/icon_arrow_down.svg" alt="arrow down icon" class="h-12 w-12 pulse" />
			</a>
		</div> -->
	</div>
{/if}

<style>
	@keyframes pulse {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.pulse {
		animation: pulse 3s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
	}
</style>
