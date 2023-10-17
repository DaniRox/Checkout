//let btnAdd = document.getElementById("btn-add");

//let btnSubtract = document.getElementById("btn-subtract");

let amountItem = document.querySelectorAll("#amount");

let shipping = document.getElementById("")

let total = document.getElementById("total");


function add(){
    let amount = parseInt(amountItem.textContent);
    amountItem.innerHTML = amount + 1;
}

function subtract(){
    let amount = parseInt(amountItem.textContent);
    if(amount > 1){
        amountItem.innerHTML = amount - 1;
    } else {
        amountItem.innerHTML = 0;
    }
}

