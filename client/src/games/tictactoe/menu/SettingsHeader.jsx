import FlexBetween from '../../../wrapper/FlexBetween';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { GameContext } from '../index'
import { useContext } from 'react';


const SettingsHeader = () => {
  const { dispatch } = useContext(GameContext)
  const navigate = useNavigate();


  const btnStyle = {
    fontSize: '1.25rem'
  }

  return (
    <FlexBetween sx={{ padding: '10px 0px' }}>
      <ButtonGroup variant="contained">
        <Button
          onClick={() => { navigate('/dashboard') }}
          sx={btnStyle}
        >
          Return
      </Button>
        <Button
          onClick={() => { dispatch('reset'); }}
          sx={btnStyle}
        >
          Reset
      </Button>
        <Button
          onClick={() => { dispatch('reset'); }}
          sx={btnStyle}
        >
          Mode
      </Button>
        <Button
          onClick={() => { dispatch('reset'); }}
          sx={btnStyle}
        >
          Edit
      </Button>
      </ButtonGroup>
    </FlexBetween>
  )
}

export default SettingsHeader