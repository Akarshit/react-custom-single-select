import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import { styled } from './styles';

const Box = styled('div', {
  borderRadius: '5px',
  border: '1px solid',
  borderColor: '#ccc',
  color: '#444',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '20em',
  marginTop: '7px',
  zIndex: 1000,
  backgroundColor: 'white',
  paddingBottom: '4px',
  paddingTop: '4px',
});

const List = (props) => {
  const { isOpen, handleSelect, options, selected, customStyle } = props;
  if (!isOpen) {
    return null;
  }
  return (
    <Box css={customStyle.List}>
      {options.map((option, i) => (
        <Item
          option={option}
          handleSelect={handleSelect}
          index={i}
          selected={selected}
          customStyle={customStyle}
          key={i}
        />
      ))}
    </Box>
  );
};

Item.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  customStyle: PropTypes.object.isRequired,
};

export default List;
