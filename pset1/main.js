const boxes = document.querySelectorAll('.box');
console.dir(boxes);

let i = 0;

setInterval(function(){
    if(i%2 === 0){
        boxes[i].classList.toggle('green');
    }
    if(i%2 != 0){
        boxes[i].classList.toggle('red');
    }

    console.log(i);
    i++;
    if(i > 8){
        i = 0;
    }
},1000)