import styled from "styled-components";

export const InputRow = styled.div`
  display: flex;
  gap: 50px;
  position: relative;

  @media (max-width: 665px) {
    gap: 25px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: larger;
  padding: 0 10px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.main};
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    color: ${({ theme }) => theme.colors.main};
    opacity: 1;
    transform: translateX(-5px) translateY(-30px);
  }

  &:not(:focus) + label {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FloatingLabel = styled.label`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: larger;
  opacity: 0.7;
  transition: 0.3s;
  cursor: text;
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  color: #ffffff;
  width: 170px;
  padding: 15px 0;
  font-size: larger;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.mainActive};
  }
`;
