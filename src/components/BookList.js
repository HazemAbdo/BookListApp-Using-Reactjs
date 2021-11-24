import React, { useContext } from "react";
import BookDetails from "./BookDetails";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return books.length ? (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div
      className="empty"
      style={{ background: theme.bg, color: theme.syntax, padding: "20px" }}
    >
      No books to read. Hello free time :).
    </div>
  );
};

export default BookList;
