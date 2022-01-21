// eslint-disable-next-line object-curly-newline
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header';
// import SideBar from './components/Sidebar';
import OverLayProvider from './components/OverLay/provider';
import SideBar from './components/Sidebar';
import ExamplePage from './pages/Example';
import ListProduct from './pages/ListProduct/pages/ListProduct';
import ProductDetail from './pages/ListProduct/pages/DetailProduct';
// import ManageProduct from './pages/ManageProduct';
// import ManageProduct from './pages/ManageProduct';
import ProductUpdate from './pages/ProductUpdate';
import ManageProduct from './pages/ManageProduct/pages/ManageProduct';
import ManageDetailProduct from './pages/ManageProduct/pages/ManageDetailProduct';

const routes = [
  {
    path: ['/quan-ly-san-pham'],
    exact: true,
    component: ManageProduct,
  },
  {
    path: ['/quan-ly-san-pham/:id'],
    component: ManageDetailProduct,
  },
  {
    path: ['/danh-sach-san-pham', '/'],
    exact: true,
    component: ListProduct,
  },
  {
    path: '/danh-sach-san-pham/:detailId',
    exact: true,
    component: ProductDetail,
  },
  {
    path: '/cap-nhat-san-pham',
    exact: true,
    component: ProductUpdate,
  },
  {
    path: '/example',
    exact: true,
    component: ExamplePage,
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
  },
  right: {
    flex: '1 1 0',
    margin: '0 16px',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <OverLayProvider>
      <Header />
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
      <ToastContainer />
    </OverLayProvider>
  );
}

export default App;
