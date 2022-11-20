import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Quiz from "../Pages/Quiz/Quiz";
import Result from "../Pages/Result/Result";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz/:id" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
};

export default AllRoute;
