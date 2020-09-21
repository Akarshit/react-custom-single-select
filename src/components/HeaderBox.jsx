import React from 'react';
import PropTypes from 'prop-types';

import { styled } from './styles';
import Item from './Item';

const Arrow = styled('div', {
  border: 'solid',
  borderColor: '#aaa',
  borderWidth: '0 2px 2px 0',
  padding: '4px',
  height: '0px',
  variants: {
    isOpen: {
      true: { transform: 'rotate(225deg)' },
      false: { transform: 'rotate(45deg) translateX(-5px)' },
    },
  },
  ':hover': {
    borderColor: '#63B3ED',
  },
});

const ArrowContainer = styled('div', {
  position: 'absolute',
  right: '10px',
});

const Box = styled('div', {
  minHeight: '38px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  color: '#444',
  borderColor: '#ddd',
  border: '1px solid',
  backgroundColor: 'white',
  position: 'relative',
  ':hover': {
    borderColor: '#63B3ED',
  },
});

const HeaderBox = (props) => {
  const {
    setOpen,
    isOpen,
    options,
    selected,
    placeholder,
    customStyle,
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

HeaderBox.propTypes = {
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  customStyle: PropTypes.object.isRequired,
};

export default HeaderBox;
