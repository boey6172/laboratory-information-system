// import logo from '/static/logo.png';
// import './App.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from '../src/components/GlobalStyles';
import routes from './routes';
import theme from './theme';



function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      {routing}
    </ThemeProvider>
    
  );
}

export default App;
