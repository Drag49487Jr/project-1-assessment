/*----- constants -----*/ 
const score = document.getElementById('display');
let numOne = document.getElementById('number');
/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 

/*----- event listeners -----*/ 
document.getElementById('plus').addEventListener('click', addition);
document.getElementById('minus').addEventListener('click', subtraction);
/*----- functions -----*/

init();
function init(){
    counter = {
        display:0,
    };
}
function renderScore (add){
    score.textContent = add;
}
function addition(){
  let add = counter.display+=(parseInt((numOne.value)));
   renderScore(add);
}

function subtraction(){
    let sub = counter.display-=(parseInt((numOne.value)));
    renderScore(sub);
}