let btnAdd = document.querySelectorAll("#btn-add");

let btnSubtract = document.querySelectorAll("#btn-subtract");

let shipping = document.querySelector("#shipping");

let total = document.getElementById("total");



function add(event){
    let amountItem = event.currentTarget.parentElement.querySelector("#amount");
    let amount = parseInt(amountItem.textContent);
    amount += 1;
    amountItem.textContent = amount;

    totalCost();
}



function subtract(event){
    let amountItem = event.currentTarget.parentElement.querySelector("#amount");
    let amount = parseInt(amountItem.textContent);
    if(amount > 1){
        amount -= 1;
        amountItem.textContent = amount;
    } else {
        amountItem.textContent = 0;
    }

    totalCost();
}





btnAdd.forEach(function(btn) {
    btn.addEventListener("click", add);
})

btnSubtract.forEach(function(btn) {
    btn.addEventListener("click", subtract);
})


function totalCost() {
    let shipping = parseFloat(document.querySelector("#shipping").textContent);
    let total = 0;
  
    let productItems = document.querySelectorAll(".div-item");
  
    productItems.forEach(function (product) {
        let amount = parseInt(product.querySelector("#amount").textContent);
        let costItem = parseFloat(product.querySelector("#cost").textContent);

        total += costItem * amount;
    });
  
    total += shipping;
  
    document.getElementById("total").textContent = Number(total.toFixed(2));
  }
  