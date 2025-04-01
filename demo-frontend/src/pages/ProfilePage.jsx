import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileDetails from '../components/ProfileDetails'
import LoadingSpinner from '../components/LoadingSpinner'

const ProfilePage = () => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true)
        // In a real app, you would fetch from an API
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const mockProfiles = [
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
        ]
        
        const foundProfile = mockProfiles.find(p => p.id === parseInt(id))
        if (foundProfile) {
          setProfile(foundProfile)
        } else {
          setError('Profile not found')
        }
        setLoading(false)
      } catch (err) {
        setError('Failed to load profile')
        setLoading(false)
      }
    }

    fetchProfile()
  }, [id])

  if (loading) return <LoadingSpinner />
  if (error) return <Typography color="error">{error}</Typography>

  return <ProfileDetails profile={profile} />
}

export default ProfilePage