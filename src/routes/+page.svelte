<script lang="ts">
	import { trackPageView, trackIconClick } from '../hooks/mixpanel';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { cubicIn, cubicOut } from 'svelte/easing';

	let ready = false;
	onMount(() => (ready = true));

	trackPageView();
</script>

{#if ready}
	<div
		class="flex h-screen flex-col justify-center"
		in:fade={{ duration: 1000, easing: cubicIn, delay: 250 }}
		out:slide={{
			duration: 1000,
			delay: 100,
			easing: cubicOut
		}}
	>
		<div class="m-auto text-center" out:fade>
			<h1 class="lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl sm:font-medium">
				Christian Johansen
			</h1>
			<h6
				class="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-thin sm:font-light xs:font-light"
			>
				Full Stack Developer
			</h6>
			<div class="lg:mt-18 mt-10 xs:mt-8 flex justify-center gap-8 xs:gap-4">
				<a
					href="https://www.github.com/cjohansen11"
					target="_blank"
					rel="noreferrer"
					on:click={() => trackIconClick('github')}
				>
					<img
						src="/icons/icon_github.svg"
						alt="github icon"
						class="m-0 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-6 sm:w-6 xs:h-6 xs:w-6"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/christian-johansen11"
					target="_blank"
					rel="noreferrer"
					on:click={() => trackIconClick('linkedin')}
				>
					<img
						src="/icons/icon_linkedin.svg"
						alt="linkedin icon"
						class="m-0 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-6 sm:w-6 xs:h-6 xs:w-6"
					/>
				</a>
				<a href="mailto: cjohansen11@me.com" on:click={() => trackIconClick('email')}>
					<img
						src="/icons/icon_email.svg"
						alt="email icon"
						class="m-0 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-6 sm:w-6 xs:h-6 xs:w-6"
					/>
				</a>
				<a
					href="/CJohansen_Resume.pdf"
					target="_blank"
					rel="noreferrer"
					on:click={() => trackIconClick('resume')}
				>
					<img
						src="/icons/icon_download.svg"
						alt="download icon"
						class="m-0 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-6 sm:w-6 xs:h-6 xs:w-6"
					/>
				</a>
			</div>
		</div>
		<div class="flex justify-center sticky bottom-2" out:fade>
			<a href="/portfolio">
				<img src="/icons/icon_arrow_down.svg" alt="arrow down icon" class="h-12 w-12 pulse" />
			</a>
		</div>
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
