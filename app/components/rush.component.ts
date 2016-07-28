import { OnInit, Component} from '@angular/core';
import { RushEvent } from './rush_event';
import { RushEventService } from './rush-event.service';

@Component({
    selector: 'rush',
    templateUrl: './components/rush.component.html',
    styleUrls: ['./components/rush.component.css'],
    providers: [RushEventService]
})
export class RushComponent implements OnInit {
    title: string = "Rush";
    events: RushEvent[];

    constructor(private rushEventService: RushEventService) { }

    ngOnInit() {
        this.events = this.rushEventService.getEvents();
    }
}
