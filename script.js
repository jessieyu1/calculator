function display(value) {
    document.getElementById("result").value += value;
   }

function calculate(value) {
    var result = document.getElementById("result").value;
    var result = eval(result);
    document.getElementById("result").value = result;
   }



function clearDisplay() {
    document.getElementById("result").value = "";
   }
