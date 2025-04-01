import { useState, useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import ProfileCard from '../components/ProfileCard'
import SearchFilter from '../components/SearchFilter'
import {LoadingSpinner, LoadingBar} from '../components/LoadingSpinner'

const HomePage = () => {
  const [profiles, setProfiles] = useState([])
  const [filteredProfiles, setFilteredProfiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true)
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const mockProfiles = [
          {
            id: 1,
            name: 'Om Kumar Singh',
            email: 'omkumar312003@gmail.com',
            phone: '+91-7982842679',
            address: 'Pune, Maharasthra ',
            title: 'Senior Software Engineer',
            description: 'Software engineer with 5 years of experience specializing in frontend development with React and TypeScript. Passionate about creating responsive and accessible web applications.',
            image: 'https://randomuser.me/api/portraits/men/22.jpg',
            interests: ['React', 'Node.js', 'TypeScript', 'Accessibility'],
          },
          {
            id: 2,
            name: 'Koustubh Raj Singh',
            email: 'koustubhraj85@gmail.com',
            phone: '+91 97826 85111',
            address: 'Pune, Maharasthra',
            title: 'UX Designer',
            description: 'UX designer with a background in psychology, passionate about creating intuitive interfaces that solve real user problems. Experienced in user research, wireframing, and prototyping.',
            image: 'https://randomuser.me/api/portraits/men/9.jpg',
            interests: ['UI/UX', 'Figma', 'User Research', 'Prototyping'],
          },
          {
            id: 3,
            name: 'Naman Manhas',
            email: 'naman.bvp25@gmail.com',
            phone: '+91 7982256390',
            address: 'Jammu',
            title: 'Product Manager',
            description: 'Product manager with a technical background, experienced in agile methodologies and cross-functional team leadership. Focused on delivering products that meet both user needs and business goals.',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
            interests: ['Agile', 'Scrum', 'Product Strategy', 'Roadmapping'],
          },
        ]
        
        setProfiles(mockProfiles)
        setFilteredProfiles(mockProfiles)
        setLoading(false)
      } catch (err) {
        setError('Failed to load profiles')
        setLoading(false)
      }
    }

    fetchProfiles()
  }, [])

  const handleSearch = (searchTerm, filter) => {
    const filtered = profiles.filter((profile) => {
      const term = searchTerm.toLowerCase()
      if (filter === 'all') {
        return (
          profile.name.toLowerCase().includes(term) ||
          profile.address.toLowerCase().includes(term) ||
          (profile.interests && profile.interests.some(i => i.toLowerCase().includes(term)))
        )
      } else if (filter === 'name') {
        return profile.name.toLowerCase().includes(term)
      } else if (filter === 'location') {
        return profile.address.toLowerCase().includes(term)
      } else if (filter === 'interest') {
        return profile.interests && profile.interests.some(i => i.toLowerCase().includes(term))
      }
      return true
    })
    setFilteredProfiles(filtered)
  }

  const handleReset = () => {
    setFilteredProfiles(profiles)
  }

  if (loading) return <LoadingSpinner />
  if (error) return <Typography color="error">{error}</Typography>

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      {loading && <LoadingBar />}
    <Typography variant="h4" component="h1" gutterBottom>
      Profile Explorer
    </Typography>
    <SearchFilter onSearch={handleSearch} onReset={handleReset} />
    
    {/* Updated Grid v2 implementation */}
    <Grid container spacing={3}>
      {filteredProfiles.length > 0 ? (
        filteredProfiles.map((profile) => (
          <Grid key={profile.id} xs={12} sm={6} md={4}>
            <ProfileCard profile={profile} />
          </Grid>
        ))
      ) : (
        <Grid xs={12}>
          <Typography>No profiles found matching your criteria</Typography>
        </Grid>
      )}
    </Grid>
  </Container>
)
}

export default HomePage