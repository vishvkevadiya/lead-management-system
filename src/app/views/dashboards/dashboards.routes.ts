import { Routes } from '@angular/router';
import { Analytics } from './analytics/analytics';
import { Ecommerce } from './ecommerce/ecommerce';
import { Email } from './email/email';
import { Hr } from './hr/hr';

export const DASHBOARDS_ROUTES: Routes = [
  {
    path: 'dashboards/analytics',
    component: Analytics,
    title: 'Analytics',
  },
  {
    path: 'dashboards/e-commerce',
    component: Ecommerce,
    title: 'index',
  },
  {
    path: 'dashboards/email',
    component: Email,
    title: 'Email',
  },
  {
    path: 'dashboards/hr',
    component: Hr,
    title: 'HR',
  },
];
