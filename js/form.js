export {submit,};
import {text} from "./loremTexts.js";
import { createP } from "./createParagraph.js";

function submit(){
    
    const quantityValue = document.getElementById("generatorInput");
    const value = Math.floor(parseInt(quantityValue.value))
    const generatedParagraph = document.querySelector("#generatedParagraph");
    const random = Math.floor(Math.random() * text.length)

    if(isNaN || value <= 0 || value > 9){
        createP(random)
    } 
    if(value === 2){createP(random)} 
    if(value === 3){createP(random); createP(random);} 
    if(value === 4){createP(random); createP(random); createP(random); } 
    if(value === 5){createP(random); createP(random); createP(random); createP(random);} 
    if(value === 6){createP(random); createP(random); createP(random); createP(random);
                    createP(random);} 
    if(value === 7){createP(random); createP(random);  createP(random);
                    createP(random); createP(random); createP(random);} 
    if(value === 8){createP(random);  createP(random); createP(random); createP(random);
                    createP(random); createP(random); createP(random);} 
    if(value === 9){createP(random); createP(random); createP(random); createP(random);
                    createP(random); createP(random); createP(random); createP(random);}
    
}
