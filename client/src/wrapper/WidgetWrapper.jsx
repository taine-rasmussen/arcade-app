import { Box } from '@mui/material';
import { styled } from "@mui/system"

const WidgetWrapper = styled(Box)(({ theme, width, height }) => ({
  padding: '1.5rem 1.5rem 0.75rem 1.5rem',
  backgroundColor: theme.palette.background.alt,
  borderRadius: '0.75rem',
  width: `${width}%`,
  height: `${height}%`
}));

export default WidgetWrapper;