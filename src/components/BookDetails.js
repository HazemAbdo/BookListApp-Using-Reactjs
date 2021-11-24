import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";
const BookDetails = ({ book }) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { dispatch } = useContext(BookContext);
  const handleClick = () => {
    dispatch({ type: "DELETE_BOOK", id: book.id });
  };
  return (
    <li
      onClick={() => {
        handleClick(book.id);
      }}
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
