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
        {menuToggle
          ? (
            <motion.div
              style={{
                zIndex: '1',
                width: '20%',
                height: '100%',
                display: 'flex',
                padding: '1.5rem',
                background: main,
              }}
              animate={{ x: ['-500px', '0px'] }}
              exit={{ x: ['0px', '-500px'] }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 30,
              }}
              key="menu"
            >
              <Profile />
            </motion.div>
          ) : (
            <ListIcon
              onClick={() => { dispatch(setMenuToggle(true)) }}
              sx={{
                zIndex: '4',
                width: '70px',
                height: '70px',
                padding: '1rem',
                position: 'absolute',
                '&:hover': {
                  cursor: 'pointer'
                },
              }}
            />
          )}
      </AnimatePresence>
      <motion.div
        style={{
          zIndex: '2',
          gap: '1.5rem',
          padding: '3rem',
          display: 'flex',
          background: alt,
          borderRadius: '2rem',
          flexDirection: 'column',
          width: menuToggle ? '80%' : '100%',
          height: '100%',
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
