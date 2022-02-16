let sizeTableEl = document.querySelectorAll('.shultes__size-item');
let start = document.querySelector('.shultes__btn-start');
let tebaleInner = document.querySelector('.shultes__games-inner');
let tableScore = document.querySelector('.shultes__number');
let sizeNumber = '';
let draw = '';

sizeTableEl.forEach((item) => {
    item.addEventListener('click', ()=> {
        document.querySelector('.shultes__number span').innerHTML = 1;
        sizeNumber = +item.getAttribute('data-size');
        switch(sizeNumber) {
            case 9: 
            draw = 33;
            break;
            case 16:
            draw = 25
            break
            case 25:
            draw = 20
            break
            case 36:
            draw = 16
            break
            case 49:
            draw = 14
            break
            case 64:
            draw = 12
            break
            case 81:
            draw = 11
            break
            case 100:
            draw = 10
            break
        }
        if(sizeNumber == 0) {
            alert('Выбирете розмер таблицы')
        }
        else {
            tableScore.classList.add('active')
            tebaleInner.innerHTML = ' '
            randomNuber(sizeNumber);
            pruntTable()
           
        }
    })
})



function pruntTable() {
   
    let tabaleItem = document.querySelectorAll('.shultes__games-item');
    tabaleItem.forEach((item) => {
        item.addEventListener('click', ()=> {
    
            let numberScore = +document.querySelector('.shultes__number.active span').textContent;
            let content = +item.textContent
    
            if(content == numberScore) {
                document.querySelector('.shultes__number span').innerHTML = numberScore + 1;
                tabaleItem.forEach((el) => {
                    el.style.background = 'transparent'
                })
            }
            else {
                item.style.background = 'red'
            }
            stopGame ()
        })
       
    })

    

}

function stopGame (){
    let countTable = +document.querySelector('.shultes__number.active span').textContent;
    if(countTable > sizeNumber) {
        alert("Поздравляем! Вы дошли до конца. Вы можете увеличить уровень сложности выбрать таблицу по больше")
        document.querySelector('.shultes__number.active span').innerHTML = 1;
        tebaleInner.innerHTML = ' '
        randomNuber(sizeNumber);
        pruntTable()
    }
}


function randomNuber(number) {
    let tableNumber = [];
    for(let i = 1; i <= number; i++) {
        tableNumber.push(`<div class="shultes__games-item" style="flex-basis: calc(${draw}%);">${i}</div>`)
    }
 
    function makeRandomArr() {
     return Math.random() - 0.5;
     }
     tableNumber.sort(makeRandomArr);

     tableNumber.forEach((item) => {
        tebaleInner.innerHTML += item;
    })
    
}