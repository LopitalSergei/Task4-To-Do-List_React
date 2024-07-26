import { createGlobalStyle } from "styled-components";

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
