// @flow

import React from "react";
import styled from "styled-components";
import Component from "./Component";

const App = () => {
  return (
    <Component
      test={1}
      node={
        <Text>
          React.Node<Text2>str</Text2>
        </Text>
      }
    />
  );
};

const Text = styled.p`
  color: red;
`;

const Text2 = styled.p`
  color: blue;
`;

export default App;
