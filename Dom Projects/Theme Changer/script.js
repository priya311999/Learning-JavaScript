const  buttons = document.querySelectorAll('.button')
// console.log(buttons);
const bodye = document.querySelector('body')
console.log(bodye);

buttons.forEach(function (b){
    b.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'grey'){
            bodye.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'yellow'){
            bodye.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'orange'){
            bodye.style.backgroundColor = e.target.id
        }

        if(e.target.id === 'aqua'){
            bodye.style.backgroundColor = e.target.id
        }
    })
})