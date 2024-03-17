import { useState } from "react";

import "./App.css";
import AuthForm from "./components/AuthForm/AuthForm";
import { Button } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthForm />
    </>
  );
}

export default App;
