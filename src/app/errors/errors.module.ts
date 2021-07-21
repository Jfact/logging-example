import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollbarService, RollbarFactory, RollbarErrorHandler } from './rollbar-error-handler';

import { JL } from 'jsnlog';
import { JsnlogErrorHandler } from './jsnlog-error-handler';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    /* JSNLog error handler */
    { provide: 'JSNLOG', useValue: JL },
    { provide: ErrorHandler, useClass: JsnlogErrorHandler },

    /* Rollbar error handler */
    // { provide: RollbarService, useFactory: RollbarFactory },
    // { provide: ErrorHandler, useClass: RollbarErrorHandler },
  ]
})
export class ErrorsModule { }
