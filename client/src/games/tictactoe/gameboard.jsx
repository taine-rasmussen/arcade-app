import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';


const Gameboard = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');


  return (
    <WidgetWrapper
      theme={theme}
      width={45}
      height={75}
    >
      TIC TAC TOE
    </WidgetWrapper>
  )
}

export default Gameboard
