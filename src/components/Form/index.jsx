import { useState } from "react";
import "./style.css";
import { checkMessage, validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form and setting their initial values to empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username or message
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

    // First we check to see if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage("Name is required.");
      return;
    }

    // Check if the email is empty. If so we set an error message to be displayed on the page.
    if (!email) {
      setErrorMessage("Email is required");
      return;
    }

    // Check if the email is in valid format. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // Check if the message is empty. If so we set an error message to be displayed on the page.
    if (!message) {
      setErrorMessage("Message is required.");
      return;
    }

    // Check if the message is having valid details. If so we set an error message to be displayed on the page.
    if (!checkMessage(message)) {
      setErrorMessage("Please enter valid message");
      return;
    }

    // If successful, we want to clear out the input after registration.
    setUserName("");
    setEmail("");
    setMessage("");
  };

  //Triggered on blur of the name field
  const handleOnBlurOfUserName = (e) => {
    e.preventDefault();

    if (!userName) {
      setErrorMessage("Name is required.");
      return;
    }
    setErrorMessage("");
  };

  //Triggered on blur of the email field
  const handleOnBlurOfEmail = (e) => {
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

  //Triggered on blur of the message field
  const handleOnBlurOfMessage = (e) => {
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

        <button id="formsubmitbtn" type="submit">
          Submit
        </button>
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
