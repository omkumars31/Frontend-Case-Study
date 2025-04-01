import { Container, Typography } from '@mui/material'
import AdminPanel from '../components/AdminPanel'
import { useState } from 'react'

const AdminPage = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Om Kumar Singh',
      email: 'omkumar312003@gmail.com',
      phone: '+91-7982842679',
      address: 'Pune, Maharasthra ',
      title: 'Senior Software Engineer',
      description: 'Software engineer with 5 years of experience specializing in frontend development with React and TypeScript. Passionate about creating responsive and accessible web applications.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
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
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
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
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
            interests: ['Agile', 'Scrum', 'Product Strategy', 'Roadmapping'],
    },
  ])

  const handleAddProfile = (newProfile) => {
    const id = Math.max(...profiles.map(p => p.id), 0) + 1
    setProfiles([...profiles, { ...newProfile, id }])
  }

  const handleEditProfile = (updatedProfile) => {
    setProfiles(profiles.map(p => 
      p.id === updatedProfile.id ? updatedProfile : p
    ))
  }

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter(p => p.id !== id))
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <AdminPanel
        profiles={profiles}
        onAdd={handleAddProfile}
        onEdit={handleEditProfile}
        onDelete={handleDeleteProfile}
      />
    </Container>
  )
}

export default AdminPage