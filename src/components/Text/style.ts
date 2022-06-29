import {  Typography } from "@mui/material";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  height: 80%   ;
  background-color: rgba(0, 0, 0, 0.5);
  

`;
export const Buttons = styled.button`
  color: red;
  background-color: white;
  padding: 30px 30px;
  margin-left: 20px;
  margin-right: 30px;
  margin-top: 100px;
`;
export const Intro = styled(Typography)`

  /* font-size: rem; */
  /* @media (max-width: 480px) {
    font-size: 10px;
    color: red;
  } */
`;