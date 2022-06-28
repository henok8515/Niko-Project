import styled from "styled-components";
import image1 from "../../assets/image-1.jpg";
import image2 from "../../assets/image-2.jpg";
export const Container = styled.div`
display: flex;
background-color: white;
justify-content: space-around;
  
`;
export const Image = styled.div`
  height: 370px;
  
  width:500px;
  /* border: 5px solid #FAA916; */
  margin: 20px 10px;
  border-radius: 10px;
  background-image: url(${image1});
  transition: all 1s ease;
  &:hover{
      transform: scale(1.1);
  }
`;
export const Image1 = styled.div`
  height: 370px;
  
  width:500px;
  /* border: 5px solid #FAA916; */
  margin: 20px 10px;
  border-radius: 10px;
  background-image: url(${image2});
  transition: all 1s ease;
  &:hover{
      transform: scale(1.1);
  }
`;
export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 600px;
height: 110vh;
  
`;
export const Motto = styled.div`
height: 150px;
width: 90%;
justify-content: center;
align-items: center;
text-align: center;
display: flex;
border: 6px solid #FAA916;
/* color: lightgray; */

  
`;