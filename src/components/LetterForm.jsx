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
import { setData } from "../redux/modules/jsonSet";
import { useDispatch } from "react-redux";


function LetterForm() {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectMember, setSelectMember] = useState("카리나");

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/memo");
    const json = await response.json();
    return json;
  }; //이거 싹 다 지우고 라우터의 의존성배열에 뭔가 추가하면 더 간결해질 것 같은데

  const addNewLetter = async (e) => {
    e.preventDefault()
    const newLetter = {
      createdAt: new Date().toISOString(),
      nickname,
      avatar : defaultImg,
      content,
      writedTo: selectMember,
      id : uuidv4()}
      await fetch("http://localhost:3001/memo", {
        method: "post",
        body: JSON.stringify(newLetter),
      });
  
      const data = await fetchData();
      dispatch(setData(data));
    };

    //한 부분에 있던 코드를 결국 끌고 내려왔는데 이렇게 되는게 맞나요..?

  return (
    <FormContainer onSubmit={addNewLetter}>
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
      <BaseButton>ㄱㄱ</BaseButton>

    </FormContainer>
  )
}

export default LetterForm

