let btn = document.getElementById("submit-btn");

let email = document.getElementById("email");

let fullName = document.getElementById("fullName");

let message = document.getElementById("message");

let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//clear the data from form
let testForm = document.querySelector("form");


//event-handler
function validateForm() {

    console.clear();

    //save data and errors in initially empty buckets.
    let errors = [];
    let data = {};


    //validating full name
    if (fullName.value === "") {
        errors.push("Please enter your full name");
    } else {
        data.fullNameProp = fullName.value;
    }

    //validate email
    if (email.value === "") {
        errors.push("please enter your email.");
    } else {
        //checking email pattern
        if (pattern.test(email.value)) {
            data.emailProp = email.value;
        } else {
            errors.push("please enter correct email.");
        }
    }
    //validate message
    if (message.value === "") {
        errors.push("please enter your message.");
    } else {
        data.messageProp = message.value;

    }


    //test printing
    /*console.log("error Object", errors);
    console.log("data Object", data);*/


    //create feedback
    if (errors.length === 0) {

        //CLEAR THE FORM HERE
        testForm.reset();
        console.log(`Full Name:${data.fullNameProp}, Email: ${ data.emailProp}, Message: ${data.messageProp}`);
    } else {
        console.log(`Errors: ${errors}`);
    }
}

btn.addEventListener("click", validateForm);
