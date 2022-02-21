/* eslint-disable no-console */
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import categoryProductApi from '../../api/categoryProduct';
import typeProductApi from '../../api/typeProduct';
import useLoading from '../../hooks/useLoading';
import ManageDetailProduct from './pages/ManageDetailProduct';
import ManageProduct from './pages/ManageProduct';

export default function ContainManageProduct() {
  const [typeProduct, setTypeProduct] = useState([]);
  const [categoryProduct, setCategoryProduct] = useState([]);

  const [showLoading, hideLoading] = useLoading();

  // Call Api

  const getApi = async () => {
    try {
      // setLoading(true);
      showLoading();
      const typeData = await typeProductApi.getAll();
      const categoryData = await categoryProductApi.getAll();
      if (typeData && categoryData) {
        setTypeProduct(typeData);
        setCategoryProduct(categoryData);
      }
      // setLoading(false);
      hideLoading();
    } catch (e) {
      // setLoading(false);
      showLoading();
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  //   Get path
  const match = useRouteMatch();

  return (
    <Box>
      <Switch>
        <Route path={match.path} exact>
          <ManageProduct typeProduct={typeProduct} categoryProduct={categoryProduct} />
        </Route>
        <Route path={`${match.path}/:id`}>
          <ManageDetailProduct typeProduct={typeProduct} categoryProduct={categoryProduct} />
        </Route>
      </Switch>
    </Box>
  );
}
