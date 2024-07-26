import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	 font-family: "Jost", sans-serif;
  };

  *::after, *::before {
    box-sizing: border-box;
  };

  button{
	cursor: pointer;
  }
`;

export const MainContainer = styled.main`
  max-width: 807px;
  margin: 0 auto;
  padding: 0 20px;
`;