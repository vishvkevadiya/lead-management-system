import { Routes } from '@angular/router';
import { Onepage } from './onepage/onepage';
import { Product } from './product/product';

export const LANDING_ROUTES: Routes = [
  {
    path: 'landing/onepage',
    component: Onepage,
    title: 'One Page Landing',
  },
  {
    path: 'landing/product',
    component: Product,
    title: 'Landing',
  },
];
