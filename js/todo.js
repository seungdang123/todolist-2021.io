const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
let checkboxs = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    
    checkboxs = JSON.parse(localStorage.getItem("checkbox"));
    checkboxs = checkboxs.filter((checkboxs) => li.id !== checkboxs);

    localStorage.setItem("checkbox", JSON.stringify(checkboxs));

    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    saveToDos();
}


function checkedBtn(event) {

    const li = event.target.parentElement;
    const span = li.querySelector("span");
    span.classList.toggle("textLine");
    const great = li.querySelector("#great");
    great.classList.toggle("nice");
    const btn = li.querySelector("#boxCss");             
    btn.classList.toggle("checked");
    if (btn.innerText === "") {
      btn.innerText = "V";
    } else {
      btn.innerText = "";
    }
}

// modified
function saveEnd(event) {

    loadCheckboxs = JSON.parse(localStorage.getItem("checkbox"));
    
    const li = event.target.parentElement;

    if (loadCheckboxs === null){
        localStorage.setItem("checkbox", JSON.stringify(checkboxs));
        loadCheckboxs = localStorage.getItem("checkbox");
        localStorage.setItem('checkbox', JSON.stringify(li.id));
    }

    else if (localStorage.getItem('checkbox')){
        checkboxs = JSON.parse(localStorage.getItem('checkbox'));
    }
    
    
    if (loadCheckboxs.includes(li.id) === false){
    checkboxs.push(li.id);
    localStorage.setItem("checkbox", JSON.stringify(checkboxs));
    }

    else{ 
        const index = checkboxs.indexOf(li.id);
        const newCheckbox = []
       
        for(var i = 0 ; i < checkboxs.length ; i++){
            if(index != i){
                newCheckbox.push(checkboxs[i])
            }
            else{
                continue;
            }
        }

        checkboxs = newCheckbox;

        checkboxs = checkboxs.filter((element) => checkboxs !== null || checkboxs !== undefined);

        localStorage.setItem("checkbox", JSON.stringify(checkboxs));
    }
}


function paintTodo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    const finishBtn = document.createElement("div");
    finishBtn.addEventListener("click",checkedBtn);
    finishBtn.addEventListener("click",saveEnd);
    finishBtn.setAttribute("id","boxCss");
    const great = document.createElement("span");
    great.innerText = "Nice!";
    great.setAttribute("id","great");
    li.appendChild(finishBtn);
    li.appendChild(button);
    li.appendChild(span);
    li.appendChild(great);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
    // parsedToDos.forEach((item) => console.log("this is the turn of " , item));
}   



const saveChk = JSON.parse(localStorage.getItem("checkbox"));
const chkArr = saveChk;

for (var i = 0; i < chkArr.length ; i++){
    let temp = chkArr[i];
    const li = document.getElementById(temp);
    const span = li.querySelector("span");
    const great = li.querySelector("#great");
    const btn = li.querySelector("#boxCss");
    btn.classList.add("checked");
    great.classList.add("nice");
    span.classList.add("textLine");
    btn.innerText = "V";

}














