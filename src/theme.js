import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5000e5',
      secondary: '#666',
    },
    secondary: {
      main: '#666',
    },
    background: {
      primary: '#04043f',
      light: '#f6f6fe',
      white: '#fff',
      btn: '#5000e5',
      separator: '#D0D0D0',
    },
    text: {
      primary: '#333',
      secondary: '#666',
      link: '#5000e5',
      error: '#ef233c',
    },
  },
})

export default theme
