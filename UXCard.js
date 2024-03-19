const body = document.querySelector('body');
const card = document.querySelector('.card')
const cardNumbers = document.querySelector('.card-nums');
const entredCardNumbers = document.querySelector('.cardNumber');
const creditCardContainer = document.querySelector('.credit-card-container')
const numsBorder = document.querySelector('.card-nums-border');
const cardHolderName = document.querySelector('.cardName-section')
const cardHolderNameText = document.querySelector('.card-holder-name')
const enteredCardName = document.querySelector('.card-holder-name-text')
const enterCardHolder = document.querySelector('.cardHolder')
const secondCardNums = document.querySelector('.card-nums-after')
const cvv = document.querySelector('.CVV')
const firstCardDates = document.querySelector('.card-dates')
const secondCardDate = document.querySelector('.second-card-dates')
/////////////card holder numbers
let get = numsBorder.getBoundingClientRect().top 
console.log(get)

const entredCardNumbersMoveFunction = () =>{
    if(get = 25.80000114440918){
        numsBorder.style.top = 54 + 'px'
        numsBorder.style.left = 12 + 'px'
        numsBorder.style.width = 220 + 'px'
        numsBorder.style.height = 25 + 'px'
        console.log(get)
        numsBorder.classList.add('card-nums-border-appear')
    }
    if(get = 125.80000305175781){
        numsBorder.style.top = 56 + 'px'
        numsBorder.style.left = 12 + 'px'
        console.log(get)
        numsBorder.classList.add('card-nums-border-appear')
    }
}
const entredCardHolderMoveFunction = () =>{
    if(get = 125.80000305175781){
        numsBorder.style.top = 130 + 'px'
        numsBorder.style.width = 200 + 'px'
        numsBorder.style.height = 55 + 'px'
        numsBorder.style.left = 10 + 'px'
        console.log(get)
        numsBorder.classList.add('card-nums-border-appear')
    }
}
const moveDateFunction = () =>{
    if(get = 25.80000114440918){
        numsBorder.style.top = 128 + 'px'
        numsBorder.style.left = 200 + 'px'
        console.log(get)
        numsBorder.classList.add('card-nums-border-appear')
    }
    if(get = 125.80000305175781){
        numsBorder.style.top = 110 + 'px'
        numsBorder.style.left = 320 + 'px'
        numsBorder.style.height = 30 + 'px'
        numsBorder.style.width = 50 + 'px'
        console.log(get)
        numsBorder.classList.add('card-nums-border-appear')
    }
    console.log(date.value)
}

entredCardNumbers.addEventListener('click', entredCardNumbersMoveFunction);

const date = document.querySelector('.date')
date.addEventListener('click', moveDateFunction)


let a = date.getBoundingClientRect()
console.log(a)
/////////crad holder name 

enterCardHolder.addEventListener('click', entredCardHolderMoveFunction)
const cardNumsArr = [];

//intitial nums
for(let i = 1; i < 20; i++){
    const span = document.createElement('h3');
    span.setAttribute('class', 'zero');
    span.innerText = '0';
    if(i % 5 === 0){
        span.innerText = '-'
    }
    cardNumbers.appendChild(span);
    console.log(span)
};
//added numbers
for(let i = 1; i < 20; i++){ 
    let createdNum = document.createElement('h3')
    createdNum.setAttribute('class', 'addedNum')
    createdNum.innerText = '0';
    if(i % 5 === 0){
        createdNum.innerText = '-'
    }
    secondCardNums.appendChild(createdNum);
};
//first set of nums
const getSpan = document.querySelectorAll('.zero');
console.log(getSpan);
//second set of nums
const secondNums = document.querySelectorAll('.addedNum');
console.log(secondNums);

let count = -1
const cardNumFunction = () =>{
    console.log(event.key)
    count++
    getSpan.forEach((el,index)=>{
        console.log(el,index);
        console.log(`count ${count}`)
        if(count === 4 || count === 9 || count === 14){
            count += 1;
            // console.log(`counter: ${count}`)
        }
        console.log(`counter: ${count}`);
        if(index === count){
            console.log(el.classList.add('zero-add'))
        }
    })
    secondNums.forEach((sec,index)=>{
        console.log(sec,index);
        // console.log(`count ${count}`)
        if(count === 4 || count === 9 || count === 14){
            count += 1;
            // console.log(`counter: ${count}`)
        }
        console.log(`counter: ${count}`);
        if(index === count){
            console.log(sec.classList.add('addedNum-add'))
            sec.innerText = event.key
        }
    })
}
//print name code//
for(let i = 1; i < 20; i++){ 
    let createdNameLetters = document.createElement('h3')
    createdNameLetters.setAttribute('class', 'letter-name')
    createdNameLetters.innerText = '0';
    enteredCardName.appendChild(createdNameLetters)
};
const getLetterForName = document.querySelectorAll('.letter-name')
console.log(getLetterForName)

// for(let i = 1; i < 20; i++){ 
//     let secondLetters = document.createElement('h3')
//     secondLetters.setAttribute('class', 'second-letter')
//     secondLetters.innerText = '0';
//     enteredCardName.appendChild(secondLetters)
// };
// const getSecondLetters = document.querySelectorAll('.second-letter')
// console.log(getSecondLetters)

let letterCount = -1
const enterName = (event) =>{
    letterCount++
    getLetterForName.forEach((element,index) => {
        console.log(element,index)
        if(index === letterCount && event.key !== ' ' && event.key !== 8){
            element.classList.add('letter-name-add')
            element.innerText = event.key
            console.log(element)
        }
    })
    if(event.key === ' '){
        element.innerText = ' ' 
    }
    if(event.key === 8){
        letterCount --
        element.innerText = ' '
    }
}

console.log(cardHolderName)
entredCardNumbers.addEventListener('keypress', (event) =>{
    cardNumFunction(event);
})

entredCardNumbers.addEventListener('click', () =>{
    // cardNumbers.classList.add('card-nums-border');
})

enterCardHolder.addEventListener('keypress', enterName);

enterCardHolder.addEventListener('click', () =>{
    // cardHolderNameText.style.color = 'red';
    cardHolderName.classList.add('new-card-holder-class')
})


firstCardDates.innerText = '00/00'
const playFunction = (e) =>{
    let newDate = date.value
    for(let i = 6; i < newDate.length; i++){
        let arrDate = newDate.split('-');
        console.log(arrDate.reverse());
        let firstDate = arrDate[0]
        let secondDate = arrDate[1]
        // console.log(firstDate)
        for(let i = 3; i < secondDate.length; i++){
            let secondDateNew = secondDate.slice(-2)
            console.log(`${firstDate}/${secondDateNew}`)
            firstCardDates.innerText = `${firstDate}/${secondDateNew}` 
            firstCardDates.classList.add('class', 'card-dates-add')
            secondCardDate.classList.add('second-card-dates-add')
        }  
    }
}
// setTimeout(() =>{
//     playFunction();
// },7000)

cvv.addEventListener('click', playFunction)

