/// <reference path="../typings/index_es5.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import {provideForms, disableDeprecatedForms} from '@angular/forms';

enableProdMode();

import { RootComponent } from "./components/root.component";
import { APP_ROUTER_PROVIDERS } from "./routes";

bootstrap(<Type>RootComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	disableDeprecatedForms(),
	provideForms()]);

