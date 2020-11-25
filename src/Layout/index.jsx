import React from "react";
import styled from "styled-components";

const GlobalStyles = styled.div`
`;

export const Layout = ({ children }) => {
  return (
      <GlobalStyles>
        {children}
      </GlobalStyles>
  );
};
