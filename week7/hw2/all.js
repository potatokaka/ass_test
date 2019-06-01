let submit = document.querySelector('.btnSubmit');
let question = document.querySelectorAll('.required');
let message = document.querySelectorAll('.message');
let answer = document.querySelectorAll('.openInput');
let course = document.querySelector('input[name=course]');
let other = document.querySelector('input[name=other]');
let undone = 0;

submit.addEventListener('click', function(e){
    
    for ( let i = 0; i < question.length ; i += 1 ){
        if( answer[i].value == ''){
            e.preventDefault();
            question[i].classList.add('error');
            message[i].classList.remove('hidden');
            undone = 1;
        } else {
            question[i].classList.remove('error');
            message[i].classList.add('hidden');
        }
    }

    if ( !(course.checked) ){
        e.preventDefault();
        document.querySelector('#type').classList.add('error');
        document.querySelector('.message2').classList.remove('hidden');
        undone = 1;
    } else {
        document.querySelector('#type').classList.remove('error');
        document.querySelector('.message2').classList.add('hidden');
    }

    if ( undone == 0 ){
        console.log('Email:', answer[0].value);
        console.log('暱稱:', answer[1].value);
        console.log('報名類型:', course.value);
        console.log('現在的職業:', answer[2].value);
        console.log('怎麼知道這個計畫的:', answer[3].value);
        console.log('是否有程式相關背景:', answer[4].value);
        console.log('其他:', other.value);
        alert('提交成功')
    }
})