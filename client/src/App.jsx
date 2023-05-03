import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from './theme';
import { useMemo } from 'react';

import Pong from './games/pong';
import Snake from './games/snake';
import Memory from './games/memory';
import Login from './components/login';
import TicTacToe from './games/tictactoe';
import Dashboard from './components/dashboard';
import Minesweeper from './games/minesweeper';

const App = () => {

  const mode = useSelector((state) => state.mode)
  const isAuth = Boolean(useSelector((state) => state.token));
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='pong' element={isAuth ? <Pong /> : <Navigate to='/' />} />
            <Route path='snake' element={isAuth ? <Snake /> : <Navigate to='/' />} />
            <Route path='memory' element={isAuth ? <Memory /> : <Navigate to='/' />} />
            <Route path='dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/' />} />
            <Route path='tictactoe' element={isAuth ? <TicTacToe /> : <Navigate to='/' />} />
            <Route path='Minesweeper' element={isAuth ? <Minesweeper /> : <Navigate to='/' />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App