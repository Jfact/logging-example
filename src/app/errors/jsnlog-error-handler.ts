import { ErrorHandler } from '@angular/core';
import { JL } from 'jsnlog';

export class JsnlogErrorHandler implements ErrorHandler {
  handleError(error: any) {
    JL().fatalException('Uncaught Exception', error);
    console.warn('logged to SEQ');
  }
}

const logLevel = JL.getAllLevel();
const appender = JL.createAjaxAppender('example appender');
appender.setOptions({
  bufferSize: 20,
  storeInBufferLevel: 1000,
  level: logLevel,
  sendWithBufferLevel: 6000,
  url: 'http://localhost:51614/jsnlog.logger',
});

// Configure the JSNLog logging library.
// See http://jsnlog.com/Documentation/JSNLogJs
JL().setOptions({
  appenders: [appender],
  level: logLevel
});

JL().warn('Angular is starting...');

