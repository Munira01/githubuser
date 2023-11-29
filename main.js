const API_url = "https://api.github.com/users/"

let input = document.querySelector(".mainInput")
let button = document.querySelector(".mainButton")

async function getData(userName){
    const request = await fetch(API_url + userName);

    // if(request.status != 200){
    //     document.body.style.background = "red"
    //     myField.innerHTML = `
    //         <h1>user not found</h1>
    //     `

    //     throw new error
    // }

    const response = await request.json();
    console.log(response);
    const myField = document.querySelector(".field")

    myField.innerHTML = `
        <div class="field">
            <img src="${response.avatar_url}" alt="">
            <h2>${response.name}</h2>
            <p>${response.bio}</p>
        </div>
    `



}

button.addEventListener("click", ()=> {
    getData(input.value);
    input.value = " "
})