import React from "react";
import FormNew from "./components/FormNew";
import Main from "./components/Main"
import image from "./components/Imagens/image1.png";

function App() {
  return (
    <Main style={{ backgroundImage: `url(${image})`}}>
      <FormNew/>
    </Main>
  );
}

export default App;
