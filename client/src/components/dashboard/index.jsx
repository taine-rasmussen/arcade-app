import { Box, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuToggle } from '../../state/index';
import ListIcon from '@mui/icons-material/List';
import RecentlyPlayed from './recentlyPlayed';
import Profile from './profile';
import Stats from './stats';
import Games from './games';

const Dashboard = () => {

  const theme = useTheme();
  const dispatch = useDispatch()
  const alt = theme.palette.background.alt
  const main = theme.palette.background.default
  const menuToggle = useSelector(state => state.menuToggle)
  const isNonMobileScreens = useMediaQuery('(min-width:1300px)');

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: main,
        display: 'flex',
        flexDirection: 'row',
        zIndex: '2'

      }}
    >
      <AnimatePresence>
        <Box
          sx={{
            zIndex: '1',
            width: '20%',
            height: '100%',
            display: 'flex',
            padding: '1.5rem',
            background: main,

          }}
        >
          <Profile />
        </Box>
      </AnimatePresence>
      <Box
        style={{
          zIndex: '2',
          gap: '1.5rem',
          height: '100%',
          padding: '3rem',
          display: 'flex',
          background: alt,
          flexDirection: 'column',
          transition: 'ease 2s',
          width: menuToggle ? '80%' : '100%',
          borderRadius: '2rem 0 0 2rem',
        }}
      >
        <Box
          sx={{
            gap: '1.5rem',
            height: '80%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Stats />
          <Games />
        </Box>
        <RecentlyPlayed />
      </Box>
    </Box >
  )
}

export default Dashboard
