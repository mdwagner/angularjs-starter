import angular from 'angular';
import 'angular-mocks';

import { ims } from '../module';
import { MyService } from './my-service';

describe('MyService', () => {
  /** @type {MyService} */
  let service;

  beforeEach(angular.mock.module(ims.name));
  beforeEach(inject(($injector) => {
    service = $injector.get(MyService.displayName);
  }));

  test('greeting', () => {
    expect(typeof service.greeting).toBe('string');
    expect(service.greeting).toEqual('Hello World!');
  });

  test('farewell', () => {
    expect(typeof service.farewell).toBe('string');
    expect(service.farewell).toEqual('Goodbye Cruel World!');
  });
});
