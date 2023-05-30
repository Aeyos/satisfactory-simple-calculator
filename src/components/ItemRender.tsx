import React from "react";
import styled from "styled-components";
import COLORS from "../const/Colors";
import { Item } from "../const/Enums";
import { ITEM_GRAPHICS } from "../const/Graphics";
import { toFixed4 } from "../utils/float";
import StringUtils from "../utils/string";

const StyledItemRender = styled.div`
  padding: 0.5rem;
  background: #cccbcb;
  border-radius: 5px;
  border: 2px solid #333;
  position: relative;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 25%);

  img {
    width: 128px;
  }

  .item_render__amount {
    position: absolute;
    bottom: -0.25rem;
    right: -0.25rem;
    background: ${COLORS.ORANGE};
    color: white;
    border-radius: 3px;
    font-weight: bold;
    line-height: 1.5;
    padding: 0 0.5rem;
    font-size: 1.5rem;
    z-index: 9999;
  }

  & + & {
    margin-top: 1rem;
  }
`;

type ItemRenderProps = {
  item: Item;
  amount: number;
};

function ItemRender({ item, amount }: ItemRenderProps) {
  return (
    <StyledItemRender title={StringUtils.separateCamelCase(Item[item])}>
      <img src={ITEM_GRAPHICS[item]} alt={Item[item]} />
      <span className="item_render__amount">{toFixed4(amount)}</span>
    </StyledItemRender>
  );
}

export default ItemRender;
