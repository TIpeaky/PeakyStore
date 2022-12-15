import { useState } from 'react';

// MUI Material
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const OrdinationSelector = () => {
  const [option, setOption] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ordenação</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Preço Crescente</MenuItem>
          <MenuItem value={2}>Preço Decrescente</MenuItem>
          <MenuItem value={3}>A - Z</MenuItem>
          <MenuItem value={3}>Z - A</MenuItem>
        </Select>
      </FormControl>
  );
}

export default OrdinationSelector;