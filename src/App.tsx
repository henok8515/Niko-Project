import Header from "./components/Header/Header";
import Text from "./components/Text/Text";
import { Container, Wrapper } from "./style";
// import Content from "./components/content/Content";
// import Content2 from "./components/content2/Content2";
// import Footer from "./components/Footer/Footer";
// import Motto from "./components/Motto/Motto";
// import Service from "./components/Service/Service";
// import Team from "./components/Team/Team";
function App() {
  return (
    <Container className="">
      <Wrapper>
        <Header />
        <Text />
      </Wrapper>
      {/* <Content />
      <Motto />
      <Service />
      <Content2 />
      <Team />
      <Footer /> */}
    </Container>
  );
}

export default App;
