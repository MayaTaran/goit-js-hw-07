const getInput = document.querySelector("#name-input");
//console.log(getInput);
const spanText = document.querySelector("#name-output");
function inputHandler(event){
    let inputText = event.target.value;
    let inputTrim = inputText.trim( );
    if (inputTrim !== "") {
        spanText.textContent = `${inputTrim}`;
    }
    
}

getInput.addEventListener("input", inputHandler);