import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import FlexBetween from '../../../wrapper/FlexBetween'
import { useState } from 'react';

import ProfileCard from './ProfileCard';
import Settings from './Settings';

const Menu = (props) => {

  const {
    players,
    resetGame,
    playerTurn,
    setPlayers,
    isSinglePlayerMode,
    setIsSinglePlayerMode,
  } = props;

  const [toggleNameEdit, setToggleNameEdit] = useState(false)
  const [newName, setNewName] = useState('')
  const [newNamePlaceholder, setNewNamePlaceholder] = useState('Enter new name...')

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const updatePlayerTwoName = () => {
    if (newName.length < 1) return setNewNamePlaceholder('Enter a name first');
    setPlayers([...players], players[1].name = newName)
    setNewName('')
    setToggleNameEdit(!toggleNameEdit)
  }

  return (
    <Box
      sx={{
        gap: '2rem',
        width: '30%',
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <FlexBetween>
        {players.map((player, i) => (
          <ProfileCard
            key={i}
            player={player}
            players={players}
            playerTurn={playerTurn}
          />
        ))}
      </FlexBetween>
      <Settings />

      {/* 
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
        <Divider /> */}
    </Box>
  )
}

export default Menu
