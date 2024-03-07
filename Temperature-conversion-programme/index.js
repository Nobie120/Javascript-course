const number = document.getElementById("number");
const toFarenheit = document.getElementById("to-farenheit");
const toCelsius = document.getElementById("to-celsius");
const result = document.getElementById("result");

let temp;

function Convert(){
    if(toFarenheit.checked){
        //result.textContent = "Celsius to farenheit";
        temp = Number(number.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "℉";
    }
    else if(toCelsius.checked){
        //result.textContent = "farenheit to celsius";
        temp = Number(number.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "℃";
    }
    else {
        result.textContent = "Choose a unit first";
    }
}
