import { Factory } from 'summer-ts/build/decorator/Factory';
import { ConsoleEventLogger } from './ConsoleEventLogger';

@Factory
export class Client {

  constructor(public id: number = 1,
              public fullName: string = 'Dmitry',
              public bool: boolean = true,
              public date: Date = new Date(),
              public logger: ConsoleEventLogger) {
  }

  public init() {
    this.logger.logEvent(`${this.id} ${this.fullName} ${this.bool} ${this.date}`);
  }
}