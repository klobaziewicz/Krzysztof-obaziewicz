const tagSearch = document.querySelectorAll('article.first');
console.log(tagSearch);

for(var i = 0; i < tagSearch.length; i++){
    const h1Search = tagSearch[i].querySelectorAll('h1');
    console.log(h1Search.length);

    //zadanie 1
console.log("zadanie 1.1")
}var el = document.querySelector(".title");
function getDataAnimation(element) {
    var a = el.dataset;
    console.log(a);
}
getDataAnimation(el);

//zadanie 2.1
console.log("zadanie 2.1")
const a = document.querySelector("#home");
const b = document.getElementById(home);
function a1(element) {
    console.log('znalazłem element o id ' + a.id);
}
a1(a)
//zadanie 2.2
console.log("zadanie 2.2")
const x = document.querySelector("li[data-direction]").innerHTML;
function a2(element) {
    console.log(x);
}
a2(x);
//zadanie 2.3
console.log("zadanie 2.3")
const d = document.querySelector(".block").innerHTML
function a3(element) {
    console.log(d)
}
a3(d)

//zadanie 3.1
console.log("zadanie 3.1")
const e1 = document.querySelectorAll("nav li")
function b1(element) {
    console.log(e1.length)
}
b1(e1)
//zadanie 3.2
console.log("zadanie 3.2")
const d1 = document.querySelectorAll("div p")
function fun(element) {
    console.log(d1.length);
}
fun(d1)
//zadanie 3.3
console.log("zadanie 3.3")
const art = document.querySelectorAll("article div")
function zrt(element) {
    console.log(art.length);
}
zrt(art)
//zadanie 4.1
console.log("zadanie 4.1")
const tg = document.querySelectorAll("article.first")
function ta(element) {
    console.log(tg.length);
}
ta(tg)
//zadanie 4.2
console.log("zadanie 4.2")
const tt = document.querySelectorAll("article.first > h1")
function tr(element) {
    console.log(tt.length);
}
tr(tt)


//DOM cz.1.3
//zadanie1
console.log("zadanie 1")
const links = []
function getDatasInfo(elements) {
    const tab1 = document.querySelectorAll("li").data;
    console.log(tab1);
}
getDatasInfo(links);
//zadanie3
console.log("zadanie 3")
const blocks = document.querySelectorAll(".block")
for(i=0; i<blocks.length; i++){
    console.log(blocks[i].innerHTML)
}

for(i=0; i<blocks.length; i++){
    console.log(blocks[i].outerHTML)
}
//innerHTML – zwraca lub ustawia kod HTML znajdujący się w tagu
//outerHTML – zwraca/ustawia kod HTML wraz z tagiem
document.getElementsByClassName("block").innerHTML = "Nowa wartość diva o klasie blocks"
//zadanie 4
console.log("zadanie 4")
const zmn = document.getElementById("mainFooter");
function getId(element) {
    console.log(zmn.id)
}
getId(zmn)
//zadanie 5
console.log("zadanie 5")
const childElements = ['co','ma','być','w','tablicy','childElements?']
function getTags(elements) {
    const tab1 = []
    for(i=0; i<childElements.length; i++){
        tab1[i] = childElements [i]
    }
    console.log(tab1)
}
getTags(childElements)
//zadanie 6
console.log("zadanie 6")
const banner = document.querySelectorAll("article div")
function  getClassInfo(element) {
    for(i=0; i<banner.length; i++){
        console.log(banner[i].className)
    }
}
getClassInfo(banner)
//zadanie 7
console.log("zadanie 7")
const lin = document.querySelectorAll("nav li")
function setDataDirection(elements) {
    for(i=0;i<lin.length;i++)
        if(isNaN(lin[i].dataset))    
            lin[i].setAttribute('data-direction','top')
}