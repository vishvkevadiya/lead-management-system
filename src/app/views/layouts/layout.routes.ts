import { Routes } from '@angular/router';
import { CompactSidenav } from './compact-sidenav/compact-sidenav';
import { DarkMode } from './dark-mode/dark-mode';
import { DarkSidenav } from './dark-sidenav/dark-sidenav';
import { HiddenSidenav } from './hidden-sidenav/hidden-sidenav';
import { HoverActiveSidenav } from './hover-active-sidenav/hover-active-sidenav';
import { HoverSidenav } from './hover-sidenav/hover-sidenav';
import { OffcanvasSidenav } from './offcanvas-sidenav/offcanvas-sidenav';
import { SmallSidenav } from './small-sidenav/small-sidenav';

export const LAYOUT_ROUTES: Routes = [
  {
    path: 'layouts/compact-sidenav',
    component: CompactSidenav,
    title: 'Compact Sidenav',
  },
  {
    path: 'layouts/dark-mode',
    component: DarkMode,
    title: 'Dark Mode',
  },
  {
    path: 'layouts/dark-sidenav',
    component: DarkSidenav,
    title: 'Dark Sidenav',
  },
  {
    path: 'layouts/hidden-sidenav',
    component: HiddenSidenav,
    title: 'Hidden Sidenav',
  },
  {
    path: 'layouts/hover-active-sidenav',
    component: HoverActiveSidenav,
    title: 'Hover Active Sidenav',
  },
  {
    path: 'layouts/hover-sidenav',
    component: HoverSidenav,
    title: 'Hover View Sidenav',
  },
  {
    path: 'layouts/offcanvas-sidenav',
    component: OffcanvasSidenav,
    title: 'Offcavas Sidenav',
  },
  {
    path: 'layouts/small-sidenav',
    component: SmallSidenav,
    title: 'Small Sidenav',
  },
];
