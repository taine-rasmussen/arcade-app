import { Box } from '@mui/material';
import { styled } from "@mui/system"

const MenuItemWrapper = styled(Box)(({ theme, width, height }) => ({
  padding: '1rem',
  display: 'flex',
  width: `${width}%`,
  height: `${height}%`,
  borderRadius: '20px',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  background: theme.palette.neutral.light,
}));

export default MenuItemWrapper;