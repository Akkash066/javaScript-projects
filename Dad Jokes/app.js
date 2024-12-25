const btn = document.getElementById("btn");

const apikey = "api key";

const options = {
    method: "GET", 
    headers: {
        "X-Api-key": apikey,
    },

};

const apiURL = "api url";
async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = response.json();

    console.log(data);
}


btn.addEventListener("click", getJoke)