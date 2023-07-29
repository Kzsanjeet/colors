const btn = document.getElementById("btn")
const main = document.getElementById("main")
const result = document.getElementById("text")
const colorA = ['red','blue','green','yellow','orange','peru','pink']

const changeColor = ()=>{
    const value1 = document.getElementById("value1").value
    const value2 = document.getElementById("value2").value
    const value3 = document.getElementById("value3").value
    const total = Number(value1)+Number(value2)+Number(value3)
    console.log(value1,value2,value3)
    if (total != 0 && total < 8){
        const display = colorA[total-1]
        result.textContent =`Your color is ${display}`
        main.style.backgroundColor = display;
    }else{
        result.textContent =`Your number is out of range.`
        main.style.backgroundColor = "aqua";
    }
    if(total === 0){
        alert("You must enter the value.")
    }
}

btn.addEventListener("click",()=>{
    changeColor()
})