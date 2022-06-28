import React from "react";
import Content from "./components/content/Content";
import Content2 from "./components/content2/Content2";
import Header from "./components/Header/Header";
import Motto from "./components/Motto/Motto";
import Service from "./components/Service/Service";
import Text from "./components/Text/Text";
import { Container, Wrapper } from "./style";
function App() {
  return (
    <Container className="">
      <Wrapper>
        <Header />
        <Text />
      </Wrapper>
      <Content />
      <Motto />
      <Service />
      <Content2 />
    </Container>
  );
}

export default App;
