import { TextField, Box, MenuItem, Button } from '@mui/material'
import { useState } from 'react'

const SearchFilter = ({ onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const handleSearch = () => {
    onSearch(searchTerm, filter)
  }

  const handleReset = () => {
    setSearchTerm('')
    setFilter('all')
    onReset()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        mb: 4,
        alignItems: 'center',
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TextField
        select
        label="Filter"
        variant="outlined"
        size="small"
        sx={{ minWidth: 120 }}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="location">Location</MenuItem>
        <MenuItem value="interest">Interest</MenuItem>
      </TextField>
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <Button variant="outlined" onClick={handleReset}>
        Reset
      </Button>
    </Box>
  )
}

export default SearchFilter