import { Component} from '@angular/core';
import { NgForm }    from '@angular/forms';

import {SignupData} from './signup-data.ts';

@Component({
    selector: 'rush',
    templateUrl: './components/signup.component.html',
    styleUrls: ['./components/signup.component.css']
})
export class SignupComponent {

      model = new SignupData("", "", "");

      submitted = false;
      onSubmit() { this.submitted = true; }
      // TODO: Remove this when we're done
     get diagnostic() { return JSON.stringify(this.model); }

}