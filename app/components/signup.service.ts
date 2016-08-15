import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable }     from '@angular/core';
import {SignupData} from './signup.data';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {
  constructor (private http: Http) {};
  private signupUrl ="api/signup";

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  save (data: SignupData): Observable<string> {
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.signupUrl, body, options)
              .catch(this.handleError);
  }
}

