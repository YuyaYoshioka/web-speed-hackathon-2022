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
    <picture>
      <source srcSet={assets("/images/hero.avif")} type="image/avif" />
      <Image alt="" src={assets("/images/hero.jpg")} />
    </picture>
  );
};
