import { Typography } from "@mui/material";

import React from "react";
import { Card, Container, Description, Image, Services } from "./style";

let Data = [
  {
    name: "STEEL WELDING",
    desc: "Lorem ipsum is simply free text dolor sit am adipi we help you is inthe right jobs sicing elit",
    imgUrl:
      "https://html.tonatheme.com/2022/welbim/assets/images/resource/image-4.jpg ",
  },
  {
    name: "METAL WORKS",
    desc: "Lorem ipsum is simply free text dolor sit am adipi we help you is inthe right jobs sicing elit",
    imgUrl:
      "https://html.tonatheme.com/2022/welbim/assets/images/resource/image-5.jpg",
  },
  {
    name: "PIPE WELDING",
    desc: "Lorem ipsum is simply free text dolor sit am adipi we help you is inthe right jobs sicing elit",
    imgUrl:
      "https://html.tonatheme.com/2022/welbim/assets/images/resource/image-6.jpg",
  },
];

function Service() {
  return (
    <Container>
      <Services>
        <div className="h-72 flex justify-center flex-col">
          <div className=" self-center w-60 text-lg border-2 mb-7 border-yellow-500  p-2">
            our Services
          </div>
          <Typography variant="h2">WHAT WE OFFER</Typography>
        </div>
        <div className="mt-76 flex z-10 justify-around sm:flex-col">
          {Data.map((data) => (
            <Card>
              <Image src={data.imgUrl} />
              <Description>
                <Typography
                  className="text-black pb-6"
                  variant="h1"
                  fontWeight={600}
                  fontSize="25px"
                >
                  {data.name}
                </Typography>
                <Typography>{data.desc}</Typography>
                <button className="border-gray-300 font-bold hover:bg-yellow-500 transition-all duration-1000 hover:text-black w-full mt-8 p-3">
                  Read More
                </button>
              </Description>
            </Card>
          ))}
        </div>
      </Services>
      {/* <Testemonials>testemonials</Testemonials> */}
    </Container>
  );
}

export default Service;
