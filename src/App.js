import React from "react";
import Form from "./components/Form";

function App() {
  return(
    <Form value={{ id: 1, name: "post", content: "This is the test post" }} />
  );
}
export default App;
