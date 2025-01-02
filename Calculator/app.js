const buttons = document.getElementsByTagName("button");

let length = buttons.length;
let result = document.getElementById("result");


for(i = 0; i< length; i++){
    buttons[i].onclick = indicator;

}

function indicator(){
    let value = this.innerHTML;
    if(value == "="){
        try{
            result.value = eval(result.value);
        }catch(e){
            result.value = "0";
        }
        return;
    }
    result.value += value;
}
