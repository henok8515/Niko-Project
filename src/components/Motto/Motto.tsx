import { Container } from "./style";

function Motto() {
  return (
    <Container>
      <h1 className="w-9/12 sm:text-sm text-5xl font-black font-mono ">
        LOOKING FOR A QUALITY AND AFFORDABLE PROJECT?
      </h1>
      <button className=" h-11 text-xl  bg-white  p-5 w-80 hover:bg-black hover:text-white transition-all duration-1000 sm:w-20 h-5 text-center p-0 sm:text-sm">
        Contact Us
      </button>
    </Container>
  );
}

export default Motto;
