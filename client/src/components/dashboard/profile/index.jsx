import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ProfileWidget from '../../../widgets/profileWidget';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, useTheme, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

const Profile = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt

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
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: '1.5rem', padding: '1.25rem' }}>
              <ListItemIcon>
                <StoreIcon sx={{ fontSize: '32px' }} />
              </ListItemIcon>
              <ListItemText
                primary='Store'
                primaryTypographyProps={{
                  fontSize: 24,
                  fontWeight: 500
                }}
              />
            </ListItemButton >
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: '1.5rem', padding: '1rem 1.5rem' }}>
              <ListItemIcon>
                <LeaderboardIcon sx={{ fontSize: '32px' }} />
              </ListItemIcon>
              <ListItemText
                primary='Rankings'
                primaryTypographyProps={{
                  fontSize: 24,
                  fontWeight: 500
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ borderRadius: '1.5rem', padding: '1.25rem' }}>
              <ListItemIcon>
                <SettingsIcon sx={{ fontSize: '32px' }} />
              </ListItemIcon>
              <ListItemText
                primary='Settings'
                primaryTypographyProps={{
                  fontSize: 24,
                  fontWeight: 500
                }}
              />
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
