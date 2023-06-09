
let myLeads = ["aaa","apple"];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click",function(){
    console.log("Button clicked from addEventListener")

     myLeads.push(inputEl.value);
     console.log(myLeads);
})

let listItems = "";

for(let i = 0; i < myLeads.length; i++)
{
   listItems += "<li>"+ myLeads[i] +"</li>";

    // create element
    // set text content
    // append to ul

    /*
        const li = document.createElement("li")
        li.textContent = myLeads[i]
        ulEl.append(li) 
    */
}

ulEl.innerHTML = listItems; 
//manipulating the dom once has better performance than constantly updating it