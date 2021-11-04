import React from "react";
import FormNew from "./components/FormNew";
import Main from "./components/Main"
import image from "./components/Imagens/image1.png";
import Footer from "./components/Footer";
import Github from "./components/Github"

function App() {
  return (
    <Main style={{ backgroundImage: `url(${image})`}}>
      <Github/>
      <FormNew/>
      <Footer/>
    </Main>
  );
}

export default App;
