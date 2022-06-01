<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<section class="container">
	<div class="heading">
		<div class="nes-badge">
			<span class="is-dark">Http</span>
		</div>
		<div class="nes-badge">
			<span class="is-warning">response</span>
		</div>
		<div class="nes-badge">
			<span class="is-primary">code</span>
		</div>
		<div class="nes-badge">
			<span class="is-error">quiz</span>
		</div>
	</div>
	<section class="icon-list-small">
		<i class="nes-icon is-small star" />
		<i class="nes-icon is-medium trophy" />
		<i class="nes-icon is-small star" />
	</section>
	<section class="icon-list-medium">
		<i class="nes-icon is-medium star" />
		<i class="nes-icon is-large trophy" />
		<i class="nes-icon is-medium star" />
	</section>
	<div class="button">
		<button on:click={() => goto('quiz')} class="nes-btn is-warning">Start quiz</button>
	</div>
	<section class="icon-list-small">
		<i class="nes-icon is-small star" />
		<i class="nes-icon is-small star" />
		<i class="nes-icon is-small star" />
	</section>
</section>

<style>
	:global(body) {
		height: 100vh;
		overflow: auto;
		padding: 0;
		margin: 0;
		background-color: #cacdcd;
	}
	.container {
		width: min(100% - 3rem, 50ch);
		margin-inline: auto;
		height: 100%;
	}
	.heading {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		padding-top: 2rem;
		margin-bottom: 5rem;
	}
	.nes-badge {
		font-size: 1.3rem;
	}
	span {
		text-align: unset;
	}
	.heading > div:nth-child(1) {
		justify-self: center;
	}
	.heading > div:nth-child(2) {
		justify-self: start;
	}
	.heading > div:nth-child(3) {
		justify-self: end;
	}
	.heading > div:nth-child(4) {
		justify-self: center;
	}
	.button {
		text-align: center;
		font-size: clamp(1.75vh, 2vh, 2.5vh);
		margin-top: 3rem;
		margin-bottom: 3rem;
	}
	.icon-list-small {
		display: block;
		text-align: center;
	}
	.icon-list-medium {
		display: none;
	}

	@media screen and (min-width: 768px) {
		.container {
			width: min(100% - 3rem, 30vw);
			margin-inline: auto;
			height: 100%;
		}
		.heading {
			display: grid;
			grid-template-columns: 1fr;
			padding-top: 2rem;
			margin-bottom: 5rem;
		}
		.heading > div:nth-child(2) {
			justify-self: left;
		}
		.heading > div:nth-child(3) {
			justify-self: right;
		}
		.nes-badge {
			font-size: clamp(1.5rem, 1.9rem, 3rem);
		}
		.button {
			text-align: center;
			margin-top: 6rem;
		}
		.icon-list-small {
			display: none;
		}
		.icon-list-medium {
			display: block;
			text-align: center;
		}
	}
</style>
