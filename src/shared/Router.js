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

  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main data={data} SetData={SetData} />} />
        <Route
          path="Detail/:id"
          element={<Detail data={data} SetData={SetData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
