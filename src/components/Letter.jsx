function Letter({ data }) {

  // const {createdAt, nickname, avatar, content, writedTo, id} = data

  return (
    <div>
      <p>{data.nickname}</p>
    </div>
  )
}

export default Letter