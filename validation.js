let inputs = document.querySelectorAll("input");
let select = document.querySelectorAll("select");
let allInputs = inputs + select;


day.addEventListener("blur", function (e){
    const dayValid = e.currentTarget.value;
    if(dayValid > 0 && dayValid < 32) {
        valid()
    }
    if(dayValid.length === 0) {
        spanErrorDay.innerHTML = "This field is required";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        day.style.outline = "1px solid hsl(0, 100%, 67%)";
    }

    if(dayValid > 31) {
        spanErrorDay.innerHTML = "Must be a valid day";
        error();
    }
})


function valid(){
    var i;
    for (i = 0; i < labels.length; i ++){
        labels[i].style.color = "hsl(0, 0%, 8%)";
    }
}

function error(){
    var i;
    for (i = 0; i < labels.length; i ++){
        labels[i].style.color = "hsl(0, 100%, 67%)";
    }
}