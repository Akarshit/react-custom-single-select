import React, { useState } from "react";
import { styled } from "./styles";
import { Item } from "./Item";

const Arrow = styled("div", {
  border: "solid #aaa",
  borderWidth: "0 2px 2px 0",
  padding: "4px",
  height: "0px",
  display: "inline-block",
  variants: {
    isOpen: {
      true: { transform: "rotate(225deg)" },
      false: { transform: "rotate(45deg)" }
    }
  }
});

const ArrowContainer = styled("div", {
  position: "absolute",
  right: "10px",
  top: "5px"
});

const Box = styled("div", {
  minHeight: "38px",
  borderRadius: "5px",
  color: "#444",
  borderColor: "#ddd",
  border: "1px solid",
  backgroundColor: "white",
  position: "relative",
  ":hover": {
    borderColor: "#c241d3"
  }
});

export const HeaderBox = (props) => {
  const {
    setOpen,
    isOpen,
    options,
    selected,
    placeholder,
    customStyle
  } = props;
  const onToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <Box onClick={onToggle} css={customStyle?.Header ?? {}}>
      <Item
        option={options?.[selected]}
        isHeader
        selected={selected}
        placeholder={placeholder}
      />
      <ArrowContainer>
        <Arrow isOpen={isOpen.toString()} />
      </ArrowContainer>
    </Box>
  );
};
