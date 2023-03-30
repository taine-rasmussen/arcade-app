import { Box } from '@mui/material';
import { styled } from "@mui/system"

const WidgetWrapper = styled(Box)(({ theme, width }) => ({
  padding: '1.5rem',
  width: `${width}%`,
  borderRadius: '40px',
  height: '100%',
  minWidth: 'max-content',
  borderRadius: '0.75rem',
  padding: '1.5rem 1.5rem 0.75rem 1.5rem',
  background: theme.palette.primary.light,
  boxShadow: `${theme.palette.primary.main} 3px -3px 7.5px`,
}));

export default WidgetWrapper;