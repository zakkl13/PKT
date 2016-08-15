import { Component} from '@angular/core';
import { NgForm }    from '@angular/forms';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import {SignupData} from './signup.data';
import {SignupService} from './signup.service'

@Component({
    selector: 'signup',
    templateUrl: './components/signup.component.html',
    styleUrls: ['./components/signup.component.css'],
    providers: [SignupService],
    directives: [ROUTER_DIRECTIVES]
})
export class SignupComponent {

      constructor(private signupService: SignupService,
                  private router: Router) {}
      model = new SignupData("", "", "");
      hide_success_bar = true;

      showSuccessMessage() {
          this.hide_success_bar = false;
      }

      onSubmit() {
          this.signupService.save(this.model).subscribe(
              response => this.showSuccessMessage(),
              error => console.log(error)
          );
        }

}