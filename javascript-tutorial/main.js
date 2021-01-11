const ans = [
    'console.log("Hello World");',                      // 0
    'var num;',                                         // 1
    'var num = 5;',                                     // 2
    'var num = 5.0;',                                   // 3
    'console.log(num);',                                // 4
    'var str = "Hello";',                               // 5
    'console.log(str);',                                // 6
    'var x = 5;',                                      // 7
    'var y = 3;',                                       // 8
    'var z = x * y;',                                   // 9
    'console.log(z);',                                  // 10
    'var x = 5;',                                       // 11
    'x = 2x;',                                          // 12
    'console.log(x);',                                  // 13
    'var str1 = "Hello";',                              // 14
    'var str2 = "World";',                              // 15
    'var str3 = str1 + str2;',                          // 16
    'console.log(str3);',                               // 17
    'var str1 = "red";',                                // 18
    'var str2 = "This is a " + str1 + " circle";',      // 19
    'console.log(str2);',                               // 20
    'if (x == 5) {',                                    // 21
    'console.log("true");',                             // 22
    '}',                                                // 23
]

const result = [
    'Hello World',                                      // 0
    '5',                                                // 1
    '1.25',                                             // 2
    'Hello',                                            // 3
    '15',                                                // 4
    '10',                                               // 5
    'Hello World',                                      // 6
    'This is a red circle',                             // 7
    'true',                                             // 8
    'false',                                            // 9
]

function toggleForm(formId) {
    document.getElementById(formId).classList.remove('formHidden');
    document.getElementById(formId).classList.add('formShow');
}

function changeForm(newPage, data) {
    // hide forms
    data.forEach(function (el) {
        el.classList.remove('formShow');
        el.classList.add('formHidden');
    })

    //show forms
    switch (newPage) {
        case 'Page1':
            toggleForm('userInput1');
            break;
        case 'Page2':
            toggleForm('userInput1');
            break;
        case 'Page3':
            toggleForm('userInput1');
            toggleForm('userInput2');
            break;
        case 'Page4':
            toggleForm('userInput1');
            toggleForm('userInput2');
            break;
        case 'Page5':
            toggleForm('userInput1');
            toggleForm('userInput2');
            break;
        case 'Page6':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            toggleForm('userInput4');
            break;
        case 'Page7':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            break;
        case 'Page8':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            toggleForm('userInput4');
            break;
        case 'Page9':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            break;
        case 'Page10':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            break;
        case 'Page11':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            toggleForm('userInput4');
            break;
        case 'Page12':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            toggleForm('userInput4');
            toggleForm('userInput5');
            break;
        case 'Page13':
            toggleForm('userInput1');
            toggleForm('userInput2');
            toggleForm('userInput3');
            break;
    }
}

function clearTerminal() {
    document.getElementById('terminal').innerHTML = '';
}

function changePage(newPage) {
    // reset value in form
    const data = document.querySelectorAll('.formShow');
    for (i = 0; i < data.length; i++) {
        data[i].value = '';
    }
    const oldPage = document.querySelector('.show');
    oldPage.classList.remove('show');
    oldPage.classList.add('hidden');
    document.getElementById(newPage).classList.remove('hidden');
    document.getElementById(newPage).classList.add('show');

    changeForm(newPage, data);

    clearTerminal();
}

/* Check if enter button was pressed.
   If true, then run getData() */
function checkSubmit(e) {
    if (e && e.keyCode == 13) {
        getData();
    }
}

function getData() {
    const page = document.querySelector('.show');
    const data = document.querySelectorAll('.formShow');
    let dataArr = [];
    for (i = 0; i < data.length; i++) {
        dataArr[i] = data[i].value;
    }
    checkAnswer(page.id, dataArr);
}

/* Print the result of a successful code onto the terminal */
function printResult(result) {
    document.getElementById('terminal').innerHTML = result;
    alert('Good Job!');
}

function checkAnswer(id, dataArr) {
    switch (id) {
        case 'Page1':
            if (dataArr[0] === ans[0]) {
                printResult(result[0]);
            } else {
                alert('Error');
            }
            break;
        case 'Page2':
            if (dataArr[0] === ans[1]) {
                printResult('');
            } else {
                alert('Error');
            }
            break;
        case 'Page3':
            if (dataArr[0] === ans[2] && dataArr[1] === ans[4]) {
                printResult(result[1]);
            } else {
                alert('Error');
            }
            break;
        case 'Page4':
            if (dataArr[0] === 'var num = 1.25;' && dataArr[1] === 'console.log(num);') {
                printResult(result[2]);
            } else {
                alert('Error');
            }
            break;
        case 'Page5':
            if (dataArr[0] === ans[5] && dataArr[1] === ans[6]) {
                printResult(result[3]);
            } else {
                alert('Error');
            }
            break;
        case 'Page6':
            if (dataArr[0] === ans[7] && dataArr[1] === ans[8] && dataArr[2] === ans[9] && dataArr[3] === ans[10]) {
                printResult(result[4]);
            } else {
                alert('Error');
            }
            break;
        case 'Page7':
            if (dataArr[0] === ans[11] && dataArr[1] === ans[12] && dataArr[2] === ans[13]) {
                printResult(result[5]);
            } else {
                alert('Error');
            }
            break;
        case 'Page8':
            if (dataArr[0] === ans[14] && dataArr[1] === ans[15] && dataArr[2] === ans[16] && dataArr[3] === ans[17]) {
                printResult(result[6]);
            } else {
                alert('Error');
            }
            break;
        case 'Page9':
            if (dataArr[0] === ans[18] && dataArr[1] === ans[19] && dataArr[2] === ans[20]) {
                printResult(result[7]);
            } else {
                alert('Error');
            }
            break;
        case 'Page10':
            if (dataArr[0] === 'if (5 == 5) {' && dataArr[1] === 'console.log("true");' && dataArr[2] === '}') {
                printResult(result[8]);
            } else {
                alert('Error');
            }
            break;
        case 'Page11':
            if (dataArr[0] === 'var x = 5;' && dataArr[1] === 'if (x == 10) {' && dataArr[2] === 'console.log("true");' && dataArr[3] === '}') {
                printResult(result[8]);
            } else {
                alert('Error');
            }
            break;
        case 'Page12':
            if (dataArr[0] === 'if (0 == 1) {' && dataArr[1] === 'console.log("true");' && dataArr[2] === '} else {' && dataArr[3] === 'console.log("false");' && dataArr[4] === '}') {
                printResult(result[8]);
            } else {
                alert('Error');
            }
            break;
        case 'Page13':
            if (dataArr[0] === 'if (true) {' && dataArr[1] === 'console.log("true");' && dataArr[2] === '}') {
                printResult(result[8]);
            } else {
                alert('Error');
            }
    }
}

