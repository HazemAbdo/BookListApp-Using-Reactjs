import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { isAuthenticated, toogleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Ninja Reading</h1>
      <p>Currently you have {books.length} books to get through...</p>
      <div onClick={toogleAuth}>
        {isAuthenticated ? "loggedIn" : "loggedOut"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
