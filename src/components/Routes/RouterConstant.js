import shortid from 'shortid';
import React, { lazy } from 'react';

export const privateRoutes = [
  {
    id: shortid.generate(),
    path: '/dashboard',
    component: lazy(() => import('../../view/Dashboard')),
    name: 'Dashboard',
    exact: true,
  },
  {
    id: shortid.generate(),
    path: '/categories',
    component: lazy(() => import('../../view/Category')),
    name: 'Categories',
    exact: true,
  },
  {
    id: shortid.generate(),
    path: '/categories/modify/:id',
    component: lazy(() => import('../../view/Category/Modify')),
    name: 'Categories',
    exact: true,
    child: true,
  },
  {
    id: shortid.generate(),
    path: '/categories/addNew',
    component: lazy(() => import('../../view/Category/Modify')),
    name: 'Categories',
    exact: true,
    child: true,
  },
  {
    id: shortid.generate(),
    path: '/categories/detail/:id',
    component: lazy(() => import('../../view/Category/Detail')),
    name: 'Categories',
    exact: true,
    child: true,
  },
  {
    id: shortid.generate(),
    path: '/products',
    component: lazy(() => import('../../view/Products')),
    name: 'Products',
    exact: true,
  },
  {
    id: shortid.generate(),
    path: '/products/detail/:id',
    component: lazy(() => import('../../view/products/Detail')),
    name: 'Products',
    exact: true,
    child: true,
  },
  {
    id: shortid.generate(),
    path: '/products/addNew',
    component: lazy(() => import('../../view/Products/Modify')),
    name: 'Products',
    exact: true,
    child: true,
  },
  {
    id: shortid.generate(),
    path: '/products/modify/:id',
    component: lazy(() => import('../../view/Products/Modify')),
    name: 'Products',
    exact: true,
    child: true,
  },
];

export const publicRoutes = [
  {
    id: shortid.generate(),
    path: '/login',
    component: lazy(() => import('../../view/Login')),
    exact: true,
  },
  {
    id: shortid.generate(),
    path: '/signup',
    component: lazy(() => import('../../view/Signup')),
    exact: true,
  },
  {
    id: shortid.generate(),
    path: '/active-account/:id',
    component: lazy(() => import('../../view/ActiveAccount')),
    exact: true,
  },
  {
    id: shortid.generate(),
    path: '/forgot-password',
    component: lazy(() => import('../../view/ForgotPassword')),
    exact: true,
  },
  {
    id: shortid.generate(),
    path: '/reset-password/:hashId',
    component: lazy(() => import('../../view/ResetPassword')),
    exact: true,
  },
];
