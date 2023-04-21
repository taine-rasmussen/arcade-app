import { useTheme, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ScoreCard = (result) => {
  const theme = useTheme()
  const bg = theme.palette.background.main
  return (
    <motion.div
      animate={{ x: ['150px', '0px'] }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      style={{
        width: '90%',
        background: bg,
        display: 'flex',
        minHeight: '20%',
        alignItems: 'center',
        borderRadius: '10px',
        justifyContent: 'center',
        border: '3px solid #000',
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