import { Typography } from "@mui/material";
import React from "react";
import { Card, Container, Content, Img } from "./style";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
let Data = [
  {
    name: "ROBERT SMITH",
    title: "Co Founder",
    imgUrl:
      "https://html.tonatheme.com/2022/welbim/assets/images/resource/team-1.jpg",
  },
  {
    name: "CHRISTINE EVE",
    title: "Welder",
    imgUrl:
      "https://html.tonatheme.com/2022/welbim/assets/images/resource/team-2.jpg",
  },
  {
    name: "MIKE HARDSON",
    title: "Assistant To Welder",
    imgUrl:
      "https://html.tonatheme.com/2022/welbim/assets/images/resource/team-3.jpg",
  },
];

function Team() {
  return (
    <Container>
      <div className=" text-center self-center w-60 text-lg border-2 mb-7 border-yellow-500  p-2">
        All Hands Enginering
      </div>
      <Typography
        fontWeight={700}
        fontSize="80px"
        className="text-center"
        variant="h1"
      >
        Our Teams
      </Typography>
      <div className="flex justify-center sm:flex-col  ">
        {Data.map((data) => (
          <Card>
            <Img src={data.imgUrl} />
            <Content>
              <Typography fontWeight={600} variant="h5">
                {data.name}
              </Typography>
              <Typography
                fontWeight={600}
                className="text-zinc-500 hover:text-white"
              >
                {data.title}
              </Typography>
              <div className="  self-center w-full flex justify-center ">
                <FacebookOutlinedIcon className="m-3" />
                <TwitterIcon className="m-3" />
                <PinterestIcon className="m-3" />
              </div>
            </Content>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Team;
