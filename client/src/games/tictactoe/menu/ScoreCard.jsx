import { useTheme, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ScoreCard = (result) => {
  const theme = useTheme()
  const bg = theme.palette.background.main
  return (
    <motion.div
      animate={{ x: ['150px', '0px'] }}
      transition={{ type: 'tween', duration: 0.45 }}
      style={{
        minHeight: '20%',
        width: '90%',
        background: bg,
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant='h3'
      >
        {result.result ? 'X' : 'O'}
      </Typography>
    </motion.div>
  )
}

export default ScoreCard