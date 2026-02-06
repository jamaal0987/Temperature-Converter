
// USING AN ARRAY
let conversionHistory = []; 

const btn = document.getElementById('convertBtn');
const res = document.getElementById('resultText');

btn.addEventListener('click', function() {
    const temp = document.getElementById('inputTemp').value;
    const unit = document.getElementById('unitType').value;

// 2 HAGAANI VALIDATION
    if (temp === "" || isNaN(temp)) {
        res.style.color = "red";
        res.innerHTML = "Ops you need to enter a valid number!";
        return;
    }

    res.style.color = "white";
    let val = parseFloat(temp);

    // USING LOGICALL
    if (unit === "celcius to farenhite" && val < -273.15) {
        res.innerHTML = "opps Temperature below -273.15°C is not even exist!";
        return;
    }
// in order si an ugu shabano natijada soo abxda hadhowti
    let finalResult = "";

    if (unit === "celcius to farenhite") {
        let f = (val * 9/5) + 32;
        finalResult = val + "°C = " + f.toFixed(2) + "°F";
    } else {
        let c = (val - 32) * 5/9;
        finalResult = val + "°F = " + c.toFixed(2) + "°C";
    }

    res.innerHTML = finalResult;

    // 4. using objects again
    let dataObject = {
        inputValue: val,
        unitType: unit,
        resultValue: finalResult,
        date: new Date().toLocaleTimeString()
    };
    conversionHistory.push(dataObject);
    console.log("History Updated:", conversionHistory);
});























