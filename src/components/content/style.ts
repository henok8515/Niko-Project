import styled from "styled-components";
import image1 from "../../assets/image-1.jpg";
import image2 from "../../assets/image-2.jpg";
export const Container = styled.div`
display: flex;
background-color: white;
justify-content: space-around;
@media (max-width: 690px) {
flex-direction: column;
justify-content: center;
  }
  
`;
export const Image = styled.div`
  height: 370px;
  
  width:500px;
  /* border: 5px solid #FAA916; */
  margin: 20px 10px;
  border-radius: 10px;
  background-image: url(${image1});
  transition: all 1s ease;
  /* &:hover{
      transform: scale(1.1);
  } */
  @media (max-width: 690px) {
width: 350px;
background-size: cover;
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
  @media (max-width: 690px) {
width: 350px;
background-size: cover;
  }
`;
export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 600px;
height: 110vh;
@media (max-width: 690px) {
width: 400px;
  }
  
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
@media (max-width: 690px) {
width: 70%;
height: 100px;
font-size: 20px;
align-self: center;
  }

  
`;