import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { OutlinedInput } from '@mui/material';
import Divider from '@mui/material/Divider';

import Button from '@mui/material/Button';
import { useState } from 'react';

import FlexBetween from '../../wrapper/FlexBetween'

const NavHeader = () => {
  const navigate = useNavigate();
  return (
    <FlexBetween sx={{ maring: '20px 0' }}>
      <Button
        variant='outlined'
        onClick={() => { navigate('/dashboard') }}
      >
        Return
    </Button>
      <Button
        variant='outlined'
        onClick={() => { location.reload(); }}
      >
        Reset
    </Button>
    </FlexBetween>
  )
}

const Menu = (props) => {

  const {
    players,
    resetGame,
    setPlayers,
    playerTurn,
    isGameOver,
    isSinglePlayerMode,
    setIsSinglePlayerMode,
  } = props;

  const [toggleNameEdit, setToggleNameEdit] = useState(false)
  const [newName, setNewName] = useState('')
  const [newNamePlaceholder, setNewNamePlaceholder] = useState('Enter new name...')

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const iconTheme = {
    fontSize: '2rem'
  }

  const updatePlayerTwoName = () => {
    if (newName.length < 1) return setNewNamePlaceholder('Enter a name first');
    setPlayers([...players], players[1].name = newName)
    setNewName('')
    setToggleNameEdit(!toggleNameEdit)
  }

  const wrapperMargin = { margin: '20px 0' }

  return (
    <WidgetWrapper
      width={30}
      height={75}
      theme={theme}
    >
      <Box
        sx={{
          gap: '1rem',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavHeader resetGame={resetGame} />
        <Divider />
        <FlexBetween sx={wrapperMargin} >
          <Typography variant="h3">
            Gamemode
          </Typography>
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => { setIsSinglePlayerMode(!isSinglePlayerMode) }}
          >
            {isSinglePlayerMode ? <PersonOutlineIcon sx={iconTheme} /> : <PeopleOutlineIcon sx={iconTheme} />}
          </Box>
        </FlexBetween>

        <Divider />

        <FlexBetween sx={wrapperMargin} >
          <Typography variant="h3">
            {players[0].name}
          </Typography>

          {toggleNameEdit ? (
            <OutlinedInput
              value={newName}
              placeholder={newNamePlaceholder}
              onChange={(e) => { setNewName(e.target.value) }}
              endAdornment={<EditIcon onClick={updatePlayerTwoName} />}
            />
          ) : (
            <Typography variant="h3" sx={{ display: 'flex', gap: '1rem' }}>
              {players[1].name}
              <EditIcon onClick={() => { setToggleNameEdit(!toggleNameEdit) }} />
            </Typography>
          )}
        </FlexBetween>
        <Divider />
      </Box>
    </WidgetWrapper >
  )
}

export default Menu
