import { Box, useTheme, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Header = () => {
  const theme = useTheme();
  const username = 'EXAMPLE NAME'

  return (
    <Box
      sx={{
        width: '100%',
        height: '10%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h2"
      >
        {username}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem'
        }}
      >
        <Typography
          variant="h2"
        >
          EDIT
        </Typography>
        <EditIcon />
      </Box>
    </Box>
  )
}

export default Header
