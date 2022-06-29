import styled from "styled-components";
import image from '../../assets/bg-1.jpg'
import image1 from '../../assets/bg-2.jpg'
export const Container = styled.div`

  display: flex;
  flex-direction: column;
  @media (max-width: 690px) {
justify-content: center;
align-items: center;
  }
`;
export const Services = styled.div`
flex: 1.5;
display: flex;
justify-content: center;
text-align: center;
color: white;
flex-direction: column;
background-image: url(${image});
  
`;
export const Testemonials = styled.div`
flex: 1;
background-image: url(${image1});

  
`;
export const Card = styled.div`
height:600px;
display: flex;
flex-direction: column;
/* background-color:red; */
/* border: 2px solid red; */
width: 29%;
margin: 10px 20px;

@media (max-width: 690px) {
width: 90%;
height: 400px;
  }
`;
export const Image = styled.img`
  flex: 1;
  @media (max-width: 690px) {
height: 50%;
object-fit: cover;
  }
`;
export const Description = styled.div`
flex: 1;
background-color: white;
color: grey;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
  
`;