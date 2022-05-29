import React, { useContext } from "react";
import styled from "styled-components";

import { mapContext } from "../context/mapContext";

const FooterElem = styled.footer`
  bottom: 0;
  height: 30px;
  position: absolute;
  z-index: 1000;
  background: white;
`;

function Footer(props) {
  const { count } = useContext(mapContext);

  return <FooterElem>number of times clicked: {count}</FooterElem>;
}

export default Footer;
