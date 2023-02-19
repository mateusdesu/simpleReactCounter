import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background-color: #ff66b3;
  color: #f0f6f6;
  text-align: center;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  cursor: pointer;
  margin: 8px;
`;

export const ResetButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 16px;
  background-color: #51E5FF;
  color: #211A1E;
  text-align: center;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  cursor: pointer;
  margin: 8px;

  &:hover{
    color: #EF233C;
    transition: color 0.5s;
  }
`
