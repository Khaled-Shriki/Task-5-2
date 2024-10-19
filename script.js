const enterValue = document.querySelector('.entered-value');
const fromUnit = document.querySelector('.from-unit');
const toUnit = document.querySelector('.to-unit');
const btnCal = document.querySelector('.cal');
const resulHm = document.querySelector('.result');

function transfer(){
 let resulH = "";
 if(fromUnit.value == "cm" && toUnit.value == "cm"){
    resulH = Number(enterValue.value);
 } else if(fromUnit.value == "cm" && toUnit.value == "m"){
    resulH = Number(enterValue.value) / 100;
 } else if(fromUnit.value == "cm" && toUnit.value == "km"){
    resulH = Number(enterValue.value) / 100000;
}else if(fromUnit.value == "m" && toUnit.value == "cm"){
    resulH = Number(enterValue.value) * 100;
} else if(fromUnit.value == "m" && toUnit.value == "m"){
    resulH = Number(enterValue.value);
}else if(fromUnit.value == "m" && toUnit.value == "km"){
    resulH = Number(enterValue.value) / 1000;
}else if(fromUnit.value == "km" && toUnit.value == "cm"){
    resulH = Number(enterValue.value) * 100000;
}else if(fromUnit.value == "km" && toUnit.value == "m"){
    resulH = Number(enterValue.value) * 1000;
}else if(fromUnit.value == "km" && toUnit.value == "km"){
    resulH = Number(enterValue.value);
}
resulHm.innerHTML = resulH;
}
btnCal.addEventListener("click",transfer);