import { Controller } from 'summer-ts/build/decorator/Controller';
import { RequestMapping } from 'summer-ts/build/decorator/Request';

@Controller()
@RequestMapping('/api/index')
export class IndexController {

  @RequestMapping('/index')
  public actionList() {
    return ['ok']
  }
}