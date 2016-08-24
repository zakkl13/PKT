import { Component, OnInit} from '@angular/core';
import { Leader } from './leader';
import { LeaderService } from './leader.service';

@Component({
    selector: 'leadership',
    templateUrl: './components/leadership.component.html',
    styleUrls: ['./components/leadership.component.css'],
    providers: [LeaderService]
})
export class LeadershipComponent implements OnInit {
    title: string = "Leadership";
    leaders: Leader[];
    error_flag: boolean = false;
    loaded: boolean = false;

    constructor(private leaderService: LeaderService) {}

    ngOnInit() {
        this.leaderService.getLeaders().subscribe(
            leaders => this.set_leaders(leaders),
            error => this.set_error()
        );
    }

    private set_leaders(ldrs) {
        this.loaded = true;
        this.leaders = ldrs;
    }

    private set_error() {
        this.loaded = true;
        this.error_flag = true;
    }
}
