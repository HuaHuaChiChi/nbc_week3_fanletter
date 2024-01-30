import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { useEffect, useState } from "react";

const Router = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/memo")
      .then((response) => response.json())
      .then((json) => {
        SetData([...json]); // 업데이트된 값을 출력
      });
  }, []);
  //FIXME - 두번뜨네 쉬벌 이거 고쳐야하고 내일 props로 api 넘겨주고. searchparams로 url에 있는거 검색해서 디테일 페이지 띄워주자.
  //NOTE - main에 fetch한 json 서버 불러왔으니 이제 넘겨주고 작업해라 근데 html 요소부터 좀 만들고;
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route data={data} SetData={SetData} path="/" element={<Main />} />
        <Route path="Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
