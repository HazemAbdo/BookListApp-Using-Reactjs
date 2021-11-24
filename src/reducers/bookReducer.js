import uuid from "uuid/v4";
export const bookReducer = (books, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...books,
        { title: action.book.title, author: action.book.author, id: uuid() },
      ];
    case "DELETE_BOOK":
      return books.filter((book) => book.id !== action.id);
    default:
      return books;
  }
};
