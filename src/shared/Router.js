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
