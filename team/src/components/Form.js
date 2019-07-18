import React, { useState, useEffect } from "react";
import "../App.css";

export default function Form(props) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    role: ""
  });

    useEffect(() => {
      setInput(props.memberToEdit);
    }, [props.memberToEdit]);

  const handleChanges = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };


  return (
    <div className="App">
      <form
        onSubmit={event =>
          props.handleSubmit(event, input, props.memberToEdit)
        }
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={event => handleChanges(event)}
            placeholder="Your Name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={event => handleChanges(event)}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="role"
            value={input.phone}
            onChange={event => handleChanges(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={input.role}
            onChange={event => handleChanges(event)}
          />
          <button className="btn">Submit</button>
        </label>
      </form>
    </div>
  );
}

