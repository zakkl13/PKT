import { Injectable } from '@angular/core';

import { EVENTS } from './static-rush-events';

@Injectable()
export class RushEventService {
  getEvents() {
    return EVENTS;
  }
}