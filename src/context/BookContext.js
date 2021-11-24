import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //third argument(()=>{}) is the initial state and override the default value which is []
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    //JSON.parse is used to convert the string into an array of objects
    return localData ? JSON.parse(localData) : [];
  });
  //to update the local storage whenever the state changes
  useEffect(() => {
    //JSON.stringify() is used to convert the state to string as local storage
    //only accepts string
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
