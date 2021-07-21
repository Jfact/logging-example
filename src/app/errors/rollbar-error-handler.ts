import { ErrorHandler, Inject, Injectable, InjectionToken } from '@angular/core';
import * as Rollbar from 'rollbar';
import { ROLLBAR_SETTINGS } from '../settings/rollbar.settings';


export const RollbarService = new InjectionToken<Rollbar>('rollbar');

export function RollbarFactory() {
  return new Rollbar(ROLLBAR_SETTINGS);
}

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(
    @Inject(RollbarService) private rollbar: Rollbar
  ) {}

  handleError(err: any): void {
    this.rollbar.error(err.originalError || err);
    console.log('logged to Rollbar');
  }
}
