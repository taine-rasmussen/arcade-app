import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WidgetWrapper from '../../wrapper/WidgetWrapper';


const Menu = (props) => {

  const {
    currentGame,
    setCurrentGame
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
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h2">
            Game mode
          </Typography>
          <Box sx={{ cursor: 'pointer' }}>
            {currentGame.singlePlayerMode ? <PersonOutlineIcon sx={iconTheme} /> : <PeopleOutlineIcon sx={iconTheme} />}
          </Box>
        </Box>
      </Box>
    </WidgetWrapper >
  )
}

export default Menu
