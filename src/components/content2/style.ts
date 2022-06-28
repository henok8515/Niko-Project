import styled from "styled-components";
import Image from '../../assets/bg-3.jpg'
export const Container = styled.div`
  height: 100vh;
  background-image: url(${Image});
  display: flex;
  justify-content: end;
`;
export const Description = styled.div`
/* border: 2px solid red; */
background-color: rgba(0, 0, 0, 0.5);
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: start;
  
`;
export const Card = styled.div`
  height: 200px;
  color: whitesmoke;
  width: 200px;
  border: 4px solid #ce9233;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  &:hover{
      background-color: #ce9233;
  }
`;