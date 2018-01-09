import 'reflect-metadata';
import { RequestProvider } from 'summer-ts/build/Provider/RequestProvider';
import { Client } from './Client';
import { ConsoleEventLogger } from './ConsoleEventLogger';
import { Autowired } from 'summer-ts/build/decorator/Autowired';
import './controllers';

export class Application {

  @Autowired
  private eventLogger: ConsoleEventLogger;

  @Autowired
  private client: Client;

  @Autowired
  private requestProvider: RequestProvider;

  public logEvent(msg: string) {
    const message: string = msg.replace(String(this.client.id), this.client.fullName);
    this.eventLogger.logEvent(message);
  }

  public boot() {
    this.logEvent('Some message for user 1');
    this.logEvent('Some message for user 2');
    return this.requestProvider.listen();
  }

}
