export const geocodeAddress = async (address) => {
    // In a real app, this would call a geocoding API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Return mock coordinates
        resolve({
          latitude: 37.7749 + (Math.random() - 0.5) * 0.1,
          longitude: -122.4194 + (Math.random() - 0.5) * 0.1,
        })
      }, 500)
    })
  }