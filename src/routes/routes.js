import React from 'react';
const Home = React.lazy(() => import('@pages/home'));
const AddressDetail = React.lazy(() => import('@pages/addressDetail'));

export const routes = [
  {
    path: '/',
    element:Home,
    id:1
  },
  {
    path: '/address-detail/:id',
    element: AddressDetail,
    id:2
  },
];