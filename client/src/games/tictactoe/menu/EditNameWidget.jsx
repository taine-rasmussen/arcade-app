import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useState, useContext } from 'react';
import { useTheme } from '@mui/material';
import { GameContext } from '../index';
import { motion } from 'framer-motion';

const EditNameWidget = ({ isEdit, setIsEdit }) => {
  const theme = useTheme();
  const [newName, setNewName] = useState('');
  const bgLight = theme.palette.primary.alt;
  const { dispatch } = useContext(GameContext);

  const handleNameChange = () => {
    dispatch({ type: 'update2pName', payload: newName })
    setIsEdit(!isEdit)
    setNewName('')
  }

  return (
    <motion.div
      exit={{ y: 100, opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ y: ['100px', '0px'], opacity: 1 }}
      transition={{ type: 'tween', duration: 0.5, delay: 0.3 }}
    >
      <OutlinedInput
        onChange={(e) => setNewName(e.target.value)}
        sx={{ background: bgLight, fontSize: '1.25rem' }}
        value={newName}
        placeholder="Enter new name..."
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
    </motion.div>
  )
}

export default EditNameWidget
