import React, { useState } from "react";

function CreateArea(props) {
  const [noteval, setNoteval] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setNoteval((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  const submitform = (event) => {
    props.submitNote(noteval);
    setNoteval({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={noteval.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={noteval.content}
        />
        <button onClick={submitform}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
