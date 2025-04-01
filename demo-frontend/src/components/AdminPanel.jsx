import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  IconButton,
} from '@mui/material'
import { Delete, Edit, Add } from '@mui/icons-material'
import { useForm, Controller } from 'react-hook-form'

const AdminPanel = ({ profiles, onAdd, onEdit, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const { control, handleSubmit, reset } = useForm()

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'address', headerName: 'Address', width: 250 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEditClick(params.row)}>
            <Edit color="primary" />
          </IconButton>
          <IconButton onClick={() => handleDeleteClick(params.row.id)}>
            <Delete color="error" />
          </IconButton>
        </>
      ),
    },
  ]

  const handleAddClick = () => {
    setSelectedProfile(null)
    reset({
      name: '',
      email: '',
      address: '',
      description: '',
      image: '',
    })
    setOpenDialog(true)
  }

  const handleEditClick = (profile) => {
    setSelectedProfile(profile)
    reset(profile)
    setOpenDialog(true)
  }

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      onDelete(id)
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const onSubmit = (data) => {
    if (selectedProfile) {
      onEdit({ ...data, id: selectedProfile.id })
    } else {
      onAdd(data)
    }
    handleCloseDialog()
  }

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddClick}
        >
          Add Profile
        </Button>
      </Box>
      <DataGrid
        rows={profiles}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
      />
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedProfile ? 'Edit Profile' : 'Add New Profile'}
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Name is required' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{ required: 'Address is required' }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Address"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                />
              )}
            />
            <Controller
              name="image"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Image URL"
                  fullWidth
                  margin="normal"
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant="contained">
              {selectedProfile ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  )
}

export default AdminPanel