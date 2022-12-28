const hypoInputs = document.querySelectorAll(".side-input");
const hypoButton = document.querySelector("#hypotenus-btn");
const hypoOutput = document.querySelector("#output");
hypoOutput.style.display="none";
function calculateSumOfSquares(a, b)
{
   const sumOfSquares = a*a + b*b;
   return sumOfSquares;
}

function calculateHypotenus(){
    var sumOfSideSquare = calculateSumOfSquares(Number(hypoInputs[0].value), Number(hypoInputs[1].value));
    const lengthOfHypo = Math.sqrt(sumOfSideSquare);
    hypoOutput.style.display="block";
    hypoOutput.innerText = "The calculated lengtj of Hypotenus : "+lengthOfHypo;
}
hypoButton.addEventListener("click", calculateHypotenus);