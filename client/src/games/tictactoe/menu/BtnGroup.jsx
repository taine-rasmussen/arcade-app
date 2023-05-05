import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FlexBetween from '../../../wrapper/FlexBetween';
import ButtonGroup from '@mui/material/ButtonGroup';
import PersonIcon from '@mui/icons-material/Person';
import { Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../index'
import { useContext } from 'react';

const BtnGroup = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const alt = theme.palette.primary.alt
  const highlight = theme.palette.primary.highlight
  const { dispatch, state: { isSinglePlayerMode } } = useContext(GameContext);

  const btnStyle = {
    fontSize: '1.25rem',
    borderRadius: '0.75rem',
    background: alt,
    '&:hover': {
      background: alt,
      color: highlight
    }
  }

  return (
    <FlexBetween sx={{ padding: '10px 0px' }}>
      <ButtonGroup
        variant="contained"
      >
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
          onClick={() => { dispatch({ type: 'toggleGameMode' }) }}
          sx={btnStyle}
          endIcon={
            isSinglePlayerMode
              ? <PersonIcon />
              : <PeopleAltIcon />
          }
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

export default BtnGroup