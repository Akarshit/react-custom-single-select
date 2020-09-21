import React from 'react';
import PropTypes from 'prop-types';

import { styled } from './styles';

const Label = styled('div', {
  color: '#444',
  display: 'flex',
  paddingTop: '2px',
  paddingBottom: '2px',
  alignItems: 'center',
  paddingLeft: '10px',
  paddingRight: '10px',
  minHeight: '1.5em',
  cursor: 'pointer',
  variants: {
    isSelected: {
      true: {
        backgroundColor: '#007bff',
        ':hover': {
          backgroundColor: 'rgb(38, 132, 255)',
        },
      },
      false: {
        backgroundColor: 'transparent',
        ':hover': {
          backgroundColor: 'rgb(238, 245, 255)',
        },
      },
    },
    isHeader: {
      true: {
        ':hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

const Item = (props) => {
  const {
    index,
    option,
    handleSelect,
    selected,
    isHeader,
    customStyle,
    placeholder,
  } = props;
  const isSelected = index === selected;
  let label = placeholder ?? 'Choose option...';
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
    ...customStyle.Item,
    ...option.style,
  };
  return (
    <div onClick={onSelected}>
      {option?.comp ? (
        <option.comp
          css={overrideStyle}
          isSelected={isSelected.toString()}
          isHeader={isHeader.toString()}
        />
      ) : (
        <Label
          isSelected={isSelected.toString()}
          isHeader={isHeader.toString()}
          css={overrideStyle}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

Item.defaultProps = {
  // -1 might be uesd for header position
  index: -9,
  option: null,
  handleSelect: null,
  isHeader: false,
  customStyle: {},
  placeholder: null,
};

Item.propTypes = {
  index: PropTypes.number,
  option: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleSelect: PropTypes.func,
  isHeader: PropTypes.bool,
  customStyle: PropTypes.object,
  placeholder: PropTypes.string,
  selected: PropTypes.number.isRequired,
};

export default Item;
