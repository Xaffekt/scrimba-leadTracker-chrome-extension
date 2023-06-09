
let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click",function(){
    console.log("Button clicked from addEventListener")

     myLeads.push(inputEl.value);
     console.log(myLeads);
})

for(let i = 0; i < myLeads.length;i++)
{
    ulEl.textContent += myLeads[i] + " ";
}