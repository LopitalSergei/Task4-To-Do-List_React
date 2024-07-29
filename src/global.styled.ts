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

  body{
	background-color: ${({ theme }) => theme.colors.body};
  }

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
      body: string;
      main: string;
      mainHover: string;
      mainActive: string;
      red: string;
      redHover: string;
      redActive: string;
      grayText: string;
      grayText2: string;
      grayText3: string;
      black: string;
      white: string;
      boxShadow: string;
    };
  }
}

export const lightTheme = {
  colors: {
    body: "#FFFFFF",
    main: "#3e50b5;",
    mainHover: "#3e30b5",
    mainActive: "#3e10b5",
    red: "#ff4081",
    redHover: "#ff2081",
    redActive: "#ff1081",
    grayText: "#979797",
    grayText2: "#646464",
    grayText3: "#a1a1a1",
    black: "#000000",
    white: "#FFFFFF",
    boxShadow: "rgba(34, 60, 80, 0.2)",
  },
};

export const darkTheme = {
  colors: {
    body: "#D2D2D2",
    main: "#060A30",
    mainHover: "#060A40",
    mainActive: "#060A50",
    red: "#ff4081",
    redHover: "#ff2081",
    redActive: "#ff1081",
    grayText: "#000000",
    grayText2: "#000000",
    grayText3: "#a1a1a1",
    black: "#000000",
    white: "#FFFFFF",
    boxShadow: "rgba(34, 60, 80, 0.2)",
  },
};
