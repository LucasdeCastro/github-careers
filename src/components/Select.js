import React from 'react';
import { Select } from './index';

export default props => {
  const { data, getValue, getLabel, onChange, ...rest } = props;

  if (!data || data.length === 0) return null;

  return (
    <Select onChange={onChange} {...rest}>
      <option value={''}>Todos</option>
      {data.map(e => {
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
