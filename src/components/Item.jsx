import React, { useState } from "react";
import { styled } from "./styles";

const Label = styled("div", {
  color: "#444",
  display: "flex",
  paddingTop: "2px",
  paddingBottom: "2px",
  alignItems: "center",
  paddingLeft: "10px",
  paddingRight: "10px",
  minHeight: "1.5em",
  cursor: "pointer",
  variants: {
    isSelected: {
      true: {
        backgroundColor: "#007bff",
        ":hover": {
          backgroundColor: "rgb(38, 132, 255)"
        }
      },
      false: {
        backgroundColor: "transparent",
        ":hover": {
          backgroundColor: "rgb(238, 245, 255)"
        }
      }
    },
    isHeader: {
      true: {
        ":hover": {
          backgroundColor: "transparent"
        }
      }
    }
  }
});

export const Item = (props) => {
  const {
    index,
    option,
    handleSelect,
    selected,
    isHeader,
    customStyle,
    placeholder
  } = props;
  const isSelected = index === selected;
  let label = placeholder ?? "Choose option...";
  if (isHeader && selected >= 0) {
    label = option?.label ?? option;
  }
  if (!isHeader) {
    label = option?.label ?? option;
  }
  const onSelected = () => {
    if (isHeader) {
      return;
    }
    handleSelect(index);
  };
  const overrideStyle = {
    ...customStyle?.Item,
    ...option?.style
  };
  return (
    <div onClick={onSelected}>
      {option?.comp ? (
        <option.comp
          css={overrideStyle}
          isSelected={isSelected.toString()}
          isHeader={isHeader?.toString() ?? "false"}
        />
      ) : (
        <Label
          isSelected={isSelected.toString()}
          isHeader={isHeader?.toString() ?? "false"}
          css={overrideStyle}
        >
          {label}
        </Label>
      )}
    </div>
  );
};
