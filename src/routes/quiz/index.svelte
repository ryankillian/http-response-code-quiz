<script lang="ts">
	import { afterNavigate, goto, invalidate } from '$app/navigation';
	import { MDN } from '$lib/constants';
	import { counter } from '$lib/counter';
	import type { Question } from '$lib/types';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let question: Question;

	let answer: string = '';
	let answerInput: HTMLInputElement;
	let answerArea: HTMLElement;
	let resultsArea: HTMLElement;

	$: isCorrect = false;
	$: showResults = false;

	let mdnURL: string = '';

	let mediaQuery: MediaQueryList;

	onMount(() => {
		answerInput.focus();
		mediaQuery = window.matchMedia('(min-width: 768px)');
	});
	afterNavigate(() => {
		answerInput.focus();
	});

	async function checkAnswer() {
		showResults = true;
		if (answer.toLowerCase() === question.code.toLowerCase()) {
			isCorrect = true;
			$counter++;
		} else {
			isCorrect = false;
			$counter = 0;
			mdnURL = MDN + question.code.slice(0, 3);
		}
	}

	async function tryAnother() {
		showResults = false;
		answer = '';
		await goto('/quiz');
		await invalidate('/quiz');
	}
</script>

<div class="container">
	<section class="trophy-top">
		<i class="nes-icon is-medium star" />
		<a href="/"><i class="nes-icon is-large trophy" /></a>

		<i class="nes-icon is-medium star" />
	</section>
	<section class="description">
		<div class="nes-container with-title is-centered is-rounded">
			<p class="title" style:background-color={'#cacdcd'}>Description</p>
			<p>{question.description}</p>
		</div>
	</section>
	{#if !showResults}
		<section class="answer" bind:this={answerArea} in:fly={{ delay: 200, duration: 600 }}>
			<label class="label" for="code">Response Code:</label>
			<input
				class="nes-input is-success"
				bind:value={answer}
				type="text"
				name="code"
				bind:this={answerInput}
			/>
			<div class="button">
				<button on:click={checkAnswer} class="nes-btn is-warning">Check Answer</button>
			</div>
		</section>
	{/if}
	{#if showResults}
		<section class="results" bind:this={resultsArea} in:fade={{ delay: 200, duration: 600 }}>
			<div class="nes-balloon from-right">
				{#if isCorrect}
					<div>
						<i class="nes-icon trophy is-large" />
					</div>
					<div>
						<p>
							<strong>Correct!</strong>
						</p>
						<p>
							{$counter} on the trot!
						</p>
						{#each [...Array($counter)] as item}
							<i class="nes-icon is-{mediaQuery.matches ? 'medium' : 'small'} star" />
						{/each}
					</div>
				{:else}
					<div>
						<a href={mdnURL} target="blank"><i class="nes-icon close is-large" /></a>
					</div>
					<div>
						<p><strong>Incorrect!</strong></p>
						<p>
							The answer was <a class="nes-text is-error" href={MDN} target="blank"
								>{question.code}</a
							>.
						</p>
					</div>
				{/if}
			</div>
			<div class="button">
				<button on:click={tryAnother} class="nes-btn is-warning">Try Another</button>
			</div>
		</section>
	{/if}
</div>

<style>
	:global(body) {
		display: grid;
		place-items: center;
		height: 100vh;
		padding: 0;
		margin: 0;
	}
	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		font-size: 14px;
	}
	.trophy-top {
		display: none;
	}
	.description {
		margin: 0.5rem 0.5rem 0 0.5rem;
	}
	.nes-container {
		border-image-repeat: stretch;
		padding-left: 0;
		padding-right: 0;
	}
	.nes-balloon {
		border-image-repeat: stretch;
	}
	.title {
		background-color: #cacdcd;
	}
	.answer {
		max-width: 80ch;
		margin: 0 auto;
		padding: 1rem;
	}
	.label {
		display: flex;
		justify-content: center;
	}
	.results {
		margin: 0.5rem 0.5rem 0 0.5rem;
		text-align: center;
	}

	.button {
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	@media screen and (min-width: 800px) {
		.container {
			height: 100%;
			width: min(800px, calc(70% + 100px));
			display: grid;
			grid-template-rows: 10vh 1fr 30vh 20vh;
			margin: 0 auto;
			font-size: clamp(0.8rem, 1rem, 1.4rem);
		}
		.trophy-top {
			display: block;
			text-align: center;
			margin-top: 2rem;
		}
		.button {
			margin-bottom: 10rem;
		}
	}
</style>
