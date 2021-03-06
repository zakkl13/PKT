import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { RushEvent } from './rush_event';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class RushEventService {
  constructor (private http: Http) {};
  private rusheventUrl: string = "api/rushevents";
  private rushEvents: RushEvent[] = null;

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getEvents() : Observable<RushEvent[]> {
    if (this.rushEvents == null) {
      return this.http.get(this.rusheventUrl)
                    .map(res => res.json() as RushEvent[])
                    .catch(this.handleError);
    } else {
      return Observable.create(function (observer) {
        observer.onNext(this.rushEvents);
        observer.onCompleted();
      })
    }

  }
}