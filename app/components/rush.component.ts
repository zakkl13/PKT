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
    error_flag: boolean = false;
    loaded: boolean = false;

    constructor(private rushEventService: RushEventService) { }

    ngOnInit() {
        this.rushEventService.getEvents().subscribe(
            events => this.set_events(events),
            error => this.set_error()
        )
    }

    private set_error() {
        this.loaded = true;
        this.error_flag = true;
    }

    private set_events(evnts : RushEvent[]) {
        evnts.sort(function (a, b) {
            return a.priority - b.priority
        });
        this.loaded = true;
        this.events = evnts;
    }
}
