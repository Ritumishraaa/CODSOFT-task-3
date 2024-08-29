document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('calc-display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'C') {
                // Clear everything
                currentInput = '';
                operand1 = '';
                operand2 = '';
                operator = '';
                display.value = '';
            } else if (value === '=') {
                // Perform calculation only if operator and operand1 exist
                if (operator && operand1) {
                    operand2 = currentInput;
                    let result = calculate(operand1, operator, operand2);
                    display.value = result;
                    currentInput = result;
                    operator = '';
                    operand1 = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Set the operator if there's already a number entered
                if (currentInput !== '') {
                    operator = value;
                    operand1 = currentInput;
                    currentInput = '';
                }
            } else if (value === '%') {
                // Calculate percentage
                if (currentInput !== '') {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    display.value = currentInput;
                }
            } else if (value === '√') {
                // Calculate square root
                if (currentInput !== '') {
                    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
                    display.value = currentInput;
                }
            } else if (value === 'x²') {
                // Calculate square
                if (currentInput !== '') {
                    currentInput = (Math.pow(parseFloat(currentInput), 2)).toString();
                    display.value = currentInput;
                }
            } else if (value === '1/x') {
                // Calculate reciprocal
                if (currentInput !== '') {
                    currentInput = (1 / parseFloat(currentInput)).toString();
                    display.value = currentInput;
                }
            } else {
                // Handle number input and update display
                currentInput += value;
                display.value = currentInput;
            }
        });
    });

    function calculate(operand1, operator, operand2) {
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            default:
                return 0;
        }
    }
});
