import { Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Container, Description, Image, Image1, Motto } from "./style";
let Names = [
  "We provide 24/7 service",
  "We strick to deadline",
  "We offer upfront pricing",
  "We use latest technology",
];
function Content() {
  return (
    <Container>
      <div>
        <Image />
        <Image1 />
      </div>
      <Description>
        <button className="sm:self-center border-4 text-1xl border-yellow-700 w-2/4 p-2">
          Welcome to All hands
        </button>
        <strong>
          <h1 className="sm:text-3xl text-5xl text-center font-mono  ">
            WE’RE COMMITTED TO QUALITY
          </h1>
        </strong>
        <Typography className="text-gray-700" variant="h6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. quis
          nostrud exercitation.
        </Typography>
        <div className="flex w-full justify-between border-solid">
          <div className="flex flex-col">
            {Names.map((name) => (
              <div className="flex items-center">
                <CheckIcon className="mr-3 text-red-800" />
                <Typography className="text-gray-700" variant="h5">
                  {name}
                </Typography>
              </div>
            ))}
          </div>
          {/* <div>
            <li>1</li>
            <li>1</li>
          </div> */}
        </div>
        <Motto>
          <h1 className="sm:text-sm text-3xl font-black font-mono">
            WELDER PRO PROFESSIONAL WELDING COMPANY IN USA
          </h1>
        </Motto>
      </Description>
    </Container>
  );
}

export default Content;
