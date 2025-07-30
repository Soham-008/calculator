
const no = document.getElementById("display")
no.addEventListener("keydown", function (e) {
      const allowedKeys = [
        '0','1','2','3','4','5','6','7','8','9',
        '+','-','*','/','%','=','(',')','.', '^',
        'Backspace','Delete','ArrowLeft','ArrowRight','Enter'
      ];

      // If key is not allowed, prevent it
      if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    });

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
