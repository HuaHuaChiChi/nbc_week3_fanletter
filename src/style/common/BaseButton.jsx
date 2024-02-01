import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
  &:hover {
    background-color: #558f69;
  }
`;

function BaseButton({ children }) {
  return (
      <StyledButton>{children}</StyledButton>
  );
}

export default BaseButton;