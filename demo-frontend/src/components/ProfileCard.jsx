import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Chip, 
  Box, 
  Dialog,
  DialogContent,
  DialogActions 
} from '@mui/material'
import { useState } from 'react'
import MapComponent from './MapComponent'
import { Link } from 'react-router-dom'
const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false)

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={profile.image || 'https://via.placeholder.com/300'}
        alt={profile.name}
      />
      <Link to={`/profiles/${profile.id}`} style={{ textDecoration: 'none' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {profile.description}
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setShowMap(true)}
          sx={{ mb: 2 }}
        >
          View Summary
        </Button>

        {profile.interests?.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {profile.interests.map((interest, index) => (
              <Chip key={index} label={interest} size="small" />
            ))}
          </Box>
        )}
      </CardContent>
      </Link>

      {/* Map Dialog */}
      <Dialog 
        open={showMap} 
        onClose={() => setShowMap(false)} 
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            {profile.name}'s Location
          </Typography>
          <MapComponent 
            address={profile.address} 
            onClose={() => setShowMap(false)}
          />
          <Typography variant="body2" sx={{ mt: 2 }}>
            <strong>Address:</strong> {profile.address}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowMap(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default ProfileCard