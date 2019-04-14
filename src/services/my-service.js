import { services } from './module';

export class MyService {
  static displayName = 'myService';

  greeting = 'Hello World!';
  farewell = 'Goodbye Cruel World!';
}

services.service(MyService.displayName, MyService);
