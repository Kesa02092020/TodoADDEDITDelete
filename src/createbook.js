import React, { useState } from "react";

const createbook = ({ createbooks, title, SetTitle, isEditID }) => {
  //const [title, SetTitle] = useState("");
  //const [editem, setEditem] = useState(false);
  // const onchfun = (e) => {
  //   SetTitle(e.target.value);
  // };
  // const onsubmt = (e) => {
  //   e.preventDefault();
  //   console.log(editbooks);
  //   onsubmitdata(title);
  //   SetTitle(" ");
  // };
  return (
    <div>
      <form onSubmit={(e) => createbooks(e)}>
        <input
          value={title}
          type="text"
          onChange={(e) => SetTitle(e.target.value)}
        />
        <button type="submit">{isEditID ? "Save" : "Submit"}</button>
      </form>
    </div>
  );
};

export default createbook;
