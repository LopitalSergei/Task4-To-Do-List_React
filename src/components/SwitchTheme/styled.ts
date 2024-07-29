import styled from "styled-components";

export const SwitchThemeRow = styled.div`
  margin-top: 60px;
`;

export const SwitchThemeLabel = styled.label`
  display: block;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grayText2};
  margin-bottom: 10px;
`;

export const SwitchThemeSelect = styled.select`
  width: 250px;
  padding: 10px;
  outline: none;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.grayText3};
  border-radius: 10px;
  font-size: 18px;
  appearance: none;

  background: url("data:image/svg+xml,%3Csvg width='20px' height='20px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' transform='matrix(1, 0, 0, -1, 0, 0)'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 5.94363L4.76627 18H19.2339L12.0001 5.94363ZM10.7138 4.20006C11.2964 3.22905 12.7037 3.22905 13.2863 4.20006L21.4032 17.7282C22.0031 18.728 21.2829 20 20.117 20H3.88318C2.71724 20 1.99706 18.728 2.59694 17.7282L10.7138 4.20006Z' fill='%23646464'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
    no-repeat 95% 50%;
`;

export const SwitchThemeOption = styled.option`
  background-color: ${({ theme }) => theme.colors.body};
`;
