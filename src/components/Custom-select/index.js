import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core'

export const CustomSelect = ({ handleChange, getOptionLabel, label, options, value, field, isMultiple, ...props }) => {

  const onChange = (e, val, reason) => {
    handleChange(val, field)
  }

  return (<Autocomplete
    id={field}
    options={isMultiple ? options.filter(item => !value.find(itemVal => itemVal.id === item.id)) : options}
    getOptionLabel={getOptionLabel}
    value={value}
    multiple={isMultiple}
    fullWidth
    onChange={onChange}
    renderInput={(params) => <TextField {...params} label={field} variant="outlined" />}
  />
  );
};
