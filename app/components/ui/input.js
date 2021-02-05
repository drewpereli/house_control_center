import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class UiInputComponent extends Component {
  @action
  onInput(e) {
    this.args.onInput(e.target.value);
  }
}
