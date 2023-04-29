
export function calculo (num1, num2, operador) {


    if (operador === "+") {
        return parseInt(num1) + parseInt(num2);
    } else if (operador === "-") {
        return parseInt(num1) - parseInt(num2);
    } else if (operador ==="X") {
        return parseInt(num1) * parseInt(num2);
    } else if (operador === "/") {
        return parseInt(num1) / parseInt(num2);
    }

}