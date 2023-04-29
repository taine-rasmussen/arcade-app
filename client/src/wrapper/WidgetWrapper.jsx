import { Box } from '@mui/material';
import { styled } from "@mui/system"

const WidgetWrapper = styled(Box)(({ bg, width, height, border }) => ({
  width: `${width}%`,
  borderRadius: '40px',
  height: `${height}%`,
  borderRadius: '2rem',
  padding: '1.5rem 1.5rem 0.75rem 1.5rem',
  background: bg,
  border: border ? '3px solid #000' : 'none',
}));

export default WidgetWrapper;

