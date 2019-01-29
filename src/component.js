// @flow

import * as React from "react";
import styled from "styled-components";

type Props = {|
  +node?: string
|};

const Component = (props: Props) => {
  const { node } = props;
  return <div>{node}</div>;
};

export default Component;
