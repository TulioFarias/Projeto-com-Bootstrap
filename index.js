const btnCalcular = document.getElementById('btnCalcular')
const input = document.getElementById('meuImput')



function insert(num){
    let value = input.value
    input.value = value + num;
}

function clean(){
   input.value = ""
}

function back(){
    let result = input.value

    input.value = result.substring(0, result.length - 1)
}


function calcular(){
    let result = input.value

    if(result){
        input.value = eval(result)
    }
}




btnCalcular.addEventListener('click', calcular)
