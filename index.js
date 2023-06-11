
let myLeads = [];

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage;
    renderList(myLeads);
}


inputBtn.addEventListener("click",function(){ //input btn
    myLeads.unshift(inputEl.value); 
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderList(myLeads);
});


tabBtn.addEventListener("click", function(){ //tab btn
    console.log(tabs[0].url);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs);

        myLeads.unshift(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderList(myLeads);
    });

});

deleteBtn.addEventListener("dblclick", function(){ //delete btn
    myLeads = [];
    localStorage.clear();
    renderList(myLeads);
})

function renderList(arr)
{
    let listItems = "";

    for(let i = 0; i < arr.length; i++)
    {
        //clean way to use inner.html
        //called template literals(string)
        listItems += `
            <li>
                <a target='_blank' href='${arr[i]}'>
                    ${arr[i]}
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