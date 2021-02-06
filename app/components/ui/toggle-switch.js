import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiToggleSwitchComponent extends Component {
  @action
  toggle() {
    this.args.onToggle(!this.args.on);
  }
}
