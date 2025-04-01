import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  const { isAdmin, setIsAdmin } = useContext(AuthContext)

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile Explorer
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {isAdmin && (
            <Button color="inherit" component={Link} to="/admin">
              Admin
            </Button>
          )}
          <Button
            color="inherit"
            onClick={() => setIsAdmin(!isAdmin)}
          >
            {isAdmin ? 'Logout' : 'Admin Login'}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar