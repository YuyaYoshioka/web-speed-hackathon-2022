import React from "react";
import styled from "styled-components";

import { assets } from "../../../../../foundation/utils/UrlUtils";

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

/**
 * @typedef Props
 * @type {object}
 * @property {string} url
 */

/** @type {React.VFC<Props>} */
export const HeroImage = () => {
  return (
    <Image
      alt=""
      height={734.57}
      src={assets("/images/hero.jpg")}
      width={1024}
    />
  );
};
