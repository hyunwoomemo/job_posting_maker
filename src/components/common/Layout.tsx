import styled from "@emotion/styled";
import React from "react";
import Header from "./Header.tsx";

const Layout = ({ children }: any) => {
  return (
    <Base>
      <Header></Header>
      <Wrapper>{children}</Wrapper>
    </Base>
  );
};

const Base = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export default Layout;
