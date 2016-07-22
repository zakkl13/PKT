import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { Type } from '@angular/core';

import { IndexComponent } from './components/index.component'
import { RushComponent } from './components/rush.component'
import { HealthComponent } from './components/health.component'
const routes: RouterConfig = [
    {
        path: 'rush',
        component: <Type>RushComponent
    },
    {
        path: '',
        component: <Type>IndexComponent,
    },
    {
        path: 'leadership',
        component: <Type>RushComponent
    },
    {
        path: 'contact',
        component: <Type>IndexComponent
    },
    {
        path: 'health',
        component: <Type>HealthComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];