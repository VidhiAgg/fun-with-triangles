const triangleInputs = document.querySelectorAll(".areaInput");
const areaButton = document.querySelector("#area-button");
const areaOutput = document.querySelector("#output");

function calculateAreaOfTriangle(){
    const areaOfTriangle = (Number(triangleInputs[0].value) * Number(triangleInputs[1].value))/2;
    console.log(areaOfTriangle);
    areaOutput.innerText = "Area of a Traingle is " + areaOfTriangle + " cm².";

}   

areaButton.addEventListener("click", calculateAreaOfTriangle);