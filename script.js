
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let permuter = document.getElementById('switch');

function change (){
    let x = input1.value;
    input1.value =  input2.value;
    input2.value = x;
}

permuter.addEventListener('click',change)



