import { Box, useTheme, useMediaQuery } from '@mui/material';
import WidgetWrapper from '../../wrapper/WidgetWrapper';


const Menu = () => {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');


  return (
    <WidgetWrapper theme={theme}>
      menu
    </WidgetWrapper>
  )
}

export default Menu
