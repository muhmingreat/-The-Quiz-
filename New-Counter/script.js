'use strict';
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const counting = document.querySelector('.counter')

let number = 0;
function  increment ()  {
    counting.textContent = number
    number ++ ;
}
    
    function decrement  ()  {
        if(number === 0){
            return number
        }
        number -- ;
        counting.textContent = number;
    }
    incrementBtn.addEventListener("click", increment);
    decrementBtn.addEventListener("click", decrement);
// }

    // function reset () {
    //     number = 0;
    //     counting.textContent = value

//     const allBtns = document.querySelectorAll("#btn-div");
// const counting = document.querySelector(".counter");
// allBtns.addEventListener
// console.log(counting)
// console.log(allBtns)
// function counter  (event)  {
//     const btn = event.target.id 
//     console.log(btn)
//     if(btn === 'increment'){
//     number++
//         }else if(btn === 'decrement'){
//     number--
//         }else{

//     number;
//     }
//     counting.textContent = number
//     }          

 
//
