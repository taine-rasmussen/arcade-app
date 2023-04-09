import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WidgetWrapper from '../../wrapper/WidgetWrapper';
import Divider from '@mui/material/Divider';
import { OutlinedInput } from '@mui/material';

const Menu = (props) => {

  const {
    players,
    setPlayers,
    isSinglePlayerMode,
    setIsSinglePlayerMode,
  } = props;

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const iconTheme = {
    fontSize: '2rem'
  }

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
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {players.map((player) => {
              return (
                <OutlinedInput
                  placeholder={player.name}
                />
              )
            })}
          </Box>
        </Box>

        <Divider />
      </Box>
    </WidgetWrapper >
  )
}

export default Menu
