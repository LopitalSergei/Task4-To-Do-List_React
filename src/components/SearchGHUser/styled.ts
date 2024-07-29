import styled from "styled-components";

export const SearchUserBlock = styled.div`
  margin-top: 30px;
  width: 250px;
`;

export const SearchUserTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

export const SearchUserInputRow = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchUserInput = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.body};
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayText2};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayText};
  }
`;
export const SearchUserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
