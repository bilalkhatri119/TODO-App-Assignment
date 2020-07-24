



var list = document.getElementById("list");


function addTodo(){
    var todo_item = document.getElementById("todo-item");


    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
        li.setAttribute("class","list_group_item")
    li.appendChild(liText)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
        delBtn.setAttribute("class", "ml-3 btn btn-secondary")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)


    var editBtn = document.createElement("button");
    var eidtText = document.createTextNode("EDIT")
    editBtn.appendChild(eidtText)
    editBtn.setAttribute("onclick","editItem(this)")
             editBtn.setAttribute("class","ml-3 btn btn-secondary")




    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""

}

function deleteItem(e){
    e.parentNode.remove()
    
}




function editItem(e){
    var val = prompt("Enter Updated Todo",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}



function deleteAll(){
    list.innerHTML = ""
}