# PDF OCR
A simple client-sided web-app to perform OCR on PDFs


## Tech Used
* [Svelte](https://svelte.dev/) as a component framework
* [PDF.js](https://mozilla.github.io/pdf.js/) to consume PDFs, converting them to canvas elements
* [Tesseract.js](https://tesseract.projectnaptha.com/) to perform OCR

## Running Example
WIP

## How to Build
This project uses the default Svelte template, so the following commands can be used from the project directory (using npm)  

* First install the dependencies
```bash
$ npm install
```

Then choose one of 3 commands:
1. Development environment with livereload served on localhost:5000
```bash
$ npm run dev
```
2. Production build served on localhost:5000
```bash
$ npm run start 
```
3. Production build (not served)
```bash
$ npm run build
```

## How to Use
1. Select a pdf using the input element (Browse button)
2. Select your preferred accuracy using the slider (Will adjust the scale of the canvas element, affecting accuracy and speed)
3. Click Recognize!
4. Wait, it might take a while
5. Your text will appear in a text box under RESULT

