## 리액트의 props, context, redux로 상태 관리를 배우기 위해 만들어진 프로젝트

![](https://velog.velcdn.com/images/ksksks102/post/207f2814-4aa7-46b8-a139-d6c1dfeebcc5/image.png)


총 파일

![](https://velog.velcdn.com/images/ksksks102/post/d70631af-8bd3-402d-a4e4-a012400c2843/image.png)


props로만 만든 branch <br/>
useContext를 사용하여 만든 branch <br/>
redux를 이용하여 만든 branch


> ### CREATE

```jsx

  const fetchData = () => {
    fetch("http://localhost:3001/memo")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]);
      });
  };

  console.log(data);

  const addLetterJson = (newLetter) => {
    fetch("http://localhost:3001/memo", {
      method: "post",
      body: JSON.stringify(newLetter),
    });
    fetchData();
  };
```
최상위 컴포넌트인 router에 작성되어 props를 통해 (Router -> Main -> LetterForm) 이동

![](https://velog.velcdn.com/images/ksksks102/post/e201b006-a3ce-443a-8140-4c873fc3c7f6/image.png)




> ### READ

```jsx
//Router.js
  useEffect(() => {
    fetch("http://localhost:3001/memo")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]); // 업데이트된 값을 출력
      });
  }, []);

//Main.jsx
  const [selectedMember, setSelectedMember] = useState("카리나");
  const [filteredLetters, setFilteredLetters] = useState([]);

  useEffect(() => {
    if (selectedMember) {
      const filtered = data.filter(letter => letter.writedTo === selectedMember);
      setFilteredLetters(filtered);
    }
  }, [data, selectedMember]);

<LetterList data={filteredLetters}/>

//LetterList 받아와서 Letter로 prop
      <S.Letters>
        {data.length === 0 ? (
          <p>
            아직 등록된 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되세요!
          </p>
        ) : (
          data.map((letterData) => (
            <Letter key={letterData.id} data={letterData} />
          ))
        )}
      </S.Letters>

//Letter
function Letter({ data }) {

  const navigate = useNavigate();

  const {createdAt, nickname, avatar, content, id} = data

  return (
    <LetterCard onClick={() => {navigate(`/Detail/${id}`, {state: id})}} id={id}>
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
```

![](https://velog.velcdn.com/images/ksksks102/post/439ebbe2-a4fa-4479-a6b3-fd4783b4b4a6/image.png)
![](https://velog.velcdn.com/images/ksksks102/post/147c15a9-1c55-40c8-8ac3-8c026d48208c/image.png)


멤버를 선택할때마다 데이터 타입에 맞는 Letter만 렌더링 .

> ### UPDATE

업데이트 기능에선 수정 할때, 수정을 하지 않을때에 따라서 표시가 되는 버튼이 달라져야 하기 때문에, boolean 값을 주었다.

```jsx
const [isEdit, setIsEdit] = useState(false)
```

![](https://velog.velcdn.com/images/ksksks102/post/f85e82eb-b91b-46d7-a5eb-76ddab0cf63c/image.png)

![](https://velog.velcdn.com/images/ksksks102/post/20817d37-4cc9-4bf3-a073-18e692a30986/image.png)

```jsx
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
```

boolean 값에 따라서 달라지는 컴포넌트

업데이트 함수가 실행되면 textarea의 값이 state에 저장되고, handleUpdateText 함수 안에서 바뀐 부분을 수정하고 저장한다.

```jsx
const handleUpdateText = () => {
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
```

> ### DELATE

```jsx
  const handleDelete = () => {
    fetch(`http://localhost:3001/memo/${id}`, {
      method: "DELETE",
    }).then(() => {
    navigate("/");
    const deleteData = data.filter(item => item.id !== id);
    setData(deleteData);
    })
  }
```

