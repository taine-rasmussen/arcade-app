import { Box, useTheme, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext } from 'react';
import { GameContext } from '../index';


const Display = () => {
  const { state: { isSinglePlayerMode } } = useContext(GameContext);
  return (
    <Box>
      <Typography
        variant='h2'
      >
        {
          isSinglePlayerMode
            ? 'Single player'
            : 'Two player'
        }
      </Typography>
    </Box>
  )
}

const Input = ({ isEdit, setIsEdit }) => {
  const theme = useTheme();
  const [newName, setNewName] = useState('')
  const bgLight = theme.palette.neutral.light

  return (
    <>
      <InputLabel >Enter name</InputLabel>
      <OutlinedInput
        onChange={(e) => setNewName(e.target.value)}
        sx={{ background: bgLight, fontSize: '1.1rem' }}
        value={newName}
        inputProps={{
          'aria-label': 'weight',
        }}
        label="Enter name..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
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
