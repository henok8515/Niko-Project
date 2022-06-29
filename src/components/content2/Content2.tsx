import { Typography } from "@mui/material";
import React from "react";
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
        <Typography
          className="text-white text-center "
          fontWeight={700}
          variant="h2"
        >
          DREAM IT, WE CAN BUILD IT
        </Typography>
        <Typography className="text-white text-center">
          There are many variations of passages of Lorem Ipsum but the majority
          is have suffered alteration in some form, or randomised words which
          don't look even slightly believable.
        </Typography>

        <div className="flex justify-between">
          {Data.map((data) => (
            <Card>
              <Typography variant="h1">{data.number}</Typography>
              <Typography>{data.text}</Typography>
            </Card>
          ))}
        </div>
      </Description>
    </Container>
  );
}

export default Content2;
