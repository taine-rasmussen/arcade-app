import WidgetWrapper from '../../../wrapper/WidgetWrapper';
import { useTheme } from '@mui/material';
import GamePreviewCard from './gamePreviewCard'

const GAMESLIST = [
  'Pong',
  'Snake',
  'Memory',
  'TicTacToe',
  'MineSweeper',
];

const Games = () => {
  const theme = useTheme();
  const light = theme.palette.primary.light

  return (
    <WidgetWrapper
      bg={light}
      width={77}
      height={100}
      sx={{
        gap: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {
        GAMESLIST.map((title, i) => {
          return (
            <GamePreviewCard title={title} key={i} />
          )
        })
      }
    </WidgetWrapper >
  )
}

export default Games
