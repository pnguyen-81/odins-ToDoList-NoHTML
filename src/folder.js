import {newtasklist} from './task.js'

let folders = [];

function newfolder (name) {
    let foldername = prompt('What is the name of the folder? Please limit to 5 words');
    let taskslist = `tasklist${folders.length}`;
    
    newtasklist(`tasklist${folders.length}`);

    let folder = document.createElement('div');
    folder.classList.add(`folder`);
    folder.id = `tasklist${folders.length}`    
    folder.innerText = foldername;
    folder.addEventListener('click', function(){
        for (let f of document.querySelectorAll('.folder')){
            f.classList.remove('focused');
        }
        this.classList.add('focused');
    })
    folder.addEventListener('click', function(){
        for (let f of document.querySelectorAll('.folder')){
            f.classList.remove('focused');
        }
        this.classList.add('focused');
    });
    folder.addEventListener('click', function(){
        if (document.getElementById('visible'))
        document.getElementById('visible').id = '';
        for (let n of document.querySelectorAll('.tasklistgeneral')){
            n.style.visibility = 'hidden';
        }
        document.querySelector(`.${this.id}`).style.visibility =' visible';
        document.querySelector(`.${this.id}`).id = 'visible';    })

    for (let f of document.querySelectorAll('.folder')){
        f.classList.remove('focused');
    };
    folder.classList.add('focused');
    document.querySelector('.sidebarfolder').appendChild(folder);
    folders.push(foldername);
}

export {newfolder};