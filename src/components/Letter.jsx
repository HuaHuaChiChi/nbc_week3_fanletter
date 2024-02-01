import {
  Avatar,
  Content,
  CardContainer,
  LetterCard,
  AvatarCardWrap
} from "../style/LetterStyle"

function Letter({ data }) {

  const {createdAt, nickname, avatar, content, id} = data

  return (
    <LetterCard id={id}>
      <AvatarCardWrap>
      <Avatar src={avatar} alt={"ㅎㅇ루"} />
      <CardContainer>        
        <span>{nickname}</span>
        <div>{createdAt}</div>
        <Content>{content}</Content>
      </CardContainer>
      </AvatarCardWrap>

    </LetterCard>
  )
}

export default Letter

