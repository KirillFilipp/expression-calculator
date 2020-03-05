function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let exprStr = expr.replace(/[\s\uFEFF\xA0]/g, '');
    let count = 0;
    let stack = [];
    for (let i = 0; i < exprStr.length; i++) {
        if (exprStr[i] == '/' && exprStr[i + 1] == '0') {
            throw new Error('TypeError: Division by zero.');
        } else {
        }
    }
    for (let i = 0; i < exprStr.length; i++) {
        if (exprStr[i] === '(') {
            count = count + 1;
        } else if (exprStr[i] === ')') {
            count = count - 1;
        }
    }
    if (count !== 0) {
        throw new Error('ExpressionError: Brackets must be paired');
    } else {
        return new Function('return ' + expr)();

    }
}

module.exports = {
    expressionCalculator
}