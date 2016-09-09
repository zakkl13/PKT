import { provideRouter, RouterConfig, RouterModule, ExtraOptions } from '@angular/router';

import { LocationStrategy, HashLocationStrategy } from "@angular/common";

import { IndexComponent } from './components/index.component';
import { RushComponent } from './components/rush.component';
import { LeadershipComponent } from './components/leadership.component';
import { SignupComponent } from './components/signup.component';
import { PhilanthropyComponent } from './components/philanthropy.component';

const routes_config: RouterConfig = [
    {
        path: 'rush',
        component: RushComponent
    },
    {
        path: '',
        component: IndexComponent,
    },
    {
        path: 'leadership',
        component: LeadershipComponent
    },
    {
        path: 'list',
        component: SignupComponent
    },
    {
        path: 'philanthropy',
        component: PhilanthropyComponent
    }
];

var options: ExtraOptions = {useHash: true};

export const router = RouterModule.forRoot(routes_config);

// export const APP_ROUTER_PROVIDERS = [
//     provideRouter(routes),
//     { provide: LocationStrategy, useClass: HashLocationStrategy }
// ];