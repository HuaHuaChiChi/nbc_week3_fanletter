function Letter({ data }) {

  const {createdAt, nickname, avatar, content, id} = data

  return (
    <div id={id}>
      <div>
        <img src={avatar} alt={"ㅎㅇ루"} />
        <span>{nickname}</span>
        <div>{createdAt}</div>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Letter