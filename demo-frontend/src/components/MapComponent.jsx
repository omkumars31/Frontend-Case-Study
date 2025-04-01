import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Typography, Paper } from '@mui/material' // Make sure Typography is imported
import LocationOnIcon from '@mui/icons-material/LocationOn'
import 'mapbox-gl/dist/mapbox-gl.css'
import LoadingSpinner from './LoadingSpinner'

const MapComponent = ({ address, onClose }) => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        setLoading(true)
        // Mock geocoding - replace with real API call in production
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const latitude = 37.7749 + (Math.random() - 0.5) * 0.1
        const longitude = -122.4194 + (Math.random() - 0.5) * 0.1
        
        setViewport({
          latitude,
          longitude,
          zoom: 12,
        })
        setLoading(false)
      } catch (err) {
        setError('Failed to load map data')
        setLoading(false)
      }
    }

    if (address) {
      fetchCoordinates()
    }
  }, [address])

  if (loading) return <LoadingSpinner message="Loading map data..." />
  if (error) return <Typography color="error">{error}</Typography>

  return (
    <Paper elevation={3} sx={{ height: 400, position: 'relative' }}>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={import.meta.env.VITE_APP_MAPBOX_TOKEN}
      >
        <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}
        >
          <LocationOnIcon color="error" fontSize="large" />
        </Marker>
        <Popup
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          onClose={onClose}
          closeButton={true}
        >
          <Typography variant="subtitle2">{address}</Typography>
        </Popup>
      </ReactMapGL>
    </Paper>
  )
}

export default MapComponent