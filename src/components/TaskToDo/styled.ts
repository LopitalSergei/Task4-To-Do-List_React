import styled from "styled-components";

export const Task = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayText};
  padding: 20px 0;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.grayText};
  }
`;

export const CheckBox = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
`;

export const CheckBoxLabel = styled.label<{
  status: boolean;
}>`
  width: 100%;
  font-size: larger;
  cursor: pointer;
  text-decoration: ${(props) => (props.status ? "line-through" : "none")};
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 10px;
  align-items: center;
  &:hover {
    &::before {
      border: 2px solid black;
    }
  }

  &::before {
    content: "";
    border: ${(props) => (props.status ? "2px" : "1px")} solid black;
    background-image: ${(props) =>
      props.status
        ? `url("data:image/svg+xml,%3Csvg fill='%23000000' viewBox='-192 -192 2304.00 2304.00' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' stroke='%23CCCCCC' stroke-width='34.559999999999995'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M1827.701 303.065 698.835 1431.801 92.299 825.266 0 917.564 698.835 1616.4 1919.869 395.234z' fill-rule='evenodd'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`
        : ""};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    width: 22px;
    height: 22px;
    border-radius: 5px;
  }
`;

export const TrashCan = styled.div`
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  &:hover {
    color: ${({ theme }) => theme.colors.redHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.redActive};
  }
`;
