import shortid from 'shortid';
import React, { lazy } from 'react';

export const privateRoutes = [
  {
    id: shortid.generate(),
    path: '/dashboard',
    component: lazy(() => import('../../view/Dashboard')),
    name: 'Dashboard',
  },
  {
    id: shortid.generate(),
    path: '/category',
    component: lazy(() => import('../../view/Category')),
    name: 'Category',
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
  },
  {
    id: shortid.generate(),
    path: '/forgot-password',
    component: lazy(() => import('../../view/ForgotPassword')),
  },
  {
    id: shortid.generate(),
    path: '/reset-password/:hashId',
    component: lazy(() => import('../../view/ResetPassword')),
  },
];