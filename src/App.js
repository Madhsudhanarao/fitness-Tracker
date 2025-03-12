import React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Dashboard />
      </Container>
    </ThemeProvider>
  );
}

export default App;