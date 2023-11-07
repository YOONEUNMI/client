import React from "react";
import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page} from "../page/page";
import {Page2} from "../page/page2";
import {Header} from "./header";
const Wrap = styled.div`
  width: 1280px;
  height: 100%;
  margin: auto;
`;

export const Layout = (): JSX.Element => {
  return (
    <Wrap>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </Wrap>
  );
};
