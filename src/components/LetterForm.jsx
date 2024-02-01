import { useState } from "react";
import { v4 as uuidv4} from "uuid";
import {
  FormContainer,
  InputSection,
  NicknameInput,
  TextArea,
  Labels
} from "../style/LetterFromStyle"
import BaseButton from "../style/common/BaseButton"
import defaultImg from "../style/common/defaultImg.png"



function LetterForm({data, setData}) {

  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectMember, setSelectMember] = useState("카리나");

  const addNewLetter = () => {
    const newLetter = {
      createdAt: new Date().toISOString(),
      nickname,
      avatar : defaultImg,
      content,
      writedTo: selectMember,
      id : uuidv4()}
    fetch("http://localhost:3001/memo",{
      method: "post",
      body: JSON.stringify(newLetter)
    })
    .then((response) => response.json())  //fetch 가 되면 response를 반환 response의 json 데이터 뽑아오고
    .then((json) => {
      setData([(prevData) => [...prevData, json]]); // 새로운 데이터를 기존 데이터에 추가
    })

  }


  return (
    <FormContainer>
      <InputSection>
      <Labels>닉네임:&nbsp;</Labels>
        <NicknameInput
          value={nickname}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputSection>
      <InputSection>
      <Labels>내용:&nbsp;</Labels> 
        <TextArea
          value={content}
          placeholder="최대 100자까지만 작성할 수 있습니다."
          maxLength={100}
          onChange={(e) => setContent(e.target.value)}
        />
      </InputSection>
      <InputSection>
      <Labels>누구한테 보냄:&nbsp;</Labels>
        <select value={selectMember}
        onChange={(e) => setSelectMember(e.target.value)}>
          <option value="카리나">카리나</option>
          <option value="윈터">윈터</option>
          <option value="닝닝">닝닝</option>
          <option value="지젤">지젤</option>
        </select>
      </InputSection>
      <BaseButton onClick={addNewLetter}>ㄱㄱ</BaseButton>

    </FormContainer>
  )
}

export default LetterForm

