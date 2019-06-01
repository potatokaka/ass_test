let result = document.querySelector('.result')
let AC = document.querySelector('#ac');
let wrapper = document.querySelector('.wrapper');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let equal = document.querySelector('#equal');
let func = '';
let firstNum = '';
let secondNum = '';
let outcome = '';

function reset(){
    func = '';
    firstNum = '';
    secondNum = '';
    outcome = '';
}

wrapper.addEventListener('click', function(e){
    if ( func == '' && e.target.classList.contains('num') ){
        result.innerText = '';
        firstNum += e.target.innerText;
        result.innerText = firstNum;
    }

    if ( e.target.classList.contains('func') ){
        func = e.target.innerText;
    }

    if ( func !== '' && e.target.classList.contains('num') ){
        secondNum += e.target.innerText;
        result.innerText = secondNum;
    }

    if ( e.target.id == 'equal' ){
        switch (func){
            case '+' :{
                outcome = Number(firstNum) + Number(secondNum);
                result.innerText = outcome;
                reset();
                break; 
            }

            case '-' :{
                outcome = Number(firstNum) - Number(secondNum);
                result.innerText = outcome;
                reset();
                break; 
            }
        }
    }
})

AC.addEventListener('click', function(){
    result.innerText = 0;
    reset();
})