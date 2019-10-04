import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/accordion.css';
import Animation from './Animation';

const Accordion = ({ children, id }) => {
  const [show, toggle] = useState(false);
  const [header, body] = children;

  return (
    <div key={id}>
      {React.cloneElement(header, { click: toggle })}
      <Animation name="accordion" leaveTime={500}>
        {show && body}
      </Animation>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.func).isRequired,
  id: PropTypes.number.isRequired,
};

export default Accordion;
