import styled from "styled-components";

export const UserInfo = styled.a`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 500px;
  height: 500px;
  padding: 50px;
  box-shadow: 0px 4px 5px 2px rgba(34, 60, 80, 0.2);
  text-decoration: none;
  color: black;

  @media (max-width: 545px) {
    width: 340px;
    height: 340px;
    padding: 15px;
  }
`;

export const Login = styled.p`
  align-self: start;
`;

export const ImageWrapper = styled.div`
  width: 360px;
  height: 360px;
  overflow: hidden;

  @media (max-width: 545px) {
    width: 250px;
    height: 250px;
  }
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
