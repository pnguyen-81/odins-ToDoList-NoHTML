import './style.css';
import {newfolder} from './folder.js'
import {createtaskwindow, deleteme} from './task.js'

let user = prompt('Welcome to your to do list! What is your name?');
if (user == '') {
    user = 'User';
}

const headerbar = document.createElement('div');
const mainbody = document.createElement('div');
document.querySelector('body').appendChild(headerbar);
document.querySelector('body').appendChild(mainbody);

mainbody.classList.add('mainbody');
headerbar.classList.add('header');
headerbar.innerHTML = `Welcome, <span style="color: yellow;">${user}</span>`;

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
mainbody.appendChild(sidebar);

const newfolderbtn = document.createElement('div');
newfolderbtn.classList.add('newfolderbtn')
newfolderbtn.innerHTML =`<i class="fa-solid fa-square-plus fa-xl">📋</i> New Folder`;
sidebar.appendChild(newfolderbtn);

const sidebarfolder = document.createElement('div');
sidebarfolder.classList.add('sidebarfolder');
sidebar.appendChild(sidebarfolder);

const taskbar = document.createElement('div');
taskbar.classList.add('taskbar');
mainbody.appendChild(taskbar);

const newtasksbtn = document.createElement('div');
newtasksbtn.classList.add('newtasksbtn'); 
newtasksbtn.innerHTML ='<i class="fa-solid fa-thumbtack fa-xl">📝</i> New task';
taskbar.appendChild(newtasksbtn);

let taskbartasks = document.createElement('div');
taskbartasks.classList.add('taskbartasks');
taskbar.appendChild(taskbartasks);

const footer = document.createElement('footer');
footer.innerHTML= `Copyright @ ${(new Date().getFullYear())} Phuoc Nguyen <a href="https://github.com/pnguyen-81"><i class="fa-brands fa-github">👾</i></a>`;
document.querySelector('html').appendChild(footer);

newfolderbtn.addEventListener('click', newfolder);

newtasksbtn.addEventListener('click', createtaskwindow);