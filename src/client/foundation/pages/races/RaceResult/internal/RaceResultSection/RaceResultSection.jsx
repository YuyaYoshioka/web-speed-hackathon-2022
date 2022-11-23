import React from "react";
import styled from "styled-components";

import { assets } from "../../../../../../foundation/utils/UrlUtils";
import { Color, FontSize, Space } from "../../../../../styles/variables";

const Wrapper = styled.div`
  align-items: center;
  color: ${Color.mono[400]};
  display: flex;
  font-size: ${FontSize.LARGE};
  font-weight: bold;
  gap: ${Space * 2}px;
  justify-content: center;
  padding: ${Space * 2}px;
`;

/**
 * @typedef Props
 */

/** @type {React.VFC<Props>} */
export const RaceResultSection = () => {
  return (
    <Wrapper>
      <img
        alt=""
        decoding="async"
        height={20}
        src={assets("/icons/peace.svg")}
        width={17.5}
      />
      <div>結果はまだありません</div>
    </Wrapper>
  );
};
