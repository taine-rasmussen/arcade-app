import { Box, useTheme, Typography } from '@mui/material';
import ProfileWidget from '../../../widgets/profileWidget';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import StoreIcon from '@mui/icons-material/Store';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ListItemButton from '@mui/material/ListItemButton';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

const Profile = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt
  const bgAlt = theme.palette.background.bgAlt

  const spanHighlight = {
    backgroundColor: alt,
    borderRadius: '0.75rem',
    padding: '5px 0px 5px 10px'
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: 'max-content',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        variant='h1'
      >
        <span style={spanHighlight}>Mini</span>clip
      </Typography>
      <ProfileWidget preview={false} />
      <Box>
        <List>
          <ListItem >
            <ListItemButton sx={{ borderRadius: '3rem', padding: '1.25rem' }}>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary='Store' />
            </ListItemButton >
          </ListItem>
          <ListItem >
            <ListItemButton sx={{ borderRadius: '3rem', padding: '1.25rem' }}>
              <ListItemIcon>
                <LeaderboardIcon />
              </ListItemIcon>
              <ListItemText primary='Rankings' />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton sx={{ borderRadius: '3rem', padding: '1.25rem' }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Button
        variant="text"
        color="error"
        endIcon={<LogoutIcon />}
        sx={{
          '&:hover': {
            pointer: 'cursor'
          }
        }}
      >
        Logout
      </Button>
    </Box>
  )
}

export default Profile
