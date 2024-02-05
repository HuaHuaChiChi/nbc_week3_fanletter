import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../redux/modules/jsonSet";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/memo")
      .then((response) => response.json())
      .then((json) => {
        dispatch(setData(json));
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
