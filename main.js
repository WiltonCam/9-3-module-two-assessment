document.addEventListener('DOMContentLoaded', () => {
    getAllFilmes();
})

const getAllFilmes = () => {
    const url = "https://resource-ghibli-api.onrender.com/"
    fetch(url)
        .then((response) => {
            response.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            handleError(err);
        });
}

const populateSelect = () => {}

const handleError = (error) => {
    let errorNotification = document.createElement(error)
    errorNotification.innerText= ""
}
// To ensure Cypress tests work as expeded, add any code/functions that you would like to run on page load inside this function

function run() {
 // Add code you want to run on page load here
}

// This function will "pause" the functionality expected on load long enough to allow Cypress to fully load
// So that testing can work as expected for now
// A non-hacky solution is being researched

setTimeout(run, 1000);
