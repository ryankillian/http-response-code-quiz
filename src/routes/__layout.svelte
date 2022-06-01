<script context="module" lang="ts">
	import { MDN } from '$lib/constants';
	import type { Load } from '@sveltejs/kit';
	import PageTransitions from '../components/PageTransitions.svelte';
	export const load: Load = async ({ url }) => {
		return {
			props: {
				key: url.pathname
			}
		};
	};
</script>

<script lang="ts">
	export let key: string;
</script>

<div class="big-container">
	<section class="left-sidebar">
		<div class="nes-balloon from-right">
			<a href={`${MDN}418`} target="blank">
				<p>418 I'm a teapot</p>
			</a>
		</div>
		<div class="nes-balloon from-left">
			<a href={`${MDN}426`} target="blank">
				<p>426 Upgrade Required</p>
			</a>
		</div>
		<div class="nes-balloon from-right">
			<a href={`${MDN}410`} target="blank">
				<p>410 Gone</p>
			</a>
		</div>
		<div class="nes-balloon from-left">
			<a href={`${MDN}210`} target="blank">
				<p>201 Created</p>
			</a>
		</div>
		<div class="nes-balloon from-right">
			<a href={`${MDN}429`} target="blank">
				<p>429 Too Many Requests</p>
			</a>
		</div>
		<div class="nes-balloon from-left">
			<a href={`${MDN}303`} target="blank">
				<p>303 See Other</p>
			</a>
		</div>
	</section>
	<PageTransitions refresh={key}>
		<slot />
	</PageTransitions>
	<section class="right-sidebar">
		<div class="nes-balloon from-left">
			<a href={`${MDN}103`} target="blank">
				<p>103 Early Hints</p>
			</a>
		</div>
		<div class="nes-balloon from-right">
			<a href={`${MDN}413`} target="blank">
				<p>413 Payload Too Large</p>
			</a>
		</div>
		<div class="nes-balloon from-left">
			<a href={`${MDN}302`} target="blank">
				<p>302 Found</p>
			</a>
		</div>
		<div class="nes-balloon from-right">
			<a href={`${MDN}308`} target="blank">
				<p>308 Permanent Redirect</p>
			</a>
		</div>
		<div class="nes-balloon from-left">
			<a href={`${MDN}204`} target="blank">
				<p>204 No Content</p>
			</a>
		</div>
		<div class="nes-balloon from-right">
			<a href={`${MDN}510`} target="blank">
				<p>510 Not Extended</p>
			</a>
		</div>
	</section>
</div>

<style>
	:global(body, pre, code, kbd, samp) {
		font-family: 'Press Start 2p', Arial, Helvetica, sans-serif;
	}
	:global(body) {
		height: 100vh;
		overflow: auto;
		padding: 0;
		margin: 0;
		background-color: #cacdcd;
	}

	.nes-balloon {
		border-image-repeat: stretch;
	}
	a {
		font-size: clamp(0.8rem, 1rem, 1.4rem);
		color: #212529;
	}
	.big-container {
		height: 100%;
	}
	.left-sidebar,
	.right-sidebar {
		display: none;
	}

	@media screen and (min-width: 768px) {
		.big-container {
			display: grid;
			grid-template-columns: 1fr 40vw 1fr;
		}
		.left-sidebar,
		.right-sidebar {
			height: 100%;
			display: grid;
			grid-template-rows: repeat(1fr);
			justify-items: center;
			align-items: center;
		}
	}
</style>
