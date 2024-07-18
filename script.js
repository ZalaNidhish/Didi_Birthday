const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const inp1 = document.querySelector("#inp1")
const inp2 = document.querySelector("#inp2")
const inp3 = document.querySelector("#inp3")
const inp4 = document.querySelector("#inp4")
const inp5 = document.querySelector("#inp5")
const inp6 = document.querySelector("#inp6")
const task1 = document.querySelector("#task1")
const task2 = document.querySelector("#task2")
const task3 = document.querySelector("#task3")
const task4 = document.querySelector("#task4")
const task5 = document.querySelector("#task5")
const task6 = document.querySelector("#task6")


const num2 = 12345;
const num3 = 98315;
const num4 = 55442;
const num5 = 18724;



btn1.addEventListener("click",()=>{
        task1.style.display = "none";
        task2.style.display = "flex";
})


btn2.addEventListener("click",()=>{

    if(inp2.value==num2){
        task2.style.display = "none";
        task3.style.display = "flex";
    }else{
        alert("Please enter valid code")
    }

})


btn3.addEventListener("click",()=>{

    if(inp3.value==num3){
        task3.style.display = "none";
        task4.style.display = "flex";

    }else{
        alert("Please try again")
    }

})


btn4.addEventListener("click",()=>{

    if(inp4.value==num4){
        task4.style.display = "none";
        task5.style.display = "flex";

    }else{
        alert("Please try again")
    }

})


btn5.addEventListener("click",()=>{

    if(inp5.value==num5){
        task5.style.display = "none";
        task6.style.display = "flex";

    }else{
        alert("Please try again")
    }

})


