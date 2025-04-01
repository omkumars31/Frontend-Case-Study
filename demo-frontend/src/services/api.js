const API_BASE_URL = 'https://api.example.com'

export const getProfiles = async () => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
        // ... other profiles
      ])
    }, 1000)
  })
}

export const getProfileById = async (id) => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      const profiles = [
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
        // ... other profiles
      ]
      resolve(profiles.find(p => p.id === parseInt(id)))
    }, 500)
  })
}

export const addProfile = async (profile) => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ...profile, id: Math.floor(Math.random() * 1000) })
    }, 500)
  })
}

export const updateProfile = async (profile) => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(profile)
    }, 500)
  })
}

export const deleteProfile = async (id) => {
  // Mock implementation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 500)
  })
}