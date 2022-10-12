import {text} from "./loremTexts.js";

export function createP(number){
    let createP = document.createElement(`p`)
        createP.innerText = text[number]
        generatedParagraph.appendChild(createP);
}