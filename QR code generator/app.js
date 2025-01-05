const data = document.querySelector("#text");
const qrCode = document.querySelector("#qrCode");


const data = document.querySelector("#text");
const qrCode = document.querySelector("#qrCode");
const Generator = document.querySelector("#Generator");

const url = "https://api.qrserver.com/v1/create-qr-code/"

Generator.addEventListener("click", () => {
    const size = `350x350`;
    qrCode.src = `${url}?/size=${size}&data=${data.value}`;
    console.log("clicked");
    if(data.value == ""){
        qrCode.src = "/def.png";
    }
})
