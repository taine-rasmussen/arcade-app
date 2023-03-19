import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react'
import { themeSettings } from './theme'
import Login from './components/login'


const App = () => {

  const [mode, setMode] = useState('dark')
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])


  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
