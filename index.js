
function convertTemperature()
{
    var inputValue = document.getElementById("inputValue").value;
    var unit = document.getElementById("unit").value;
    var outputValue = 0;

    if(unit === "celsius")
    {
        outputValue = (inputValue * 9 / 5) + 32;
        outputValue = outputValue.toFixed(2) + " °F";

    }

    else if (unit === "fahrenheit")
    {
       outputValue = (inputValue - 32) * 5 / 9;
       outputValue = outputValue.toFixed(2) + " °C";

    }

    else if (unit === "kelvin")
    {
        outputValue = inputValue - 273.15;
        outputValue = outputValue.toFixed(2) + " °C";
    }

    document.getElementById("outputValue").value = outputValue;

    
}
