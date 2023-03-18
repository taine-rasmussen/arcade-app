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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    </div>
  )
}

export default App
