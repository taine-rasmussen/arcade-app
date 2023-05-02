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
    </WidgetWrapper>
  )
}

export default Stats
