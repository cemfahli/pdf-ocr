<script>
	let pdfjs; 
	let Tesseract;


	let files;
	let canvas = document.createElement("canvas");
	let scale = 2;
	let result = "";
	let pageNumber = "";
	let progress = "";

	//Handler to call ocr function when a file is chosen
	function handlePdf() {
		result = "";
		if (files && files[0]) {
			let file = files[0];
			let reader = new FileReader();

			reader.onload = (e) => {
				pdfjs.getDocument(reader.result).promise
					.then( pdf => {
						ocrPdf(pdf, canvas, scale);
					});
			} 

			reader.readAsArrayBuffer(file);
		}
	}


	//function to call Tesseract.js on each page of pdf
	//First renders a page in an invisible canvas, then calls Tesseract's recognize method on that canvas
	//  Iterates through all pages of the pdf
	//
	//Arguments: 
	//	PDFDocumentProxy from a resolved pdfjs.getDocument() method
	//	canvas element
	//	pdf render scale
	async function ocrPdf(pdf, canvas, scale) {
		for (let i = 1; i <= pdf.numPages; i++) {
			pageNumber = i;
			await pdf.getPage(i).then(page => {
				const viewport = page.getViewport({scale: scale, rotation: 360});
				const context = canvas.getContext("2d");
				
				canvas.height = viewport.height;
				canvas.width = viewport.width;

				const renderParameters = {
					canvasContext: context,
					viewport: viewport,
					dontFlip: true,
				}

				return page.render(renderParameters).promise;
			})
				.then( () => {
					console.log("STARTING OCR")

					return Tesseract.recognize(
						canvas,
						'eng',
						{ logger: m => progress = m.status + " (" + (Math.round(m.progress*100)) + "%)" });
				})
				.then( ({ data: { text } }) => result += text)
				pageNumber = "";
				progress = "";
				console.log("FINISHED OCR");
		}
	}

	const initPdfJs = () => {
		pdfjs = window['pdfjs-dist/build/pdf'];
	}

	const initPdfJsWorker = () => {
		pdfjs.GlobalWorkerOptions.workerSrc = window['pdfjsWorker'];
	}

	const initTesseract = () => {
		Tesseract = window['Tesseract'];
	}
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js" crossorigin="anonymous" on:load={initPdfJs}></script>
	{#if pdfjs}
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js" crossorigin="anonymous" on:load={initPdfJsWorker}></script>
	{/if}
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/2.1.4/tesseract.min.js" integrity="sha512-He62YiiTWJ8AGZLwlCulGxr0wOMteFAIkyZuylghbNxxwACqWVNj3xUMJWxfzvRi5+oLvLu0VEEZsE2/eKastA==" crossorigin="anonymous" on:load={initTesseract}></script>
</svelte:head>

<main>
	<h1>PDF OCR</h1>
	<p>Using PDF.js and Tesseract.js to Recognize Text in PDFs</p>

	<input type="file" accept=".pdf" bind:files>

	{#if files && files[0]}
		<div>
			Accuracy: (Higher is Slower) <br> {scale} <br> <input type=range bind:value={scale} min=1 max=10>
			
		</div>
		<button on:click={handlePdf}>Recognize!</button>

		{#if progress && progress.length > 0}
			Page #{pageNumber}, {progress}
		{/if}

		{#if result && result.length > 0}
			RESULT <br>
			<div id="result">
				<textarea bind:value={result}></textarea>
			</div>
		{/if}
	{/if}
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

	#result {
		text-align: left;
		max-width: 1000px;
		min-width: 300px;
		width: 75%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	textarea {
		height: 200px;
		width: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>