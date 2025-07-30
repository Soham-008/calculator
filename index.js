
const no = document.getElementById("display")

function cleardisplay(){
    no.value = ""

}
function appendToDisplay(input){

    console.log(no.value += input)

}
function calculate(){
    console.log("You pressed on compute")
    try{
        no.value = eval(no.value)

    }
    catch(error){
        no.value="ERROR"
    }
    
     
}
function goback(){
    no.value=Math.floor(no.value /10)
  
}
