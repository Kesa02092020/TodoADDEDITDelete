import "./styles.css";
import React, { useState } from "react";
import Createbook from "./createbook";

export default function App() {
  const [title, SetTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [isEditID, setIseditID] = useState(0);

  const onsubmt = (e) => {
    e.preventDefault();
    if (isEditID) {
      const editID = books.find((i) => i.id === isEditID);
      const updatedBooks = books.map((ExBooks) =>
        ExBooks.id === isEditID
          ? (ExBooks = { id: ExBooks.id, title })
          : { id: ExBooks.id, title: ExBooks.title },
      );

      setBooks(updatedBooks);
      setIseditID(0);
      SetTitle("");
      return;
    }
    const newbook = {
      id: Math.floor(Math.random() * 1000),
      title: title,
    };
    setBooks([...books, newbook]);
    SetTitle("");
  };
  const handleEdit = (items) => {
    const editdata = books.find((item) => item.id === items.id);
    SetTitle(editdata.title);
    setIseditID(items.id);
  };
  const Deleteb = (id) => {
    const updatBooks = books.filter((items) => items.id !== id);
    setBooks(updatBooks);
  };
  return (
    <div className="App">
      <div>
        {books.map((items) => {
          return (
            <div key={items.id}>
              <span>{items.id}</span>
              <span>{items.title}</span>
              <button onClick={() => handleEdit(items)}>Edit</button>
              <button onClick={() => Deleteb(items.id)}>Delete</button>
            </div>
          );
        })}
      </div>
      <Createbook
        title={title}
        SetTitle={SetTitle}
        isEditID={isEditID}
        createbooks={onsubmt}
      />
    </div>
  );
}
