import { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { Box, Container, Typography } from '@mui/material';
import theme from './styles/theme';
import Appbar from './components/appbar/appbar';
import Banner from './components/banner/banner';
import Promotions from './components/promotions/promotions';
import Products from './components/products/products';
import Footer from './components/footer/footer';
import Appdrawer from './components/drawer/drawer';
import UIProvider from './context/ui';
import Search from './components/search/search';

function App() {
  useEffect(() => {
    document.title = "Shopping"
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: `#fff`
        }}
      >
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display={"flex"} justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant='h4'>Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <Appdrawer />
          <Search />
        </UIProvider>
      </Container>
    </ThemeProvider>

  );
}

export default App;
