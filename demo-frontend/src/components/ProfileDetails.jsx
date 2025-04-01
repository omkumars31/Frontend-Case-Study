import { Container, Typography, Paper, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MapComponent from './MapComponent'
import { useState } from 'react'

const ProfileDetails = ({ profile }) => {
  const [showMap, setShowMap] = useState(false)
  const navigate = useNavigate()

  if (!profile) {
    return (
      <Container>
        <Typography variant="h6">Profile not found</Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          <Box flex={1}>
            <img
              src={profile.image || 'https://via.placeholder.com/300'}
              alt={profile.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Box>
          <Box flex={2}>
            <Typography variant="h4" gutterBottom>
              {profile.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {profile.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {profile.description}
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Address:</strong> {profile.address}
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Email:</strong> {profile.email}
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Phone:</strong> {profile.phone}
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, mr: 2 }}
              onClick={() => setShowMap(!showMap)}
            >
              {showMap ? 'Hide Map' : 'Show Location'}
            </Button>
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate(-1)}>
              Back to List
            </Button>
          </Box>
        </Box>
        {showMap && (
          <Box sx={{ mt: 4 }}>
            <MapComponent
              address={profile.address}
              onClose={() => setShowMap(false)}
            />
          </Box>
        )}
      </Paper>
    </Container>
  )
}

export default ProfileDetails