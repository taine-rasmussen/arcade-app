import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ProfileWidget from '../../../widgets/profileWidget';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, useTheme, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';
import { useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

const Profile = () => {

  const theme = useTheme();
  const navigate = useNavigate();
  const alt = theme.palette.primary.alt
  const dark = theme.palette.primary.dark
  const highlight = theme.palette.primary.highlight

  const spanHighlight = {
    backgroundColor: alt,
    borderRadius: '0.75rem',
    padding: '5px 0px 5px 10px'
  }

  const listBtnStyle = {
    borderRadius: '1rem',
    padding: '1rem 2.25rem',
    '&:hover': {
      boxShadow: `0px 0px 7px -2px ${highlight}`
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          height: '10%',
          display: 'flex',
          paddingTop: '1.8rem'
        }}
      >
        <Typography
          variant='h1'
        >
          <span style={spanHighlight}>Mini</span>clip
        </Typography>
      </Box>
      <Box
        sx={{
          height: '30%',
          display: 'flex',
          alignItems: 'center',
          padding: '75px 0px 0px 0px',
        }}
      >
        <ProfileWidget preview={false} />
      </Box>
      <Box sx={{
        height: '50%',
        display: 'flex',
        padding: '75px 0px',
      }}>
        <List >
          <ListItem
            disablePadding
            sx={{ padding: '0.5rem 0rem' }}
          >
            <ListItemButton sx={listBtnStyle}>
              <ListItemIcon>
                <StoreIcon sx={{ fontSize: '32px', color: dark }} />
              </ListItemIcon>
              <ListItemText
                primary='Store'
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: dark
                }}
              />
            </ListItemButton >
          </ListItem>
          <ListItem
            disablePadding
            sx={{ padding: '0.5rem 0rem' }}
          >
            <ListItemButton sx={listBtnStyle}>
              <ListItemIcon>
                <LeaderboardIcon sx={{ fontSize: '32px', color: dark }} />
              </ListItemIcon>
              <ListItemText
                primary='Rankings'
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 500
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ padding: '0.5rem 0rem' }}
          >
            <ListItemButton sx={listBtnStyle}>
              <ListItemIcon>
                <SettingsIcon sx={{ fontSize: '32px', color: dark }} />
              </ListItemIcon>
              <ListItemText
                primary='Settings'
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 500
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          height: '10%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          variant="outlined"
          color="error"
          endIcon={<LogoutIcon />}
          sx={{
            fontSize: '20px',
            fontWeight: '500',
            '&:hover': {
              pointer: 'cursor'
            }
          }}
          onClick={() => { navigate('/') }}
        >
          Logout
      </Button>
      </Box>
    </Box >
  )
}

export default Profile
