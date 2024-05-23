/** GENERAL FEEDBACK:
 *
 */



// making a variable selecting the submit button
const form = document.querySelector('form')
// console.log(form)

// Creating the script to handle the submit event
const handleSubmit = (event) => {
    // using prevent default to stop the page from reloading 
    event.preventDefault();
};

//------------------------------------------------------------------------------------------------------------------

//Username data

// Getting the username data and displaying it in the results structure below
const username = document.querySelector("#username");

//getting the username result span to change its text context
const usernameResult = document.querySelector("span#results-username")
// console.log(usernameResult)


// Username event handler, or the cbf
const usernameData = () => {
    //changing the text context of the username result element to the value given to the username input element
    usernameResult.textContent = username.value
}


//------------------------------------------------------------------------------------------------------------------

const codingLevel = document.querySelector("fieldset#coding-level");
// console.log(codingLevel.querySelector("#beginner").checked)

const codingLevelResult = document.querySelector("span#results-coding-level");


const codingLevelData = () => {
    // accessing the children of the collection of radio input elements 
    const beginnerLevel = codingLevel.querySelector("#beginner");
    const proficientLevel = codingLevel.querySelector("#proficient");

    //checking which one is checked to return the value to the result span element, and reassign the result span's element's text context to the name of the choice checked
    if (beginnerLevel.checked === true) {
        codingLevelResult.textContent = beginnerLevel.value
    } else if (proficientLevel.checked === true) {
        codingLevelResult.textContent = proficientLevel.value
    }

}


//------------------------------------------------------------------------------------------------------------------

const locationInput = document.querySelector("#location");

// console.log(locationInput.querySelector("#brooklyn").selected)

const locationResult = document.querySelector("span#results-location")

const locationData = () => {
    //making individual variables  
    const brooklynOption = locationInput.querySelector("#brooklyn");
    const otherBOption = locationInput.querySelector("#other-borough");
    const outOfStateOption = locationInput.querySelector("#out-of-state");

    if (brooklynOption.selected === true) {
        locationResult.textContent = brooklynOption.value
    } else if (otherBOption.selected === true) {
        locationResult.textContent = otherBOption.value
    } else if (outOfStateOption.selected === true) {
        locationResult.textContent = outOfStateOption.value
    }


}

//------------------------------------------------------------------------------------------------------------------

//by logging elements, i can look at their properties and see what i can check for or work with to produce a certain response to user input.
const checkboxInput = document.querySelector("#did-like-assignment");
// console.log(checkboxInput.checked)
const checkboxResults = document.querySelector("#results-did-like-assignment")

const checkboxData = () => {
    if (checkboxInput.checked === true) {
        checkboxResults.textContent = "Yes"
    } else if (checkboxInput.checked === false) {
        checkboxResults.textContent = "No"
    }
}


//------------------------------------------------------------------------------------------------------------------

const resettingForm = () => {
    document.getElementById("new-user-form").reset();
}


// runner
const main = () => {


    // adding the event listener which funnels the click event on the submit button into the handleSubmit function
    //Must add event listener to runner function.
    form.addEventListener("submit", handleSubmit)
    form.addEventListener("submit", usernameData)
    form.addEventListener("submit", codingLevelData)
    form.addEventListener("submit", locationData)
    form.addEventListener("submit", checkboxData)
    form.addEventListener("submit", resettingForm)

}

main();