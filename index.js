var arr=[]
/*here i have imported the add button*/
var add=document.getElementById("push") 

/*here i have import input box*/
var inputBox=document.getElementById("textbox")  

/*here i have import div which contain new task which we are going to add*/
var parent=document.getElementById("tasks")

var todos=localStorage.getItem("todos") || "[]" ;

if(todos)
{
    todos=JSON.parse(todos);
    
    todos.forEach(function(input){
        arr.push(input);
        var element=document.createElement("div");
        element.innerText=input;
    
        /* giving class to the created element */
        element.setAttribute("class","newtask");
    
        /* creating delete/remove button to remove the added task */
        var deletebtn=document.createElement("button")
        deletebtn.innerText="Remove";
        deletebtn.setAttribute("class","remove")
        deletebtn.addEventListener("click",function(){
            deletetodo(parent,element,input);
        })
    
        /* appending the delete/remove button in the created div element  */
        element.appendChild(deletebtn);
    
        /* appending the created div element in the parent div element */
        parent.appendChild(element);
    });
}



/*here i have added event listener in the add button*/
add.addEventListener("click",effect)
inputBox.addEventListener("keyup",function(event){
    if(event.which===13)
    {
        effect();
    }
})
/* effect function which i have passed in the event listener of add button*/
function effect()
{
    /* taking the value which is enter by the user */
    var input=inputBox.value;

    // Checking the input box empty or not
    if(!inputBox.value)
    {
        inputBox.classList.add("warning");
        return;
    }
    inputBox.classList.remove("warning")

    /* createing a div element and assigning them input of the user */
    var element=document.createElement("div");
    element.innerText=input;

    /* giving class to the created element */
    element.setAttribute("class","newtask");

    /* creating delete/remove button to remove the added task */
    var deletebtn=document.createElement("button")
    deletebtn.innerText="Remove";
    deletebtn.setAttribute("class","remove")
    deletebtn.addEventListener("click",function(){
        deletetodo(parent,element,input)
    })

    /* appending the delete/remove button in the created div element  */
    element.appendChild(deletebtn);

    /* appending the created div element in the parent div element */
    parent.appendChild(element);

    arr.push(input);

    localStorage.setItem("todos",JSON.stringify(arr));

    /* empyting the input box after click of add button */
    inputBox.value="";
}

function deletetodo(parent,element,input)
{
    parent.removeChild(element);
    var index=arr.indexOf(input);
    arr.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(arr));
}
