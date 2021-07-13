import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ManageProduct from './pages/ManageProduct';
import ProductList from './pages/ProductListView';
import ProductDetail from './pages/ProductDetail';
import ProductUpdate from './pages/ProductUpdate';
import Header from './components/Header';
import SideBar from './components/Sidebar';

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
];

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
