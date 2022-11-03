let tasklists = [];

function newtasklist(listnumber){
    let tasknewlist = document.createElement('div');
    tasknewlist.classList.add(listnumber);
    tasknewlist.classList.add('tasklistgeneral');
    tasknewlist.addEventListener('contextmenu', event => event.preventDefault());
    document.querySelector('.taskbartasks').appendChild(tasknewlist);
    for (let n of document.querySelectorAll('.tasklistgeneral')){
        n.style.visibility = 'hidden';
    }
    tasknewlist.style.visibility = 'visible';
    if (document.getElementById('visible'))
        document.getElementById('visible').id = '';
    tasknewlist.id = 'visible';
}

function createtaskwindow() {
    let backgrounddiv = document.createElement('div');
    backgrounddiv.classList.add('backgrounddiv');
    backgrounddiv.addEventListener('click', function(){
        backgrounddiv.remove();
        newtaskwindow.remove();
    })
    document.querySelector('body').appendChild(backgrounddiv);

    let newtaskwindow = document.createElement('div');
    newtaskwindow.innerHTML = `<form id="newtaskwin" action="none"><br><label for="taskdesc">Task Description. Max 100 characters</label><br>
    <input type="text" id="taskdesc" placeholder="Feed Mellow" maxlength="100" style="height:20px; width: 400px;"><br><br>
    <label for="taskdate">Due Date</label><br>
    <input type="date" id="taskdate"><br><br>
    <label for="taskurgency">Urgency</label><br>
    <select name="taskimportance" id="taskurgency">
        <option value="No" style="background-color: rgb(190, 255, 190);">Not Urgent</option>
        <option value="Maybe" style="background-color: rgb(254, 255, 190);">Somewhat</option>
        <option value="Yes" style="background-color: rgb(255, 190, 190);">Urgent</option>
    </select><br><br>
    <input type="submit" value="Add Task"></form>`;
    document.querySelector('body').appendChild(newtaskwindow);
    document.querySelector('form').addEventListener("submit", newtask, true);
}  

var newtask = function(event){
    event.preventDefault();
    let taskdesc = document.querySelector('#taskdesc').value;
    let taskdate = document.querySelector('#taskdate').value;
    let taskurgent = document.querySelector('#taskurgency').value;

    let taskdiv = document.createElement('div');
    taskdiv.innerHTML = `${taskdesc} <span>${taskdate}</span>`;
    if (taskurgent == 'Yes'){
        taskdiv.style.backgroundColor = 'rgb(255, 190, 190)'
    } else if (taskurgent == 'Maybe'){
        taskdiv.style.backgroundColor = 'rgb(254, 255, 190)'
    } else {
        taskdiv.style.backgroundColor = 'rgb(190, 255, 190)'
    }
    taskdiv.classList.add('task');

    taskdiv.addEventListener('click', function(){
        if (this.classList.contains('done')){
            this.classList.remove('done');  
        } else {
            this.classList.add('done');
        }
    })
    taskdiv.addEventListener('contextmenu', event => event.preventDefault());
    taskdiv.addEventListener('auxclick', function(e) {
        if (e.button == 2) {
            this.remove();
    }})
    taskdesc = '';
    document.querySelector('#visible').appendChild(taskdiv);

}

function deleteme(e){
    e.parentNode.remove();
}

export {newtasklist, createtaskwindow, deleteme};