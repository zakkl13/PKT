import { Component} from '@angular/core';
import { RushEvent } from './rush_event';
import * as moment from 'moment/moment' ;

@Component({
    selector: 'rush',
    templateUrl: './components/rush.component.html'
})
export class RushComponent {
    title: string = "Rush";
    events: RushEvent[] = [
        {day: new Date("09/08/2016"), title: 'Cinebowl Bar & Grille', img: './static/fraternity.jpg', body: 'come chill'},
        {day: new Date("09/12/2016"), title: 'HokieHouse', img: './static/fraternity.jpg', body: 'come chill'},
        {day: new Date("09/15/2016"), title: 'Drug Party!', img: './static/fraternity.jpg', body: 'come get fucked up!!'},

    ];

    formatDate(date: Date) {
        return moment(date.toDateString(), "DD/MM");
    }
}
