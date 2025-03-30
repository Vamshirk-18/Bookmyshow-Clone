import React, { useState } from "react";
import { Form } from "react-bootstrap";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#121212";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <Form className="mt-3">
      <Form.Check 
        type="switch"
        id="dark-mode-switch"
        label="Dark Mode"
        onChange={toggleTheme}
      />
    </Form>
  );
};

export default DarkModeToggle;
