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

    constructor(private leaderService: LeaderService) {}

    ngOnInit() {
        this.leaderService.getLeaders().subscribe(
            leaders => this.set_leaders(leaders),
            error => this.error_flag = true
        );
    }

    private set_leaders(ldrs) {
        this.leaders = ldrs;
    }
}
