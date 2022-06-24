
var num1 = prompt("INPUT FIRST-NUMBER");
var num2 = prompt("INPUT SECOND-NUMBER");
var opr = prompt([
    "SELECT YOUR MATH SIGNS (+, -, /, %)"
]);

switch (opr)
    {
    case"+":
        var res = parseFloat(num1) + parseFloat(num2)
        alert(`${num1} + ${num2} = ${res}`);
        break;

     case "-":
        var res = parseFloat(num1) - parseFloat(num2);
        alert(`${num1} - ${num2} = ${res}`);
        break;

    case "*":
        var res = parseFloat(num1) + parseFloat(num2);
        alert(`${num1} * ${num2} = ${res}`);
        break;

     case "/":
        var res = parseFloat(num1) - parseFloat(num2);
        alert(`${num1} / ${num2} = ${res}`);
        break;

    case "%":
        var res = parseFloat(num1) % parseFloat(num2);
        alert(`${num1} % ${num2} = ${res}`);
        break;
    default:
        alert("Invalid Operator")
        break
    }