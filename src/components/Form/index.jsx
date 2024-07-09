import { useState } from "react";
import "./style.css";

// Here we import a helper function that will check if the email is valid
import { checkMessage, validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  // TODO: Create a password variable and a function "setPassword" using useState
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage("Name is required.");
      return;
    }

    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }
    // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    if (!checkMessage(message)) {
      setErrorMessage("Please enter valid message");
      return;
    }

    // If successful, we want to clear out the input after registration.
    setUserName("");
    setEmail("");
    setMessage("");
  };

  const handleOnBlurOfUserName = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    //we check to see if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage("Name is required.");
      return;
    }
    setErrorMessage("");
  };

  const handleOnBlurOfEmail = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      return;
    }

    setErrorMessage("");
  };

  const handleOnBlurOfMessage = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    if (!checkMessage(message)) {
      setErrorMessage("Please enter valid message");
      return;
    }

    setErrorMessage("");
  };

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-group row">
          <label htmlFor="userName">Name : </label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            onBlur={handleOnBlurOfUserName}
            type="text"
            placeholder="name"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="email">Email : </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={handleOnBlurOfEmail}
            type="email"
            placeholder="email"
          />
        </div>
        <div className="form-group row">
          <label htmlFor="message">Message : </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={handleOnBlurOfMessage}
            type="message"
            placeholder="message"
          />
        </div>
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        <button id="formsubmitbtn" type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text text-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
