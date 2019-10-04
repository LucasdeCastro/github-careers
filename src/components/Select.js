import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './index';

const SelectWrapper = ({
  data, getValue, getLabel, onChange,
}) => {
  if (!data || data.length === 0) return null;

  return (
    <Select onChange={onChange}>
      <option value="">Todos</option>
      {data.map((e) => {
        const value = getValue(e);
        return (
          <option key={value} value={value}>
            {getLabel(e)}
          </option>
        );
      })}
    </Select>
  );
};

SelectWrapper.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  getValue: PropTypes.func.isRequired,
  getLabel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectWrapper;
