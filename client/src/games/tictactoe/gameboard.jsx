import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';


const Gameboard = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');


  return (
    <WidgetWrapper
      width={45}
      height={75}
      theme={theme}
    >
      TIC TAC TOE
    </WidgetWrapper>
  )
}

export default Gameboard
