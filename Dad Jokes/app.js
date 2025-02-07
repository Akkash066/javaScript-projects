const btn = document.getElementById("btn");
const apikey = "Paste your API Key";

const options = {
    method: "GET", 
    headers: {
        "X-Api-key API KEY": apikey,
    },
};
const apiURL = "api url";
async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = response.json();
    console.log(data);
}
btn.addEventListener("click", getJoke)
