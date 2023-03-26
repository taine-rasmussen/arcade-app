import { Box } from '@mui/material';
import { styled } from "@mui/system"

const MenuItemWrapper = styled(Box)(({ theme, width, height }) => ({
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  border: '2px solid red',
  width: `${width}%`,
  height: `${height}%`
}));

export default MenuItemWrapper;