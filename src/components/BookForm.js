import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";
const NewBookForm = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [title, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setBook("");
    setAuthor("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <input
        type="text"
        placeholder="book name"
        value={title}
        onChange={(e) => setBook(e.target.value)}
      />
      <input
        type="text"
        placeholder="author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button id="temp">Add Book</button>
    </form>
  );
};

export default NewBookForm;
