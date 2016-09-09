/// <reference path="../typings/index_es5.d.ts" />
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);



