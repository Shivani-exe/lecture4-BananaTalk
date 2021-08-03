var txtInput=document.querySelector("#txt-input");
var btnTranslate=document.querySelector("#btn-translate");
var txtOutput=document.querySelector("#txt-output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input)
{
return serverURL + "?" + "text=" + input ;
}

function errorHandler(error)
{
  console.log("error occured ", error);
  alert(" Something wrong with server! Try again after some time ");
}
function clickHandler()
{
	var inputTxt=txtInput.value;
    //console.log(inputTxt,"Input Text");
	fetch(getTranslationURL(inputTxt))
	.then(response => response.json())
	.then(json => {
	var translatedTxt = json.contents.translated;
    //console.log(json);
    //console.log(translatedTxt);
	txtOutput.innerText = translatedTxt;
	})
	.catch(errorHandler)


};
btnTranslate.addEventListener("click", clickHandler);