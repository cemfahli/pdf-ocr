<script>
	import Ocr from './Ocr.svelte';
	let files = [];
</script>

<main>
	<h1>PDF OCR</h1>
	<p>Using PDF.js and Tesseract.js to Recognize Text in PDFs</p>

	<input type="file" accept=".pdf" bind:files>

	<Ocr file={files[0]}></Ocr>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #4c00ff;
		font-size: 5em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>