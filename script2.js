let displayElemtwo = document.querySelector('.displaytwo');
let minusElemtwo = document.querySelector('.minustwo');
let plusElemtwo = document.querySelector('.plustwo');

let counttwo = 0;

updateDisplaytwo();

plusElemtwo.addEventListener("click",()=>{
    counttwo++;
    updateDisplaytwo();
}) ;

minusElemtwo.addEventListener("click",()=>{
    counttwo--;
    updateDisplaytwo();
});

function updateDisplaytwo(){
    displayElemtwo.innerHTML = count;
};