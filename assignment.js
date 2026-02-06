// USING DOM
const btn = document.getElementById('convertBtn');
const res = document.getElementById('resultText');

// USING EVENTS
btn.addEventListener('click', function() {
    const temp = document.getElementById('inputTemp').value;
    const unit = document.getElementById('unitType').value;

// INPUT VALIDATING
    if (temp === "") {
        res.style.color = "red";
        res.innerHTML = "ops you need to enter a number!";
        return;
    }

    res.style.color = "white";
    let val = parseFloat(temp);
    
// CALCULATING THE LOGIC
    if (unit === "CtoF") {
        let f = (val * 9/5) + 32;
        res.innerHTML = val + "°C = " + f.toFixed(2) + "°F";
    } else {
        let c = (val - 32) * 5/9;
        res.innerHTML = val + "°F = " + c.toFixed(2) + "°C";
    }
});