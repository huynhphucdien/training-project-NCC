import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ManageProduct from './pages/ManageProduct';
import ProductList from './pages/ProductListView';
import ProductDetail from './pages/ProductDetail';
import ProductUpdate from './pages/ProductUpdate';
import ExamplePage from './pages/Example';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import OverLayProvider from './components/OverLay/provider';

const routes = [
  {
    path: ['/quan-ly-sp', '/'],
    exact: true,
    component: ManageProduct,
  },
  {
    path: '/danh-sach-sp',
    component: ProductList,
  },
  {
    path: '/chi-tiet-sp',
    component: ProductDetail,
  },
  {
    path: '/cap-nhat-san-pham',
    component: ProductUpdate,
  },
  {
    path: '/example',
    component: ExamplePage,
  },
];

function App() {
  return (
    <OverLayProvider>
      <Header />
      <Router>
        <SideBar />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              {...route}
            />
          ))}
        </Switch>
      </Router>
      <ToastContainer />
    </OverLayProvider>
  );
}

export default App;
