const update=()=>{
//  alert('Function called');
let bill = Number(document.getElementById('bill').value);


let tipSelect =document.getElementById('tipSelect').value;
let tipSplit = document.getElementById('tipSplit').value;
let tipValue = document.getElementById('tipValue');


tipValue.innerHTML= bill * tipSelect /100;


document.getElementById('tipPercent').innerHTML= tipSelect + "%";
document.getElementById('total').innerHTML= bill + tipValue;
total.innerHTML = bill + parseInt(tipValue.innerHTML)


let newBill = total.innerHTML / tipSplit;
let eachTip = tipValue.innerHTML / tipSplit;

document.getElementById('split').innerHTML = tipSplit;
document.getElementById('billSplit').innerHTML = newBill;
document.getElementById('billTotalB').innerHTML = eachTip;
if (bill==''){
  alert('Please enter a bill amount');
  return;
}



}




let tipFull = document.getElementById('tipFull');
tipFull.addEventListener("input", update)