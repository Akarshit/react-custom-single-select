import React, { useState } from "react";
import { Item } from "./Item";
import { styled } from "./styles";

const Box = styled("div", {
  borderRadius: "5px",
  border: "1px soplid",
  color: "#444",
  display: "flex",
  flexDirection: "column",
  maxHeight: "20em",
  marginTop: "7px",
  zIndex: 1000,
  backgroundColor: "white",
  paddingBottom: "4px"
});

export const List = (props) => {
  const { isOpen, handleSelect, options, selected, customStyle } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <Box css={customStyle?.List ?? {}}>
      {options.map((option, i) => (
        <Item
          option={option}
          handleSelect={handleSelect}
          index={i}
          selected={selected}
          customStyle={customStyle}
        />
      ))}
    </Box>
  );
};
