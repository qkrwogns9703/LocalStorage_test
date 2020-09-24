
let form = document.querySelector('.userNameForm');
let input = form.querySelector('input');
let textSection = document.querySelector('.textSection');    

getUserName();

function saveUser(value) {
    localStorage.setItem("userName",value); //key 와 value 설정
}
function loadData(value) {
    form.classList.add("hello");
    textSection.innerHTML = `안녕하세요, ${value}님 `
}
function getUserName(){
    if(localStorage.getItem("userName")!==null){
        loadData(localStorage.getItem("userName"));
    }
    form.addEventListener('submit',formSubmit);
}
function formSubmit(event){
    event.preventDefault();
    let userName = input.value;
    saveUser(userName);
    loadData(userName);    
}
localStorage.clear();


