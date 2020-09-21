import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HeaderBox from './HeaderBox';
import List from './List';
import { styled } from './styles.jsx';

const Container = styled('div', {
  fontSize: '1.2em',
  minWidth: '12em',
  position: 'relative',
  height: '2em',
});

const SingleSelect = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const { options, placeholder, customStyle, onSelect } = props;
  const handleSelect = (index) => {
    setSelected(index);
    setOpen(false);
    onSelect?.(options[index], { index });
  };
  const displayText = selected >= 0 ? options[selected].label : placeholder;
  return (
    <Container css={customStyle?.Container ?? {}}>
      <HeaderBox
        isOpen={isOpen}
        setOpen={setOpen}
        displayText={displayText}
        options={options}
        selected={selected}
        customStyle={customStyle}
        placeholder={placeholder}
      />
      <List
        isOpen={isOpen}
        options={options}
        selected={selected}
        handleSelect={handleSelect}
        setOpen={setOpen}
        customStyle={customStyle}
      />
    </Container>
  );
};

SingleSelect.defaultProps = {
  placeholder: 'Choose option...',
  customStyle: {},
  options: [],
};

SingleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  customStyle: PropTypes.object,
  onSelect: PropTypes.func,
};

export default SingleSelect;
