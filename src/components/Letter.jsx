function Letter({ data }) {

  const {createdAt, nickname, avatar, content, id} = data

  return (
    <div id={id}>
      <div>
        <div>{avatar}</div>
        <span>{nickname}</span>
        <div>{createdAt}</div>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Letter