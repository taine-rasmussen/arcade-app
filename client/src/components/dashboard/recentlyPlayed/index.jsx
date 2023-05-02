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
      height={50}
      width={100}
      sx={{
        display: 'flex',
        flexDirection: 'row',
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
          <Typography variant='h4'>
            What you've been <span style={{ color: hightlight }}>loving</span> recently
          </Typography>
        </Box>
      </Box>
      <SwiperWidget />
    </WidgetWrapper >
  )
}

export default RecentlyPlayed