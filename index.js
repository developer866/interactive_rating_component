// get element from html
const submit = document.getElementById("submitBtn");
const buttons = document.getElementsByClassName("rating");
const container = document.querySelector(".container")
const secondDisplay = document.getElementById("thanks")
const btn = document.querySelectorAll(".rating");

submit.addEventListener("click",()=>{
    container.style.display = "none";
    thanks.style.display = "block";
});

rating1 = document.getElementById("rating1");
rating2 = document.getElementById("rating2");
rating3 = document.getElementById("rating3");
rating4 = document.getElementById("rating4");
rating5 = document.getElementById("rating5");

rating1.addEventListener("click",function(){
    document.getElementById("selected").innerHTML = `seleceted ${rating1.innerHTML} out of 5`
})
rating2.addEventListener("click",function(){
    document.getElementById("selected").innerHTML = `seleceted ${rating2.innerHTML} out of 5`
})
rating3.addEventListener("click",function(){
    document.getElementById("selected").innerHTML = `seleceted ${rating3.innerHTML} out of 5`
})
rating4.addEventListener("click",function(){
    document.getElementById("selected").innerHTML = `seleceted ${rating4.innerHTML} out of 5`
})
rating5.addEventListener("click",function(){
    document.getElementById("selected").innerHTML = `seleceted ${rating5.innerHTML} out of 5`
})

