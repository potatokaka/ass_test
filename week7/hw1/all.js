const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
let bgColor = randomColor();
let randomTime = Math.floor(Math.random()*2000) + 1000;
let startTime = 0;
let endTime = 0;
let result = 0;
let switchColor = 0;
let counting = 0

// 隨機背景色
function randomColor(){
    // 16 位元色碼
    const randomArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = '#';
    for ( let i = 0; i < 6; i +=1 ){
        color += randomArr[Math.ceil(Math.random()*15)]
    }
    return color;
}

btn.addEventListener('click', 
    function gameStart(e){
        content.style.background = 'whitesmoke';
        counting = 1;

        switchColor = setTimeout(function(){
            content.style.background = bgColor;
            startTime = new Date();
            counting = 2;
        }, randomTime);
        
        e.stopPropagation();
        btn.classList.add('hidden');
        btn.innerText = '再玩一次';
    }
);

content.addEventListener('click', 
    function colorClick(e){
        endTime = new Date();
        result = (endTime - startTime)/1000;
        
        if ( counting === 0 ){
            alert('請點選按鈕，開始遊戲！')
        } else if( counting === 1 ){
            alert('還沒變色喔，失敗！');
            clearTimeout(switchColor);
        } else if ( counting === 2 ){
            alert(`你的成績：${result} 秒`);
        }

        // 重設隨機時間顏色
        randomTime = Math.floor(Math.random()*2000) + 1000;
        bgColor = randomColor();
        btn.classList.remove('hidden');
        counting = 0;
    }
)    