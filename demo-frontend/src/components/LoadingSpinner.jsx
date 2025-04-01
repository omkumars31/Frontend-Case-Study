import { CircularProgress, LinearProgress, Box, Typography } from '@mui/material'

const LoadingSpinner = ({ message }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="200px" gap={2}>
      <CircularProgress />
      {message && <Typography variant="body1">{message}</Typography>}
    </Box>
  )
}

const LoadingBar = () => {
  return <LinearProgress sx={{ width: '100%' }} />
}

// Export both as named exports
export { LoadingSpinner, LoadingBar }

// Also export LoadingSpinner as default for backward compatibility
export default LoadingSpinner