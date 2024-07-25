import styled from "styled-components";

export const TasksContainer = styled.div`
  max-width: 607px;
  margin: 0 auto 80px;
`;

export const ToDoSection = styled.section`
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 36px;
  text-align: center;
  margin: 40px 0 20px 0;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 555px) {
    flex-direction: column;
  }
`;

export const SelectButton = styled.button`
  background-color: #3e50b5;
  color: #ffffff;
  width: 130px;
  padding: 10px 0;
  font-size: larger;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #3e30b5;
  }

  &:active {
    background-color: #3e10b5;
  }

  @media (max-width: 555px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4081;
  color: #ffffff;
  width: 160px;
  padding: 10px 0;
  font-size: larger;
  border: none;
  border-radius: 10px;
  margin-left: auto;

  &:hover {
    background-color: #ff2081;
  }

  &:active {
    background-color: #ff1081;
  }

  @media (max-width: 555px) {
    margin-left: 0;
    width: 100%;
  }
`;
