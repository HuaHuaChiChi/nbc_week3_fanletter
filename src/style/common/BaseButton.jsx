
import styled from "styled-components"


function BaseButton({children}) {

  const BaseButton = styled.button `
  font-size : 20px;
  background-color : white;
  border-radius: 5px;
  border : 1px solid black;
  &:hover {
    background-color : #67b767
  }
  `


  return (
    <div>
      <BaseButton>{children}</BaseButton>
    </div>
  )
}

export default BaseButton