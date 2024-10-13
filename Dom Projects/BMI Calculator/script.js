const container = document.querySelector('.inputs button');

container.addEventListener('click',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const message =document.querySelector('#message')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //to display the result
        result.innerHTML= `<span> ${bmi}</span>`;

        if(bmi < 18.6){
            message.innerHTML = `<span>Under Weight</span>`
        } else if(bmi> 18.6 && bmi < 24.9){
            message.innerHTML = `<span>Normal Range</span>`
        }else if(bmi > 24.9){
            message.innerHTML = `<span>Over Weight</span>`
        }

        
    }
});