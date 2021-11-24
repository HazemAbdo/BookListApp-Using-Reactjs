import React from "react";
import NewBookForm from "./components/BookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToogleTheme from "./components/ToogleTheme";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <Navbar />
            <BookList />
            <NewBookForm />
          </BookContextProvider>
          <ToogleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
