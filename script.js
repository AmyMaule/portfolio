const formMessage = document.querySelector(".form-message");
const formEmail = document.querySelector(".form-email");
const submitBtn = document.querySelector("#send-letter");

// The send function allows the form to submit without redirecting to another page, or refreshing the same page, using URLSearchParams and a fetch request
function send(e) {
    if (formMessage.value && formEmail.value) {
        e.preventDefault();
        let contactForm = document.querySelector("#contact-form");
        const formData = new FormData(contactForm);
        // the first parameter of the fetch request is the desired URL, which in this case is the action attribute of the form tag
        fetch(contactForm.getAttribute("action"), {
            method: "POST",
            headers: {
                "Accept": "application/x-www-form-urlencoded;charset=UTF-8",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            // URLSearchParams is by default an object, so use the .toString() method, similar to using JSON.stringify in JSON requests
            body: new URLSearchParams(formData).toString()
        })
        // Call .then as the fetch API returns a promise
        .then(result => {
            if (result) {
                document.body.classList.add("sent");
            }
        });
    }
}
submitBtn.addEventListener("click", send);

if (window.innerWidth < 768) {
    let showColumns = document.querySelectorAll(".small-col-hide");
    showColumns.forEach(col => {
        col.classList.remove("hide");
    })
    let hideColumns = document.querySelectorAll(".small-col-show");
    hideColumns.forEach(col => {
        col.classList.add("hide");
    })
}

// This just shortens the text so it remains readable on screens between 768 and 860px wide (at 767px it switches to a different layout)
if (window.innerWidth <= 860 && window.innerWidth >= 768) {
    document.querySelector("#dinner-description").innerHTML = "What's For Dinner uses the Spoonacular API to search for recipes using various search parameters such as prep/cooking time, macronutrient contents, cuisines, special diets, or by ingredient.";
    document.querySelector("#weather-description").innerHTML = "Using the One Call API and Geocoding API from Open Weather, this fully responsive weather app gives the current weather forecast for any location, as well as a 48 hour and 7 day forecast.";
}

if (window.innerWidth < 480) {
    document.querySelector(".col-hide").classList.add("hide");
}