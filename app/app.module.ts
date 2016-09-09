import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule} from "@angular/http";
import { FormsModule, provideForms, disableDeprecatedForms } from '@angular/forms';

import { RootComponent }   from './components/root.component';
import { LeaderComponent } from './components/leader.component';
import { IndexComponent } from './components/index.component';
import { RushComponent } from './components/rush.component';
import { LeadershipComponent } from './components/leadership.component';
import { PhilanthropyComponent } from './components/philanthropy.component';
import { SignupComponent } from './components/signup.component';



import { router } from "./routes";



@NgModule({
    declarations: [RootComponent,
                   LeaderComponent,
                   IndexComponent,
                   LeadershipComponent,
                   RushComponent,
                   PhilanthropyComponent,
                   SignupComponent],
    imports:      [BrowserModule,
                   FormsModule,
                   HttpModule,
                   router],
    bootstrap:    [RootComponent],
    providers: [
        disableDeprecatedForms(),
        provideForms()]
})
export class AppModule {}