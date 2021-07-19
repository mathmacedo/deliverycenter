import React from 'react';

export const publicRoutes = [
  {
    path: '/teste',
    name: 'teste',
    component: React.lazy(() => import('../pages/teste')),
  },
];
