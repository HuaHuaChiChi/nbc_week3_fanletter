import styled from "styled-components"

function LetterForm({data, setData}) {

  const addNewLetter = () => {
    const newLetter = {
      createdAt: new Date().toISOString(),
      nickname: "새로운 유저",
      avatar : "aa",
      content: "새로운 편지 내용",
      writedTo: "카리나",
      id : data.length +1}
    fetch("http://localhost:3001/memo",{
      method: "post",
      body: JSON.stringify(newLetter)
    })
    .then((response) => response.json())
    .then((json) => {
      setData([(prevData) => [...prevData, json]]); // 새로운 데이터를 기존 데이터에 추가
    })

  }


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
      <button onClick={addNewLetter}>ㄱㄱ</button>

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