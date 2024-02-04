import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import BaseButton from '../style/common/BaseButton';
import * as S from "../style/DetailStyle"
import { LetterContext } from '../context/LetterContext';


function Detail() {
  const {data, setData} = useContext(LetterContext)
  const [isEdit, setIsEdit] = useState(false)
  const [updateText, setUpdateText] = useState("")

  // const location = useLocation();
  // const id = location.state;
  const navigate = useNavigate()
  const {id} = useParams()

  const [detailLetter] = data.filter(item => item.id === id);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/memo/${id}`, {
      method: "DELETE",
    }).then(() => {
    navigate("/");
    const deleteData = data.filter(item => item.id !== id);
    setData(deleteData);
    })
  }

const handleUpdateText = (id) => {
  fetch(`http://localhost:3001/memo/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ content: updateText })
  }).then(() => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, content: updateText };
        }
        return item;
      });
    });
    navigate("/");
  });
};
//update도 상단 컴포넌트로 빼고싶었으나 실패했습니다.. context로 넣어서 실행은 되는데. navigate를 라우터에서 사용할 수 없었습니다..
  //FIXME - 이거 state 업데이트해서 렌더링이 되게 바꿔줘야함
  // JSON 서버에 관여하는 로직들을 전부 최상단으로 빼서 PROPS로 넘겨주자
  // 디테일 페이지 CSS 바꿔줘
  // CSS 스타일 컴포넌트에 옮겨줘
  // TIL 써줘
  // 유효성 검사 넣어줘
  
  return (
    <S.Container>
      <S.BackButton onClick={() =>navigate("/")}>뒤로가기</S.BackButton>
      <S.DetailCard>
        <S.DetailHeader>
          <S.Avatar src={detailLetter.avatar} alt={"ㅎㅇ루"} />
          <S.CardTitle>{detailLetter.nickname}</S.CardTitle>
          <S.Time>{detailLetter.createdAt}</S.Time> 
        </S.DetailHeader>
        <S.DetailWritedTo>To: {detailLetter.writedTo}</S.DetailWritedTo>      
        <S.DetailContent>
        {isEdit ? (
            <S.EditTextArea
              onChange={(e) => setUpdateText(e.target.value)}
              defaultValue={detailLetter.content}
              maxLength={100} 
            />
          ) : (
            <S.Content>{detailLetter.content}</S.Content>
          )}
        </S.DetailContent>
        <S.ButtonWrap>
        {isEdit ? (
          <>
            <BaseButton onClick={() => setIsEdit(false)}>취소</BaseButton>
            <BaseButton onClick={() =>handleUpdateText(id)}>수정완료</BaseButton>
          </>
        ) : (
          <>
            <BaseButton onClick={() =>handleDelete(id)}>삭제하기</BaseButton>
            <BaseButton onClick={() => setIsEdit(true)}>수정하기</BaseButton>
          </>
        )}  
        </S.ButtonWrap>
      </S.DetailCard>

    </S.Container>
  )
}

export default Detail

