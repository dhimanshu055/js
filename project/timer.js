const enddate="08 june 2024 10:00 PM"
document.getElementById("enddate").innerHTML= enddate;
const inputs= document.querySelectorAll("input")
// const clock = ()=>{

// }
function clock(){
    const end= new Date(enddate);
    const now = new Date ()
    const diff= (end-now) /1000;
    console.log(diff);
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/24/60)%60;
    inputs[2].value=Math.floor(diff/60%60)
    inputs[3].value=Math.floor(diff%60)
}
clock()
setInterval(
    ()=>{
        clock()
    },1000
)