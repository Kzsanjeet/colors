
const btn = document.getElementById("btn")
const result = document.querySelector(".text")
const main = document.querySelector(".main")
const reset = document.getElementById("reset")
const colorA = ["red","blue","green","yellow","peru","orange","pink"]

let changeColor = ()=>{
    const value1 = document.getElementById("value1")
    const value2 = document.getElementById("value2")
    const value3 = document.getElementById("value3")
    const total = Number(value1.value)+Number(value2.value)+Number(value3.value)
    console.log(value1,value2,value3)
    if (total != 0 && total < 7){
        const display = colorA[total-1]
        result.textContent = `Your Color is ${display}`
        main.style.backgroundColor = display;}
    else{
        result.textContent = `Your Color is out of range.`
        main.style.backgroundColor = "aqua";
    } 
    if (total === 0){
        alert("You must put the value!!!")
    }
    value1.value = ""
    value2.value = ""
    value3.value = ""
}
btn.addEventListener("click",()=>{
    changeColor()
})  
const rstfun= ()=>{
    result.textContent = `Input the values..`
    main.style.backgroundColor = "lavenderblush"
}
rst.addEventListener("click",()=>{
    rstfun()
})