const btn = document.getElementById("btn");

// const apikey = "Enter your api key";
const apikey = "https://icanhazdadjoke.com/";

const options = {
    method: "GET", 
    headers: {
        "X-Api-key": apikey,
    },

};

const apiURL = "https://icanhazdadjoke.com/";
async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = response.json();

    console.log(data);
}


btn.addEventListener("click", getJoke)