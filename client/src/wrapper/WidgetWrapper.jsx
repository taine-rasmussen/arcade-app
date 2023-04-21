import { Box } from '@mui/material';
import { styled } from "@mui/system"

const WidgetWrapper = styled(Box)(({ theme, width, height, border }) => ({
  width: `${width}%`,
  borderRadius: '40px',
  height: `${height}%`,
  minWidth: 'max-content',
  borderRadius: '0.75rem',
  padding: '1.5rem 1.5rem 0.75rem 1.5rem',
  border: border ? '3px solid #000' : 'none',
  background: theme.palette.background.alt,
}));

export default WidgetWrapper;

