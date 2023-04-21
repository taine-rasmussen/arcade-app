import { Box, useTheme, Typography, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext } from 'react';
import { GameContext } from '../index';

const Display = ({ isEdit, setIsEdit }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <Typography
        variant='h2'
      >
        Edit names
      </Typography>
      <Button
        variant='outlined'
        endIcon={<EditIcon />}
        onClick={() => { setIsEdit(!isEdit) }}
      >
        Edit name
      </Button>
    </Box>
  )
}

const Input = ({ isEdit, setIsEdit }) => {
  const theme = useTheme();
  const [newName, setNewName] = useState('');
  const bgLight = theme.palette.neutral.light;
  const { dispatch } = useContext(GameContext);

  const handleNameChange = () => {
    dispatch({ type: 'update2pName', payload: newName })
    setIsEdit(!isEdit)
    setNewName('')
  }

  return (
    <>
      <InputLabel >Enter name</InputLabel>
      <OutlinedInput
        onChange={(e) => setNewName(e.target.value)}
        sx={{ background: bgLight }}
        value={newName}
        label="Enter new name..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleNameChange}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  )
}

const EditGameModeWidget = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit
        ? <Input
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
        : <Display
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
      }
    </>
  )
}

export default EditGameModeWidget
