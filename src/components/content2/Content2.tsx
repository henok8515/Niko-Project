import { Card, Container, Description } from "./style";
let Data = [
  {
    number: "800",
    text: "Project Completed",
  },
  {
    number: "681",
    text: "Satisfied Customer",
  },
  {
    number: "909",
    text: "metal Works",
  },
];
function Content2() {
  return (
    <Container>
      <Description>
        <button>Welcom</button>
        <h1 className="text-white text-center sm:text-5xl sm:font-black sm:font-mono sm:text-center text-6xl font-black ">
          DREAM IT, WE CAN BUILD IT
        </h1>
        <h1 className="text-white text-center text-xl font-mono sm:text-md ">
          There are many variations of passages of Lorem Ipsum but the majority
          is have suffered alteration in some form, or randomised words which
          don't look even slightly believable.
        </h1>

        <div className="flex justify-between sm:justify-around">
          {Data.map((data) => (
            <Card>
              <h1 className="sm:text-4xl sm:text-center text-7xl font-black">
                {data.number}
              </h1>
              <h1 className="sm:text-center text-xl sm:text-sm">{data.text}</h1>
            </Card>
          ))}
        </div>
      </Description>
    </Container>
  );
}

export default Content2;
