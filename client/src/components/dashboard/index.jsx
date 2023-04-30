import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuToggle } from '../../state/index';
import RecentlyPlayed from './recentlyPlayed';
import Profile from './profile';
import Stats from './stats';
import Games from './games';
import { motion } from 'framer-motion'

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
      { menuToggle
        ? (
          <motion.div
            style={{
              width: '20%',
              height: '100%',
              display: 'flex',
              padding: '1.5rem',
              background: main,
              zIndex: '1'
            }}
            animate={{ x: ['-500px', '0px'] }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 30,
              duration: 4,
            }}
          >
            <Profile />
          </motion.div>
        ) : (
          <Box
            onClick={() => { dispatch(setMenuToggle(true)) }}
          >
            open menu
          </Box>
        )}
      <motion.div
        style={{
          gap: '1.5rem',
          padding: '3rem',
          display: 'flex',
          background: alt,
          borderRadius: '2rem',
          flexDirection: 'column',
          width: isNonMobileScreens ? '80%' : '100%',
          height: isNonMobileScreens ? '100%' : '90%',
          zIndex: '2'
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
      </motion.div>
    </Box >
  )
}

export default Dashboard
