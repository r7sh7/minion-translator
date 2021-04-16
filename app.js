var btnTranslate = document.querySelector('#btn-translate')
var inputText = document.querySelector('#text-input')
var outputText = document.querySelector('#output')

btnTranslate.addEventListener("click", clickHandler);

function clickHandler(){
    outputText.innerText = inputText.value 
}