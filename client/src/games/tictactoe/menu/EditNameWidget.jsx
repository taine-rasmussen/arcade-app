import { Box, useTheme, Typography, Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext } from 'react';
import { GameContext } from '../index';


const Display = ({ isEdit, setIsEdit }) => {
  const { state: { isSinglePlayerMode } } = useContext(GameContext);
  return (
    <Box
      sx={{

      }}
    >
      <Typography
        variant='h2'
      >
        {
          isSinglePlayerMode
            ? 'Single player'
            : 'Two player'
        }
      </Typography>

      <Button
        variant='outlined'
        onClick={() => { setIsEdit(!isEdit) }}
      >

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
  }

  return (
    <>
      <InputLabel >Enter name</InputLabel>
      <OutlinedInput
        onChange={(e) => setNewName(e.target.value)}
        sx={{ background: bgLight }}
        value={newName}
        label="Enter name..."
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
  const [isEdit, setIsEdit] = useState(true);
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
