import FlexBetween from '../../../wrapper/FlexBetween'
import { Box, useMediaQuery } from '@mui/material';

import ProfileCard from './ProfileCard';
import Settings from './Settings';

const Menu = (props) => {

  const {
    players,
    playerTurn,
    setPlayers,
  } = props;

  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  return (
    <Box
      sx={{
        gap: '2rem',
        width: '30%',
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <FlexBetween>
        {players.map((player, i) => (

          <ProfileCard
            key={i}
            player={player}
            players={players}
            playerTurn={playerTurn}
          />
        ))}
      </FlexBetween>
      <Settings />
    </Box>
  )
}

export default Menu
