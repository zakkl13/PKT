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
            leaders => this.sort_n_set(leaders),
            error => this.error_flag = true
        );
    }

    private sort_n_set(ldrs) {
        ldrs.sort(function (a, b) {
            return a.priority - b.priority
        });
        this.leaders = ldrs;
    }
}
