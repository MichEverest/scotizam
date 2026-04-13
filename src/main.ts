import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app/app';
import { AppRoutes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(AppRoutes),
    provideHttpClient()
  ]
});