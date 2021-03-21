import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  return (
    <form>
      <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)}/>
      <input type="text" value={lastName} onChange={event => setLastName(event.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
