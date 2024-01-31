import { useState } from "react";
import styled from "styled-components"


function HeaderStyle() {

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (memberName) => {
    setSelectedMember(memberName);
  };
  return (
    <Container>
      <Title>야호~</Title>
      <ButtonWrap>
        <MemberButton
          onClick={() => {handleMemberClick("카리나")}}
          isSelected={selectedMember === "카리나"}
        >카리나
        </MemberButton>
        <MemberButton
          onClick={() => {handleMemberClick("윈터")}}
          isSelected={selectedMember === "윈터"}
        >윈터
        </MemberButton>
        <MemberButton
          onClick={() => {handleMemberClick("닝닝")}}
          isSelected={selectedMember === "닝닝"}
        >닝닝
        </MemberButton>
        <MemberButton
          onClick={() => {handleMemberClick("지젤")}}
          isSelected={selectedMember === "지젤"}
        >지젤
        </MemberButton>
      </ButtonWrap>
    </Container>
  )
}

export default HeaderStyle

const Container = styled.header`
  position: relative;
  background-size: 25% auto;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  background-color :green;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Title = styled.h1`
  text-align : center;
  font-size: 50px;
  font-weight: 700;
  color: #f1f43f;
  min-width: 475px;
`;

const ButtonWrap = styled.div`
  position : absolute;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 10px;
  width: 500px;
  padding : 15px;
  bottom : 16px;
  left: 50%;
  transform: translateX(-50%);
`

const MemberButton = styled.button`
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  background-color : ${({isSelected}) => (isSelected ? "red" : "initial")};
  &:hover {
    background-color : red
  }
`