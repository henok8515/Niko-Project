import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  background-color: #FAA916;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 1s ease;
  padding: 20px 20px;
  @media (max-width: 669px) {
  height: 120px;
}
`;