// @flow

import React from "react";
import styled from "styled-components";
import Component from "./Component";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <Component
      node={
        <Text>
          <Link style={{ color: "red" }} to="/cost_item_setting">
            コスト項目設定
          </Link>
          React.Node<Text2>str</Text2>aaaa
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
