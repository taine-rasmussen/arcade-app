import { Box } from '@mui/material';
import { styled } from "@mui/system"

const MenuItemWrapper = styled(Box)(({ theme, width, height }) => ({
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  border: `${theme.palette.primary.light} 2px solid`,
  borderRadius: '20px',
  width: `${width}%`,
  height: `${height}%`,
  background: theme.palette.primary.light,
  maxWidth: 'max-content'
}));

export default MenuItemWrapper;