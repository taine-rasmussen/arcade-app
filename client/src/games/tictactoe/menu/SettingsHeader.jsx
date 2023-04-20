import { Button } from '@mui/material';
import FlexBetween from '../../../wrapper/FlexBetween'
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../index'
import { useContext } from 'react';


const SettingsHeader = () => {
  const { dispatch } = useContext(GameContext)
  const navigate = useNavigate();
  return (
    <FlexBetween sx={{ padding: '10px 0px' }}>
      <Button
        variant='outlined'
        onClick={() => { navigate('/dashboard') }}
      >
        Return
    </Button>
      <Button
        variant='outlined'
        onClick={() => { dispatch('reset'); }}
      >
        Reset
    </Button>
    </FlexBetween>
  )
}

export default SettingsHeader