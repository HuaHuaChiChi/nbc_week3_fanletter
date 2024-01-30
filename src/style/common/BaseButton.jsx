import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
  &:hover {
    background-color: green;
  }
`;

function BaseButton({ children }) {
  return (
    <div>
      <StyledButton>{children}</StyledButton>
    </div>
  );
}

export default BaseButton;