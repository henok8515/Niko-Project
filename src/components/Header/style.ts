
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Typography } from '@mui/material';
import styled from 'styled-components'
// import image from ''
export const Container = styled.div`
  height: 100px;
  border-bottom: 1px solid wheat;
  width: 100%;
  display: flex;
  /* background-color: transparent ; */
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  transition: all 1s ease;
  @media (max-width: 669px) {
  
  }
`;

export const Logo = styled.div`
  margin: 0px 60px;
  flex: 2;
  @media (max-width: 669px) {
    margin: 0;
  }
`;  
export const Navs = styled.div`
  display: flex;
  margin: 0px 40px;
  justify-content: space-around;
  flex: 1;
  @media (max-width: 669px) {
    display: none;
  }


`;
export const List = styled(Typography)`
cursor: pointer;
color: white;
font-weight: bolder;
&:hover{
  color: red;
}

`;
export const Image = styled.div`

`;