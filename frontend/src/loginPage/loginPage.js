import React, { useState } from "react"; 

function LoginPage() {
    // Stores what the user enters in the form
    // useState hook gives you the current value of the variable you want to store in the state and a function to set the new value 
    // variable: email, function: setEmail
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    // checks if form is not blank
    function emailValidation() {
        return email.length > 0 && password.length > 0; 
    }

    function handleSubmit(event) {
        event.preventDefault(); 
    }


    return (
        <div>

        </div>
    );
}

export default LoginPage;
