import { Service } from 'summer-ts/build/decorator/Service';

@Service
export class ConsoleEventLogger {
  public logEvent(msg: string) {
    console.log(msg);
  }
}