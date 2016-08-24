import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';


import { Leader } from './leader';

@Injectable()
export class LeaderService {
  constructor (private http: Http) {};
  private rusheventUrl: string = "api/leaders";

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getLeaders() : Observable<Leader[]> {
    return this.http.get(this.rusheventUrl)
                .map(res => res.json() as Leader[])
                .catch(this.handleError);
  }
}