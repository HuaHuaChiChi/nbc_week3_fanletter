import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import BaseButton from '../style/common/BaseButton';
import * as S from "../style/DetailStyle"
import { useSelector, useDispatch } from 'react-redux';
import { setData } from "../redux/modules/jsonSet";

function Detail() {
  const jsonData = useSelector((state) => state.jsonSet.data);
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [updateText, setUpdateText] = useState("")

  // const location = useLocation();
  // const id = location.state;
  const navigate = useNavigate()
  const {id} = useParams()

  const [detailLetter] = jsonData.filter(item => item.id === id);
  console.log(detailLetter)

  const handleDelete = () => {
    fetch(`http://localhost:3001/memo/${id}`, {
      method: "DELETE",
    }).then(() => {
    navigate("/");
    const deleteData = jsonData.filter(item => item.id !== id);
    dispatch(setData(deleteData));
    })
  }
  //navigate가 안먹는 것 같은데

const handleUpdateText = () => {
  fetch(`http://localhost:3001/memo/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ content: updateText })
  }).then(() => {
    dispatch(setData((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, content: updateText };
        }
        return item;
      });
    }));
    navigate("/");
  });
};

  
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
            <BaseButton onClick={handleUpdateText}>수정완료</BaseButton>
          </>
        ) : (
          <>
            <BaseButton onClick={handleDelete}>삭제하기</BaseButton>
            <BaseButton onClick={() => setIsEdit(true)}>수정하기</BaseButton>
          </>
        )}  
        </S.ButtonWrap>
      </S.DetailCard>

    </S.Container>
  )
}

export default Detail

