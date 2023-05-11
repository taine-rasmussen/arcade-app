import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { Box, useTheme, Typography } from '@mui/material';

const Stats = () => {

  const theme = useTheme();
  const dark = theme.palette.primary.dark

  return (
    <WidgetWrapper
      bg={dark}
      width={43}
      height={100}
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'ease-out all 0.35s',
      }}
    >
      <Typography
        variant='h2'
        color='white'
      >
        Stats
        </Typography>
      <Typography
        variant='h2'
        color='white'
      >
        Coming
        </Typography>
      <Typography
        variant='h2'
        color='white'
      >
        Soon
        </Typography>
    </WidgetWrapper>
  )
}

export default Stats
