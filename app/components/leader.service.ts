import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Request } from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs'


import { Leader } from './leader';

@Injectable()
export class LeaderService {
  constructor (private http: Http) {};
  private leaderUrl: string = "api/leaders";
  private leadersObs = new ReplaySubject(1);

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getLeaders() : ReplaySubject<{}> {

    this.leadersObs = this.leadersObs.isUnsubscribed ? new ReplaySubject(1) : this.leadersObs;

    if (!this.leadersObs.observers.length) {
      this.http.get(this.leaderUrl)
                .map(res => res.json() as Leader[])
                .catch(this.handleError)
                .subscribe(
                  leaders => this.leadersObs.next(leaders),
                  error => this.leadersObs.error(error)
                );

    }

    return this.leadersObs;

  }


  getLeader(leaderId: string) : Observable<Leader> {
      return this.http.get(this.leaderUrl + '/' + leaderId)
                .map(res => res.json() as Leader)
                .catch(this.handleError);
  }
}