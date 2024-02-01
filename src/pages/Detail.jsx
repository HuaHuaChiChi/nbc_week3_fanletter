import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
function Detail({data}) {
  // const location = useLocation();
  // const id = location.state;
  const navigate = useNavigate()
  const {id} = useParams()

  const [detailLetter] = data.filter(item => item.id === id);
  console.log(detailLetter)

  return (
    <Container>
      <BackButton onClick={() =>navigate("/")}>뒤로가기</BackButton>
      <DetailCard>
        <DetailHeader>
          <Avatar src={detailLetter.avatar} alt={"ㅎㅇ루"} />
          <CardTitle>{detailLetter.nickname}</CardTitle>
          <Time>{detailLetter.createdAt}</Time> 
        </DetailHeader>
        <DetailWritedTo>To: {detailLetter.writedTo}</DetailWritedTo>      
        <DetailContent>
          <Content>{detailLetter.content}</Content>
        </DetailContent>
      </DetailCard>

    </Container>
  )
}

export default Detail

const Time = styled.p`
position: absolute;
right : 20px;
`

const Content = styled.p`
  background-color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0;
  height: 275px;`

const DetailWritedTo = styled.p``

const DetailContent = styled.div`

`

const DetailHeader = styled.header`
position: relative;
display : flex;
flex-direction : row;
align-items : center;
gap : 10px
`

export const Avatar = styled.img`
width: 70px;
height: 70px;
object-fit: cover;
border-radius: 50%;
margin-top : 20px;
`

const BackButton = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: #282828;
  color: white;
  width: 100px;
  height: 50px;`

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  background-color: gray;
  color: white;
  padding: 16px;`

const CardTitle = styled.h1`
font-size : 30px;
`