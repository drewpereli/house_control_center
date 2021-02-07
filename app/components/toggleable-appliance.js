import Component from '@glimmer/component';
import { task } from 'ember-concurrency-decorators';

export default class ToggleableApplianceComponent extends Component {
  get on() {
    return this.args.appliance.status === 'active';
  }

  @task
  *toggle(val) {
    try {
      if (val) {
        this.args.appliance.status = 'active';
      } else {
        this.args.appliance.status = 'inactive';
      }

      yield this.args.appliance.save();
    } catch (error) {
      console.log(error);
    }
  }
}
