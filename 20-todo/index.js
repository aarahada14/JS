
let task = document.getElementById("task")
let add = document.getElementById("add")
let tbody = document.getElementById("tbody")
let priority = document.getElementById("priority")

add.addEventListener("click", addTask)

let task_arr = JSON.parse(localStorage.getItem("task_arr")) || []


//......................showtask started.............//
showTask(task_arr)
function setLocal(ta){
    localStorage.setItem("task_arr", JSON.stringify(ta))
    showTask(task_arr)
}
//......................showtask end.............//



//......................sorting started.............//
        // function sorting(){
        //   let newArr = task_arr.sort((a,b) => a.pri - b.pri)

        //  setLocal(newArr)
            
        // }
function sorting(){
    let newArr = task_arr.sort((a,b) => b.pri - a.pri)
  
   setLocal(newArr)
      
  }
//......................sorting end.............//

priority.addEventListener("change", function(e){
    console.log(e.target.value)
})


//......................addTask started.............//
function addTask(){

    let obj = {
        id: Math.round(Math.random()*1000),
        pri: priority.value,
        text : task.value,
        status : false
    }
    if(task.name=="")
        {
            task_arr.push(obj)
        }
        else{
            task_arr =  task_arr.map((ele) => {
                if(ele.id == task.name)
                {
                    ele.text = task.value;
                    ele.pri = priority.value;
                }
                return ele;
            })
        }
            
    setLocal(task_arr)
    task.name = ""

}
//......................addTask end.............//


//......................change status started.............//
function changeStatus(e){
    task_arr = task_arr.map((ele) => {
            if(ele.id == e)
            {     
                ele.status = !ele.status
            }
            return ele     
    })

showTask(task_arr)
}
//......................change status ended.............//



//......................Task delete started.............//
function deleteTask(e){
    task_arr =  task_arr.filter((ele) => ele.id != e)
 
   showTask(task_arr)
 }
//......................Task delete ended.............//



//......................Task edit started......................//
function editTask(e)
{
    console.log(e)
    task.value = e.text;
    task.name=e.id
}
//......................Task edit ended......................//



function showTask(array){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    tbody.innerHTML = ""
    array.map((ele) => { 

        let tr = document.createElement("tr");
        let td_text = document.createElement("td"); 
        let td_status = document.createElement("td"); 
        let td_edit = document.createElement("td"); 
        let td_delete = document.createElement("td"); 
        let btn_edit = document.createElement("button"); 
        let btn_delete = document.createElement("button"); 
        let span = document.createElement("span");

        td_text.textContent = ele.text;
        td_text.className="position-relative"
        span.textContent = ele.pri=="1" ? "High" : ele.pri=="2" ? "Mid" : "Low";
        span.className = ele.pri == "3" 
                                            ? "badge text-bg-secondary position-absolute top-0 start-0 translate-middle"
                                            : ele.pri == "2" ?
                                                "badge text-bg-warning position-absolute top-0 start-0 translate-middle"
                                            : 
                                                "badge text-bg-danger position-absolute top-0 start-0 translate-middle"
        btn_edit.textContent="✏️"
        btn_edit.setAttribute("class", "btn btn-info btn-sm")
        btn_delete.textContent="❌"
        btn_delete.setAttribute("class", "btn btn-dark btn-sm")

        td_status.textContent = ele.status ? "👍Complet" : "👎Not complet";

        td_text.append(span)
        td_status.onclick = () => changeStatus(ele.id)
        btn_delete.onclick = () => deleteTask(ele.id);
        btn_edit.onclick = () => editTask(ele)

        td_edit.append(btn_edit)
        td_delete.append(btn_delete)
        tr.append(td_text, td_status, td_edit, td_delete)

         if(ele.status)
         {
             tr.setAttribute("class", 'table-success')
         }
         else{
            tr.setAttribute("class", 'table-warning')
         }
         
    tbody.append(tr)   
    task.value=""      
})
}
