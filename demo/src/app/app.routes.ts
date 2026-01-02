import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'basic',
    loadComponent: () =>
      import('./demos/basic/basic-demo.component').then(
        (m) => m.BasicDemoComponent
      ),
  },
  {
    path: 'custom-fonts',
    loadComponent: () =>
      import('./demos/custom-fonts/custom-fonts-demo.component').then(
        (m) => m.CustomFontsDemoComponent
      ),
  },
  {
    path: 'node-customization',
    loadComponent: () =>
      import('./demos/node-customization/node-customization-demo.component').then(
        (m) => m.NodeCustomizationDemoComponent
      ),
  },
  {
    path: 'edge-options',
    loadComponent: () =>
      import('./demos/edge-options/edge-options-demo.component').then(
        (m) => m.EdgeOptionsDemoComponent
      ),
  },
  {
    path: 'node-overlapping',
    loadComponent: () =>
      import('./demos/node-overlapping/node-overlapping-demo.component').then(
        (m) => m.NodeOverlappingDemoComponent
      ),
  },
  {
    path: 'alternate-node',
    loadComponent: () =>
      import('./demos/alternate-node/alternate-node-demo.component').then(
        (m) => m.AlternateNodeDemoComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
