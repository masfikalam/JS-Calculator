function zeroHandle() {
    let initResult = document.getElementById('result').innerHTML;
    if (initResult == 0) {
        document.getElementById('result').innerHTML = "";
    }
}

function keyPress(id) {
    zeroHandle()
    let key = document.getElementById(id).innerHTML;
    let screenResult = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = screenResult + key;
}

function operator(id) {
    switch (id) {
        case 'divide':
            document.getElementById('result').innerHTML += "/";
            break;
        case 'multy':
            document.getElementById('result').innerHTML += "*";
            break;
        case 'minus':
            document.getElementById('result').innerHTML += "-";
            break;
        case 'plus':
            document.getElementById('result').innerHTML += "+";
            break;
    }
}

function mainResult() {
    let equation = document.getElementById('result').innerHTML;
    document.getElementById('history').innerHTML = equation;
    let calculate = eval(equation);
    document.getElementById('result').innerHTML = calculate.toFixed(3);
}

function clearAll() {
    let history = document.getElementById('result').innerHTML;
    document.getElementById('history').innerHTML = history;
    document.getElementById('result').innerHTML = 0;
}