// eslint-disable-next-line object-curly-newline
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header';
import OverLayProvider from './components/OverLay/provider';
import SideBar from './components/Sidebar';
import ProductDetail from './pages/ListProduct/pages/DetailProduct';
import ListProduct from './pages/ListProduct/pages/ListProduct';
import ContainManageProduct from './pages/ManageProduct';

const routes = [
  {
    path: '/quan-ly-san-pham',
    // exact: true,
    component: ContainManageProduct,
  },
  {
    path: ['/danh-sach-san-pham', '/'],
    exact: true,
    component: ListProduct,
  },
  {
    path: '/danh-sach-san-pham/:id',
    exact: true,
    component: ProductDetail,
  },
];
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '95%',
    margin: '0 auto',
  },
  left: {
    width: '18%',
    margin: '8px auto',
    flexShrink: '0',
    // backgroundColor: '#58B885',
  },
  right: {
    // backgroundColor: '#B9E09F',
    width: '80%',
    margin: '0 16px',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <OverLayProvider>
        <Router>
          <Box className={classes.main} pt={2}>
            <Box className={classes.left}>
              <SideBar />
            </Box>
            <Box className={classes.right}>
              <Switch>
                {routes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Switch>
            </Box>
          </Box>
        </Router>
        <ToastContainer transition={Slide} limit={3} autoClose={1500} position="top-center" />
      </OverLayProvider>
    </>
  );
}

export default App;
