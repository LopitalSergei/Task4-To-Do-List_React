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
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
export const SearchUserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
