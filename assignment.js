
let conversionHistory = [];
const btn = document.getElementById("convertBtn");
const res = document.getElementById('resultText');
btn.addEventListener('click', function(){
    const temp = document.getElementById("inputTemp").value;
    const unit = document.getElementById("unitType").value;
     if (temp === "" || isNaN(temp)){
        res.style.color = "red";
        res.innerHTML = "opps you need to enter a valid number";
        return;
     }
    res.style.color = "white";
    let val = parseFloat(temp);
    if(unit === "celcius to farenhite" && val <  -273.15){
        res.innerHTML = "opps Temperature below -273.15°C is not even exist!"
        return
    }
let finalResult = "";
if(unit === "celcius to farenhite"){
    let f = (val*9/5)+32;
    finalResult = val + "°C = " + f.toFixed(2) + "°F";
}else{
    let c = (val - 32)* 5/9;
    finalResult  = val + "°F = " + c.toFixed(2) + "°C";
}
res.innerHTML = finalResult;

let dataObject = {
    inputValue: val,
    unitType: unit,
    resultValue: finalResult,
}
conversionHistory(dataObject)
})
