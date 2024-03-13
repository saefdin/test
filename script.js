let btns = document.querySelectorAll('.tabs > button');
let conts = document.querySelectorAll('.flex')

function changeActive(i) {
  btns.forEach( (btn , index)=>{
    btn.classList.toggle('btn-active' , index === i);
  });
  conts.forEach( (box , index)=>{
    box.classList.toggle('cont-active' , index === i);
  })
}


// Lecture 18

// forEach() || Arrow Function || Anonomouse function || toggle className
// let arr = [ 1 , 2 , 15 , -20, 2  ];

// for(i=0; i< arr.length; i++){
   
// }

// for(val of arr){
//     console.log(val)
// }

// for(index in arr){
//     console.log(arr[index])
// }

// arr.forEach( (el , i)=>{
//     console.log(`The index variable ${i} = ${el}`)
// })
// function funName(a){
//     return "Hello"
// }

// funName = (a) => "Hello"
