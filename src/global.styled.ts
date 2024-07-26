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

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      gray: string;
    };
  }
}

export const lightTheme = {
  colors: {
    main: "#3e50b5;",
    gray: "#979797;",
  },
};

export const darkTheme = {
  colors: {
    main: "#979797;",
    gray: "#3e50b5;",
  },
};
