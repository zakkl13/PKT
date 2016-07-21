import { Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

//My Imports
import { IndexComponent } from './index.component'
import { RushComponent } from './rush.component'
import { HealthComponent } from './health.component'


@RouteConfig([
    {
        path: '/rush',
        name: 'Rush',
        component: RushComponent
    },
    {
        path: '/index',
        name: 'Index',
        component: IndexComponent,
        useAsDefault: true
    },
    {
        path: '/leadership',
        name: 'Leadership',
        component: RushComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: IndexComponent
    },
    {
        path: '/health',
        component: HealthComponent
    }
])
@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})
export class RootComponent {
    title: string = "Phi Kappa Tau - Epsilon Chi";
    subtitle: string = "at Virginia Tech";
}
