import React from "react";
import Header from "../Header/Header";

const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
