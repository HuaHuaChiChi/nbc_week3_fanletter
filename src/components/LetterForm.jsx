import styled from "styled-components"

function LetterForm() {
  return (
    <FormContainer>
      <InputSection>
      <a>닉네임:&nbsp;</a> <input></input>
      </InputSection>
      <InputSection>
      <a>내용:&nbsp;</a> <input></input>
      </InputSection>
    </FormContainer>
  )
}

export default LetterForm

const FormContainer = styled.form`
display :flex;
justify-content : center;
flex-direction : column;
`

const InputSection = styled.div`
display :flex;
justify-content : center;
flex-direction : row;
`