import { Component, Input, OnInit } from '@angular/core';
import { Leader } from './leader';
import { LeaderService } from './leader.service';


@Component({
    selector: 'leader',
    providers: [LeaderService],
    templateUrl: './components/leader.component.html'
})
export class LeaderComponent implements OnInit {
    @Input() leader_id: string;
    leader: Leader;
    loaded: boolean = false;

    constructor(private leaderService: LeaderService) {}

    ngOnInit() {
          this.leaderService.getLeader(this.leader_id).subscribe(
            ldr => this.set_leader(ldr),
            error => console.log(error)
        )
    }

    private set_leader(leader: Leader) {
      this.leader = leader;
      this.loaded = true;
    }
}