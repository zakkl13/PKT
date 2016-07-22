import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'root',
    templateUrl: './components/root.component.html',
    styleUrls: ['./components/root.component.css'],
    directives: [ROUTER_DIRECTIVES],
})
export class RootComponent {
    title: string = "Phi Kappa Tau - Epsilon Chi";
    subtitle: string = "at Virginia Tech";
}
