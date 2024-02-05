import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { useEffect, useState } from "react";

const Router = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/memo")
      .then((response) => response.json())
      .then((json) => {
        setData([...json]); // 업데이트된 값을 출력
      });
  }, []);

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
  //이거 setData로 렌더링 변경할 수 있을 것 같긴 한데. 편한건 이게 편하고..
  //근데 server에 한번 더 요청하는 서버비는 조상님이 내주진 않고,,,
  //튜터님한테 뭐가 더 좋은지 월요일에 물어보자
  // .then((response) => response.json())
  //   .then((json) => {
  //     setData([...json]);
  //   });
  // addLetterJson에 위 코드를 추가하니까 사진이 alt=ㅎㅇ루 이부분이 나오는걸 보니 문자열로 불러와져서 그런건가 확인해보자.
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main data={data} addLetterJson={addLetterJson} />}
        />
        <Route
          path="Detail/:id"
          element={<Detail data={data} setData={setData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
