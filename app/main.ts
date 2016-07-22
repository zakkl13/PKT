/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";

enableProdMode();

import { RootComponent } from "./components/root.component";
import { APP_ROUTER_PROVIDERS } from "./routes";

bootstrap(<Type>RootComponent, [
	APP_ROUTER_PROVIDERS,
	HTTP_PROVIDERS
]);

