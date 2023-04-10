import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import EditIcon from '@mui/icons-material/Edit';
import { OutlinedInput } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Menu = (props) => {

  const {
    players,
    setPlayers,
    playerTurn,
    isGameOver,
    isSinglePlayerMode,
    setIsSinglePlayerMode,
  } = props;

  const [toggleNameEdit, setToggleNameEdit] = useState(false)
  const [newName, setNewName] = useState('')

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const iconTheme = {
    fontSize: '2rem'
  }

  console.log(newName)

  return (
    <WidgetWrapper
      width={20}
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
        <Box
          sx={{
            height: '15%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">
            Game mode
          </Typography>
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => { setIsSinglePlayerMode(!isSinglePlayerMode) }}
          >
            {isSinglePlayerMode ? <PersonOutlineIcon sx={iconTheme} /> : <PeopleOutlineIcon sx={iconTheme} />}
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            height: '15%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">
            Players
          </Typography>
          <Box
            sx={{
              gap: '2rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4">
              {players[0].name}
            </Typography>

            {toggleNameEdit ? (
              <OutlinedInput
                value={newName}
                placeholder='Enter new name'
                onChange={(e) => { setNewName(e.target.value) }}
                endAdornment={<EditIcon onClick={() => { setToggleNameEdit(!toggleNameEdit) }} />}
              />
            ) : (
              <Typography variant="h4" sx={{ display: 'flex', gap: '1rem' }}>
                {players[1].name}
                <EditIcon onClick={() => { setToggleNameEdit(!toggleNameEdit) }} />
              </Typography>
            )}

          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            height: '15%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">
            Info
          </Typography>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h4">
              {`Your move: ${playerTurn ? players[0].name : players[1].name}`}
            </Typography>
            <Typography variant="h4">
              {`Winner: ${isGameOver ? players[playerTurn].name : ''}`}
            </Typography>

          </Box>
        </Box>

        <Divider />

        <Box
          sx={{
            height: '15%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">
            Controls
          </Typography>

        </Box>



      </Box>
    </WidgetWrapper >
  )
}

export default Menu
