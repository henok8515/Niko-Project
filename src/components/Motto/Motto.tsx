import { Typography } from "@mui/material";
import React from "react";
import { Container } from "./style";

function Motto() {
  return (
    <Container>
      <Typography
        className="w-9/12"
        fontWeight={600}
        fontSize="60px"
        variant="h4"
      >
        LOOKING FOR A QUALITY AND AFFORDABLE PROJECT?
      </Typography>
      <button className="bg-white  p-5 w-80 hover:bg-black hover:text-white transition-all duration-1000">
        Contact Us
      </button>
    </Container>
  );
}

export default Motto;
