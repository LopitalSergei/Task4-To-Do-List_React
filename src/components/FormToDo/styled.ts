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
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  width: 130px;
  padding: 10px 0;
  font-size: larger;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.mainActive};
  }

  @media (max-width: 555px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  width: 160px;
  padding: 10px 0;
  font-size: larger;
  border: none;
  border-radius: 10px;
  margin-left: auto;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.redActive};
  }

  @media (max-width: 555px) {
    margin-left: 0;
    width: 100%;
  }
`;
