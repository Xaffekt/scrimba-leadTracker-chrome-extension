
let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click",function(){
     myLeads.push(inputEl.value);
     inputEl.value = "";
     renderLeads();
})

function renderLeads()
{
    let listItems = "";

    for(let i = 0; i < myLeads.length; i++)
    {
        //clean way to use inner.html
        //called template literals(string)
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`;
    } 
    ulEl.innerHTML = listItems; 
    //manipulating the dom once has better performance than constantly updating it
}

    /*Coding alternatives
        create element
            const li = document.createElement("li")
        set text content
            li.textContent = myLeads[i]
        append to ul
            ulEl.append(li) 
            
        Messy way to use inner.html
        listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>"+ myLeads[i] +"</a></li>";  
    */