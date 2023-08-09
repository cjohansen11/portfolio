<script lang="ts">
	import { quadOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let data = [
		{
			id: 1,
			title: 'bash.gg',
			icon: '/portfolio_icons/icon_bash.svg',
			description: 'A browser based gaming platform',
			tech: 'React, React Native, Nextjs, Node.js, Typescript, Amazon Web Services (AWS), PostgreSQL, Prisma, Expo, Stripe, NextAuth, Auth0, Docker, Terraform',
			link: 'https://bash.gg'
		},
		{
			id: 2,
			title: 'Neon',
			icon: '/portfolio_icons/icon_neon.svg',
			description: 'An NFT marketplace for everyone',
			tech: 'React, React Native, Node.js, Typescript, Firebase, Amazon Web Services (AWS), Web3.js, Solana, Magic, Docker',
			link: ''
		},
		{
			id: 3,
			title: 'RIPHW',
			icon: '/portfolio_icons/icon_riphw.png',
			description: 'ChatGPT clone to help with homework',
			tech: 'React, Nextjs, Node.js, Typescript, Railway, PostgreSQL, Prisma, Docker, TailwindCSS, ChatGPT, Stripe, Google Ad Manager',
			link: 'https://riphomework.com'
		},
		{
			id: 4,
			title: 'NFTY Kicks',
			icon: '/portfolio_icons/icon_nfty.png',
			description: 'A 10,000 NFT collection',
			tech: 'React, Nextjs, TailwindCSS, Web3.js, Solidity, Vercel',
			link: ''
		},
		{
			id: 5,
			title: 'CJohansen.dev',
			icon: '/favicon.ico',
			description: 'Personal portfolio website',
			tech: 'Svelte, SvelteKit, Typescript, TailwindCSS, Vercel',
			link: '/'
		}
	];
</script>

<div
	class="flex h-screen flex-col justify-center overflow-hidden pb-8"
	in:fade={{ delay: 500, duration: 1000 }}
	out:fade={{ delay: 100, duration: 500, easing: quadOut }}
>
	<a href="/" class="pt-4 pl-4 hover:opacity-50"><p>Home</p></a>
	<div class="border-b-2 border-timberwolf border-opacity-40">
		<p class="lg:text-5xl text-4xl text-center flex align-middle justify-center pb-4 pt-2">
			Portfolio
		</p>
	</div>
	<div class="grid grid-cols-1 overflow-y-scroll gap-8 pt-12 px-12 noScroll">
		{#each data as { id, title, icon, description, tech, link }, index (id)}
			<a
				class="flex flex-col align-middle justify-center gap-4 px-8 py-4 rounded-md border-bluish-grey border-2 border-opacity-50 hover:border-opacity-100"
				href={link ? link : '#'}
				target={link ? '_blank' : '_self'}
				rel="noreferrer"
			>
				<img src={icon} alt={`${title} icon`} class="m-0 mx-auto lg:h-12 h-12" />
				<p class="font-bold lg:text-3xl text-2xl text-center">{title}</p>
				<span class="gap-2 text-center">
					<p class="font-semibold">Description:</p>
					<p>{description}</p>
				</span>
				<span class="gap-2 text-center">
					<p class="font-semibold">Stack:</p>
					<p>{tech}</p>
				</span>
			</a>
		{/each}
	</div>
</div>

<style>
	.noScroll {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
	.noScroll::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
</style>
