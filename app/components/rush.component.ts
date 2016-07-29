import { OnInit, Component} from '@angular/core';
import { RushEvent } from './rush_event';
import { RushEventService } from './rush-event.service';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'rush',
    templateUrl: './components/rush.component.html',
    styleUrls: ['./components/rush.component.css'],
    providers: [RushEventService],
    directives: [ROUTER_DIRECTIVES]
})
export class RushComponent implements OnInit {
    title: string = "Rush";
    events: RushEvent[];

    constructor(private rushEventService: RushEventService) { }

    ngOnInit() {
        this.events = this.rushEventService.getEvents();
    }
}
