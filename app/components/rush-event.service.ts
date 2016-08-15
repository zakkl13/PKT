import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { RushEvent } from './rush_event';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RushEventService {
  constructor (private http: Http) {};
  private rusheventUrl = "api/rushevents";

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getEvents() {
    return this.http.get(this.rusheventUrl)
                    .toPromise()
                    .then(res => res.json() as RushEvent[])
                    .catch(this.handleError);
  }
}