const container = document.getElementById("container");
var colors = ["#D91656", "#FEFFA7", "#FF0080", "#E6E9AF", "#EBEAFF","#640D5F", "#D91656","#EE66A6"];
var squares = 1000;

for(let i = 0; i<squares; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", ()=>setColor(square));

    square.addEventListener("mouseout", ()=> removeColor(square));
    container.appendChild(square);
}
//set color
function setColor(element){
    const color = randdomColor();
    element.style.backgroung = color;
    element.style.boxShadow = `0 0 3px ${color}, 0 010px ${color}`;
}

//remove color
function removeColor(element){
    element.style.backgroung = "#1d1d1d";
    element.style.boxShadow = "0 0 3px";
}
//generate random color
function randdomColor(){
    return colors [Math.floor(Math.random()*colors.length)];
}
