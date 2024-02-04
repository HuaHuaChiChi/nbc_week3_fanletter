import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { useEffect, useState } from "react";
import { LetterContext } from "../context/LetterContext";

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

  return (
    <BrowserRouter>
      <LetterContext.Provider value={{ data, setData, addLetterJson }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="Detail/:id" element={<Detail />} />
        </Routes>
      </LetterContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
