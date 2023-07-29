let array1 = ['red','green','yellow','blue','black','Orange']
let user = [1,1,2,1]
let sum  = user[0]+user[1]+user[2]+user[3]
let num  = document.getElementById("input")
let changeEl = document.getElementById("change")
changeEl.style.backgroundColor = array1;
function changeColor(){
    if(num < 7){
        console.log(array1[num-1])
    }
    else{
        console.log("The provided value is out of range.")
    }
}
changeColor()