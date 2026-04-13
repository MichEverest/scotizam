import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/auth/pages/login/login')
        .then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./modules/auth/pages/register/register')
        .then(m => m.Register)
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: 'cotizaciones',
        loadChildren: () =>
          import('./modules/cotizaciones/cotizaciones-routing')
            .then(m => m.routes)
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./modules/clientes/pages/list/list')
            .then(m => m.List)
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./modules/admin/admin-dashboard')
            .then(m => m.AdminDashboard)
      },
      {
        path: 'soporte',
        loadComponent: () =>
          import('./modules/auth/pages/soporte/soporte')
            .then(m => m.Soporte)
      },
      {
        path: '',
        redirectTo: 'cotizaciones',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];