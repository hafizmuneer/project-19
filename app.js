
function myFunction() {
    document.getElementById("h1").innerHTML = "Virat Kohli";
    document.getElementById("para").innerHTML =
        "He Is The Best Cricketer In The World";

    let box = document.getElementById("box");
    box.className = "design";
}

function myimage() {
    let img = document.getElementById("img");
    img.className = "image";
}

function back() {
    let img = document.getElementById("img");
    img.className = "add";
}
function mybutton() {
    let section = document.getElementById("cricketers");
    let paras = section.getElementsByTagName("p");

    let names = ["rohit", "bumrah", "rahul", "dhoni", "virat"];

    for (let i = 0; i < paras.length; i++) {
        paras[i].innerHTML = names[i];
        paras[i].className = "highlight";
    }
}
function highlightrules(){
    let rule = document.getElementById("rules")
    let par = rule.getElementsByTagName("p");
    for(let i =0; i < par.length; i++){
        par[i].innerHTML = "highlighted rules"
        par[i].className = "design1"
    }
}
function highlightcourse(){
    let course = document.getElementById("course")
    let paraaa = course.getElementsByTagName("p");
    for(let i =0; i < paraaa.length; i++){
        paraaa[i].innerHTML = "highlighted course"
        paraaa[i].className = "value"
    }
}