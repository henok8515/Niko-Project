import styled from "styled-components";
import Image from '../../assets/bg-2.jpg'
export const Container = styled.div`
  height: 130vh;
  display: flex;
  flex-direction: column;
padding-top: 100px;
  background-image: url(${Image});
  background-size: cover;
`;
export const Card = styled.div`
  height: 500px;
  width: 30%;
  margin: 20px 20px;
z-index: 1;
position: relative;
margin-bottom: 100px;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  
  `;
export const Content = styled.div`
  height:200px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10%;
  margin-top: -100px;
  position: absolute;
  background-color: whitesmoke;
  z-index: 4;
  /* border: 2px solid green; */
  transition: all 1s ease;
  &:hover{
      background-color: #ce9233;
      color: white;
  }
  
`;
