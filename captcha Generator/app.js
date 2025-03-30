let code = "";

function create(){
    document.getElementById("captcha").innerHTML = "";
    let key = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$^&";

    let length = 6;

    let captcha = [];
    for(let i = 0; i<length; i++){
        let index = Math.floor(Math.random()*key.length +1);
        if(captcha.indexOf(key[index]) == -1)
            captcha.push(key[index]);
        else i--;
    }
        let canvas = document.createElement("canvas");
        canvas.id = "captcha";
        canvas.width = 100;
        canvas.height = 50;
        let ctx = canvas.getContext("2d");
        ctx.font = "25px";
        ctx.strokeText(captcha.join(""), 0, 30);
        code = captcha.join("");
        document.getElementById("captcha").appendChild(canvas);
}

function validate(){
    event.preventDefault();
    debugger
    if(document.getElementById("captchaTextBox").value == code){
        alert("valid");
    }else{
        alert("invalid");
        create();
    }
}
