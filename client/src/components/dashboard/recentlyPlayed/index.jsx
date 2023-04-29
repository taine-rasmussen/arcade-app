import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';
import SwiperWidget from './SwiperWidget';

const RecentlyPlayed = () => {

  const theme = useTheme();
  const alt = theme.palette.primary.alt
  const hightlight = theme.palette.primary.hightlight

  return (
    <WidgetWrapper
      bg={alt}
      width={100}
      height={50}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
      }}>
      <Box
        sx={{
          gap: '3rem',
          width: '20%',
          height: '90%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <Box>
          <Typography variant='h2'>
            Recently
          </Typography>
          <Typography variant='h2'>
            Played
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '60%',
          }}
        >
          <Typography
            variant='h4'
          >
            What you've been <span style={{ color: hightlight }}>loving</span> recently
          </Typography>
        </Box>
      </Box>
      <Box sx={{ maxWidth: '60%', overflow: 'hidden' }}>
        <SwiperWidget />
      </Box>
    </WidgetWrapper >
  )
}

export default RecentlyPlayed