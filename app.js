const input = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const isTriangleOutput = document.querySelector("#output");
function calculateSumOfAngles(angle1,angle2,angle3){
return angle1+angle2+angle3;
}

function isTriangle()
{
    const sumOfAngles = calculateSumOfAngles(Number(input[0].value),
        Number( input[1].value), Number(input[2].value));
        if(sumOfAngles === 180)
        {
            isTriangleOutput.innerText = "Yay! This is triangle."
        }else{
            isTriangleOutput.innerText = "Opps! This is not a triangle."

        }
}

isTriangleButton.addEventListener("click",isTriangle);