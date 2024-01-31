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
      <InputSection>
      <a>누구한테 보낼거셈:&nbsp;</a>
        <select>
          <option value="카리나">카리나</option>
          <option value="윈터">윈터</option>
          <option value="닝닝">닝닝</option>
          <option value="지젤">지젤</option>
        </select>
      </InputSection>
      <button>ㄱㄱ</button>

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