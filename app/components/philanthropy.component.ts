import { Component} from '@angular/core';
import { Leader } from './leader';
import { LeaderComponent } from './leader.component'

@Component({
    selector: 'philanthropy',
    templateUrl: './components/philanthropy.component.html',
    directives: [LeaderComponent]
})
export class PhilanthropyComponent {
    chair_loaded: boolean = false;

    panels = [
        ["About", "Phitauberfest is a one-day philanthropy fund-raising event, open to any organization at Virginia Tech, designed to promote the same fun and inclusive spirit of the SeriousFun programming that it directly supports. All funds raised will be donated directly to Serious Fun Children's Network."],
        ["Grand Prize", "The organization with the most points at the end of the event will receive a $200 donation to their respective philanthropic mission or charitable organization"]
             ];

    private togglePhilChair() {
        this.chair_loaded = !this.chair_loaded;
    }

}